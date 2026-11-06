---
name: Lili S1 Admin Backoffice Design System (立理 S1 运营管理后台设计系统)
description: Obsidian Precision — 基于 shadcn/ui 与 Tailwind CSS v4 的官方平台管理后台设计规范
source: https://ali-dev.s1.liliai.cn/admin/
colors:
  primary: "#09090B"
  primary-hover: "#27272A"
  primary-foreground: "#FAFAFA"
  background: "#FFFFFF"
  foreground: "#09090B"
  muted: "#F4F4F5"
  muted-foreground: "#71717A"
  card: "#FFFFFF"
  card-foreground: "#09090B"
  border: "#E4E4E7"
  input: "#E4E4E7"
  destructive: "#E11D48"
  destructive-foreground: "#FFFFFF"
  badge-success-bg: "#F0FDF4"
  badge-success-text: "#15803D"
  badge-success-border: "#DCFCE7"
  badge-warning-bg: "#FEFCE8"
  badge-warning-text: "#A16207"
  badge-warning-border: "#FEF08A"
  badge-danger-bg: "#FEF2F2"
  badge-danger-text: "#B91C1C"
  badge-danger-border: "#FECACA"
typography:
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
  fontVariantNumeric: "tabular-nums"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
---

# 立理 S1 运营管理后台设计系统 (DESIGN_ADMIN.md)

> [!IMPORTANT]
> **设计系统隔离原则**：
> * **合伙人端规范**：维护在根目录 [`DESIGN.md`](DESIGN.md) 中，代号 **Warm Kinetic Precision**（以日光橙 `#FF5C28` 为品牌主色，面向学者、高校博主与外部渠道合伙人，强调活力与激励感）；
> * **运营后台规范**：本文件（`DESIGN_ADMIN.md`），代号 **Obsidian Precision**（以曜石黑 `#09090B`、纯白 `#FFFFFF`、微灰 `#E4E4E7` 为主色，完全 1:1 对齐官方线上中后台 `https://ali-dev.s1.liliai.cn/admin/` 的 shadcn/ui 工业规范）。两者互不干扰、独立演进。

---

## 1. 核心视觉哲学 (Obsidian Precision)

本设计系统逆向提炼自立理官方后台线上环境，包含平台看板、用户管理、公测申请审核、机构管理、计费配置、扣费详情、审计日志等 7 大核心业务界面。

### 核心特征：
1. **曜黑与纯白为骨架 (Monochromatic Precision)**：
   * 主按钮（如“通过”、“新增”、“导出”）统一采用深曜黑背景 `#09090B`、纯白文字；
   * 极度克制彩色使用，杜绝任何大面积品牌彩色对严肃作业中后台的视觉干扰。
2. **通透白底与微细边框 (Subtle Layering)**：
   * 页面底色为浅微灰 `#FAFAFA`，卡片与容器为纯白 `#FFFFFF`；
   * 依赖 `1px` 微细描边 `#E4E4E7`（`border border-border`）区隔空间，辅以 `shadow-xs` 微弱氛围投影。
3. **等宽数字扫视 (Tabular Nums)**：
   * 所有积分、金额、手机号、日期强制应用 `font-variant-numeric: tabular-nums`，确保表格扫视纵向严格对齐。

---

## 2. 真实设计令牌 (Design Tokens)

```css
:root {
  --radius: 0.625rem; /* 10px */

  /* 基础画布与容器 */
  --background: oklch(100% 0 0);               /* #FFFFFF 纯白底色 */
  --foreground: oklch(12.9% 0.042 264.695);     /* #09090B 深黑正文 */
  --card: oklch(100% 0 0);                     /* #FFFFFF 卡片背景 */
  --card-foreground: oklch(12.9% 0.042 264.695);

  /* 主操作按钮 (Primary) */
  --primary: oklch(20.8% 0.042 265.755);       /* #09090B 曜石黑 */
  --primary-foreground: oklch(98.4% 0.003 247.858); /* #FAFAFA 纯白文字 */

  /* 次级表面与悬浮 (Muted & Accent) */
  --secondary: oklch(96.8% 0.007 247.896);     /* #F4F4F5 浅灰次级 */
  --muted: oklch(96.8% 0.007 247.896);         /* #F4F4F5 浅灰底纹/悬浮 */
  --muted-foreground: oklch(55.4% 0.046 257.417); /* #71717A 辅助文字、表头文字 */

  /* 边框与控件 (Borders & Inputs) */
  --border: oklch(92.9% 0.013 255.508);        /* #E4E4E7 极细分割线 */
  --input: oklch(92.9% 0.013 255.508);         /* #E4E4E7 表单边框 */

  /* 功能告警色 (Destructive) */
  --destructive: oklch(57.7% 0.245 27.325);    /* #E11D48 危险红 */
  --destructive-foreground: #FFFFFF;

  /* 侧边栏专属 (Sidebar) */
  --sidebar: #FFFFFF;
  --sidebar-accent: #F4F4F5;                   /* 激活菜单背景 */
  --sidebar-accent-foreground: #09090B;        /* 激活菜单加粗黑字 */
  --sidebar-border: #E4E4E7;
}
```

---

## 3. 官方标准组件范式 (Component Standards)

1. **侧边栏 (Sidebar)**：
   * 宽度 `256px`，纯白底色；
   * Logo 为黑字“立理”加黑方框“S1”，副标为灰字“平台管理后台”；
   * 激活菜单项采用浅灰圆角底色（`bg-muted`）搭配加粗文字；
   * 底部常驻管理员卡片（“张博文 / zby”，双向小箭头）。
2. **顶栏 (Header)**：
   * 高度 `56px`，左侧折叠图标，右侧全局搜索框（带放大镜和 `⌘ K` 胶囊徽章）、主题切换和圆形头像。
3. **筛选卡片 (Filter Box)**：
   * 纯白卡片，顶部加粗小标题“筛选申请/合伙人”，右上角【重置】漏斗按钮；
   * 控件水平网格排列，上方带灰色小 Label，输入框高 `34px`，小圆角 `rounded-md`。
4. **数据表格 (Data Table)**：
   * 顶部条目统计汇总条与刷新按钮；
   * 表头浅灰单字无背景底，单元格高 `48px`，悬浮微灰泛白；
   * 操作列按钮：【通过】黑底白字小圆角，【拒绝】红底白字小圆角，【详情】白底细灰描边黑字轮廓按钮。
5. **分段选项卡 (Segmented Tabs)**：
   * 浅灰胶囊托盘，选中项为白底微阴影小圆角块，文字加粗。
