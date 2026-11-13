# 合伙人端 Demo · 机构订单录入改造方案

> 目标文件：`Demo/立理 S1 合伙人端 Demo.html`（1840 行，单文件，Tailwind CDN + lucide）
> 范围：**仅合伙人端**。不联动运营后台 Demo，不改 `index.html`，不改 `Demo/立理 S1 运营后台 Demo.html`。
> 依据需求：合伙人录入机构订单 + 上传合同图片 + 填写合同金额与约定比例；**不填写已发放金额**；提交后进入「待审核」。

---

## 1. 现状勘察

| 位置 | 现状 |
| --- | --- |
| 367–380 行 `var ORDERS` | 已有 1 条机构订单种子 `ORG-20260901-001`（`kind:'org'`、`months:12`、`paid:12000`、`rate:20`、`prepaid:200`） |
| 382–385 行 `var SETTLE` | 含 1 条「录入时已发放 ¥200」结算记录，指向上述机构订单 |
| 397 行 `calcOrder(o)` | 已支持 `kind:'org'` 按 `months` 分期；**分期基准日取 `o.time`**，每期解冻 = `time + k 个月 + 7 天` |
| 506 行 `ordersHtml(items)` | 已支持机构订单展示（机构名称、按 N 个月服务期分期、分期明细展开） |
| 571 行 `ordersNote()` | 说明文案里包含「录入前已线下发放」口径 |
| 1641–1742 行 `pComm()` | 只有「订单明细 / 结算记录」两个 tab；`isFlow` 单布尔控制，`settle` 用 `!isFlow` 高亮 |
| 1729–1732 行 tab 区 | `S.tab='flow'` / `S.tab='settle'`，右侧辅助说明随 tab 切换 |
| 972 行 `showUnappliedModal(p)` | 现有弹窗范式：`fixed inset-0 bg-slate-title/50 backdrop-blur-xs … rounded-[24px]`，`renderIcons()` 收尾 |
| 1205 行 `simulateApprove()` | 已有「模拟审核」的 Demo 约定，可沿用命名与提示口径 |
| 1793–1837 行 `route()` | 路由入口，`route()` 在脚本末尾执行 |

**结论**：分佣核算与展示层已完备，缺的是「合伙人提交入口 + 申请单状态展示 + 审核通过后落成订单」这一段。本次改造不需要动 `calcOrder` 与 `ordersHtml` 的算法。

---

## 2. 范围边界

**做**
- 我的订单页新增第三个 tab「机构订单」。
- 合伙人录入机构订单（含合同图片上传）→ 提交为「待审核」。
- 申请单列表：待审核 / 已通过 / 已驳回（含驳回原因）。
- 审核通过后生成机构订单，自动进入「订单明细」并按合同周期分期。
- Demo 内提供「模拟运营通过 / 模拟驳回」按钮（标注演示用，不连运营端）。

**不做**
- 不做与运营后台 Demo 的 localStorage 联动、不共用 key。
- 不做运营端审核界面、不做消息通知、不做撤回/编辑已提交申请。
- 不改动分佣算法、退款/待追回逻辑、结算记录结构。
- 不引入任何新依赖；图标一律用 lucide。

---

## 3. 流程与状态机

```
未提交 ──录入(合同信息+1~3张图)──▶ 待审核(PENDING)
                                   │
              ┌────模拟运营通过────┴────模拟运营驳回(填原因)────┐
              ▼                                              ▼
        已通过(APPROVED)                                已驳回(REJECTED)
              │                                              │
   生成 ORDERS 记录(kind:'org')                       展示驳回原因，可再次提交
   进入「订单明细」，按月分期
```

- 「待审核 / 已驳回」的申请**只出现在机构订单 tab**，不进入订单明细，不计入推广币合计。
- 「已通过」才生成订单并计入核算。
- 同一合同编号在该合伙人下只允许存在 1 条 PENDING/APPROVED 记录（重复提交拦截）。

---

## 4. 数据契约

### 4.1 申请单 `ORG_REQS`（新增）

```js
{
  id: 'ORGREQ-20261110-001',   // ORGREQ-YYYYMMDD-序号
  org: '中国科学技术大学未来技术学院',
  contract_no: 'LL-2026-1106-01',
  amount: 50000,               // 合同金额（元）
  rate: 15,                    // 约定比例（%）
  start: '2026-11-10',         // 服务起始日
  months: 12,                  // 服务周期（月）
  remark: '',
  contract_imgs: [dataUrl],    // 1~3 张，canvas 压缩后
  status: 'PENDING' | 'APPROVED' | 'REJECTED',
  created_at: '2026-11-10 14:20',
  reviewed_at: '', reviewer: '', reject_reason: '', order_id: ''
}
```

- **不含 `paid_out` / 已发放金额字段**（需求明确不需要填写）。
- 存储：`localStorage` key `ll_s1_partner_org_demo_v1`（仅合伙人端自用，不与运营端共享）；读取失败降级为内存数组。
- 种子：1 条 PENDING（中科大未来技术学院 / LL-2026-1106-01 / 50000 / 15% / 12 月 / 2 图）、1 条 REJECTED（南京大学人工智能学院 / LL-2026-1029-07 / 30000 / 12% / 6 月 / 原因「合同盖章页缺失，请补充后重新提交。」）。图片用运行时生成的 SVG `dataURL`（`makeContractImg()`），避免大段 base64。

### 4.2 审核通过后生成的订单（写入现有 `ORDERS`）

```js
{
  no: 'ORG-20261110-001', time: start,              // time 必须=服务起始日（calcOrder 以 time 为分期基准）
  name: '机构年度套餐（机构订单）', kind: 'org', months,
  paid: amount, rate, org, refund: 0,
  prepaid: 0                                       // 已发放金额固定 0，不再产生
}
```

- 现有种子 `ORG-20260901-001`（`prepaid:200`）与 `SETTLE` 中「录入时已发放」记录**保留不动**，作为历史数据演示；新流程不再产生该口径。

---

## 5. 页面改造点

### 5.1 tab 区（1730 行附近）

- 新增第三个按钮：`<button onclick="S.tab='org';pComm()">机构订单</button>`。
- `pComm()` 增加 `var isOrg = S.tab === 'org';`。
- **修复既有隐患**：结算记录按钮的高亮条件由 `!isFlow` 改为 `S.tab === 'settle'`，否则新增 tab 后结算记录会同时高亮。
- 内容区三态分流：`isOrg ? orgReqHtml() : (原订单明细/结算记录)`；分页器在 org tab 不渲染。

### 5.2 机构订单列表 `orgReqHtml()`

- 顶部：`共 N 条申请 · 待审核 M 条` + 右侧主按钮「录入机构订单」（仅 `S.user.st === 'APPROVED'` 可见）。
- 卡片内容：机构名称 + 状态徽章；申请编号、提交时间；6 宫格只读信息（合同编号 / 合同金额 / 约定比例 / 服务周期 / 服务起始日 / 提交时间）；合同图片缩略图（点击放大）；状态提示条。
- 状态提示条：
  - PENDING：`等待运营审核，审核通过后自动生成机构订单。` + 两个演示按钮「模拟运营通过」「模拟驳回」（小号幽灵按钮，`title` 标注"演示用"）。
  - REJECTED：红色条展示`驳回原因`+「可修改后重新提交」（点击带出上次填写内容）。
  - APPROVED：绿色条展示`已生成机构订单 ORG-xxx，佣金按 N 期分期解冻`。
- 排序：`created_at` 倒序。空态：`building-2` 图标 + `暂无机构订单申请` + 引导文案。

### 5.3 录入弹窗 `showOrgEntryModal()`

沿用 `showUnappliedModal` 的遮罩与卡片规范，尺寸 `max-w-xl`，三段式（头部 / 可滚动表单 / 底部按钮）。

字段（`*` 必填）：

| 字段 | 控件 | 校验 |
| --- | --- | --- |
| 机构名称 * | text | 非空 |
| 合同编号 * | text | 非空 + 去重 |
| 合同金额（元）* | number | > 0 |
| 约定比例（%）* | number | 0–100，默认 20，附提示「按合同约定填写，提交后由运营复核」 |
| 服务起始日 * | date | 默认 `REF_DATE` |
| 服务周期（月）* | number | 1–60，默认 12 |
| 合同图片 * | file(multiple) | 1–3 张，单张 ≤5MB，仅图片 |
| 备注 | text | 选填 |

- 明确**不出现「已发放金额」输入项**；弹窗副标题写明「审核通过后自动生成订单；无需填写已发放金额」。
- 图片交互：3 格网格 + 虚线「上传合同图片」按钮 + 右上角单张删除；`FileReader → Image → canvas` 压缩（最长边 1200，JPEG 0.72，白底铺底）；超出 3 张、非图片、超 5MB 均 toast 拦截。
- 提交成功：写入 `ORG_REQS` → 关闭弹窗 → `S.tab='org'` → 重渲染 → toast「已提交，等待运营审核」。

### 5.4 演示审核动作（不联动）

- `demoApproveOrgReq(id)`：状态转 APPROVED、写入 `reviewed_at/reviewer='演示审核'`、生成订单（合同号重复则拦截）→ 写 `order_id` → 重渲染 → toast「演示：审核通过，已生成订单 ORG-xxx」。
- `demoRejectOrgReq(id)`：用轻量弹窗/输入收集驳回原因（必填，空则 toast 拦截）→ 状态转 REJECTED → 重渲染 → toast「演示：已驳回」。
- 两个动作都只操作本地数据，页面提示「演示用，正式版由运营后台审核」。

### 5.5 图片放大

`showOrgImg(src)`：全屏遮罩 `z-[60]` + 居中 `max-h-[85vh]` 图片，点击任意处关闭；不依赖第三方库。

---

## 6. 代码组织与插入位置

| 序号 | 位置 | 改动 |
| --- | --- | --- |
| 1 | 380 行 `ORDERS` 之后 | 新增 `ORG_LS_KEY`、`ORG_REQS` 种子、`loadOrgReqs / saveOrgReqs`、`makeContractImg`、`nextOrgReqId`、`seedOrgReqs` |
| 2 | 575 行工具函数区之后 | 新增 `orgReqHtml / orgReqCard / orgReqBadge / showOrgEntryModal / closeOrgEntryModal / readOrgImages / renderOrgImgs / removeOrgImg / submitOrgReq / demoApproveOrgReq / demoRejectOrgReq / showOrgImg / hydrateOrgOrders` |
| 3 | 1642 行 `pComm()` 开头 | 增加 `isOrg` |
| 4 | 1730 行 tab 区 | 新增机构订单按钮 + 修正 settle 高亮 + 说明文案三态 |
| 5 | 1735–1736 行内容区 | 三态分流，org tab 不渲染分页器 |
| 6 | 1836 行 `route()` 之前 | 调用一次 `hydrateOrgOrders()`，把本地已通过的申请补齐进 `ORDERS` |

- 预计净增约 260 行，全部为新增函数 + 少量既有行替换；`calcOrder`、`ordersHtml`、`SETTLE`、结算逻辑零改动。
- 图标全部使用 lucide（`plus`、`building-2`、`upload`、`image`、`x`、`calendar`、`check-circle-2`、`alert-circle`、`clock`、`file-text`），经 `renderIcons()` 渲染。

---

## 7. 视觉规范

- 全部复用现有 token：`bg-surface-card / bg-surface-subtle / border-surface-border / text-slate-title / text-slate-muted / brand-500`、`rounded-[20px]`、`shadow-card`。
- 状态徽章沿用 `BADGE` 常量：待审核 `amber`、已通过 `emerald`、已驳回 `rose`。
- 主按钮：`bg-brand-500 hover:bg-brand-600 text-white rounded-full shadow-sm shadow-brand-500/25`；次按钮：`border border-surface-border text-slate-body`。
- 不引入新字体、新色板、新动画（仅沿用 `animate-fade-in`、`transition-all`）。

---

## 8. 校验与边界

1. 必填项为空、金额 ≤0、比例越界、周期越界 → 单项 toast，阻止提交。
2. 合同图片 0 张 → 阻止提交；>3 张只取前 3 张并提示。
3. 同一合同编号已存在 PENDING/APPROVED → 拦截并提示「该合同编号已提交，请勿重复」。
4. 非 APPROVED 账号（PENDING/REJECTED/FROZEN）不可见录入入口，路由层已在 1795–1806 行拦截。
5. `hydrateOrgOrders()` 幂等：按订单号去重，重复刷新不重复生成。
6. localStorage 不可用（隐私模式）时降级为内存数组，功能不报错。

---

## 9. 验证清单

- [ ] 登录 `13800000003`（已通过）→ 我的订单 → 三 tab 切换正常，互不高亮串台。
- [ ] 机构订单 tab 显示种子：1 待审核 + 1 已驳回；驳回原因可见。
- [ ] 录入：不填任何字段提交被逐项拦截；正常填写 + 2 张图 → 提交成功，列表置顶显示待审核，推广币合计不变。
- [ ] 重复提交同一合同编号被拦截。
- [ ] 模拟通过 → 生成 `ORG-YYYYMMDD-xxx` 订单，切到订单明细可见，`paid/rate/months` 正确，分期期数 = 合同周期，首期解冻日 = 起始日 +1 月 +7 天。
- [ ] 模拟驳回 → 弹窗必填原因；提交后卡片显示驳回原因，且未生成订单。
- [ ] 刷新页面：申请单与已生成订单均保留（localStorage）。
- [ ] 切换 `13800000001` 等其他账号 → 无法进入我的订单；`13800000004` 冻结账号行为不变。
- [ ] 控制台无报错；原订单明细、结算记录、退款待追回、分页均无回归。

---

## 10. 假设与待确认

1. **审核模拟方式**（默认按本方案）：卡片内放「模拟运营通过 / 模拟驳回」按钮，标注演示用。若希望完全不出现审核按钮，可改为仅展示固定种子的已通过/已驳回样本（则无法现场演示"审核后生成订单"）。
2. **已发放金额口径**：新流程不再填写；历史种子 `ORG-20260901-001` 的 `prepaid:200` 与结算记录保留，仅作为历史数据。如需彻底移除该口径，需要同步调整 `calcOrder` 与结算说明（本次不做）。
3. **合同图片** 只做本地预览与存储（dataURL），不落服务器。
