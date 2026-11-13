let dashUnitsSel = [];
try { dashUnitsSel = JSON.parse(localStorage.getItem('ll_dash_units') || '[]') || []; } catch (e) { dashUnitsSel = []; }
let dashUnitsDraft = [];
function saveDashUnits() { try { localStorage.setItem('ll_dash_units', JSON.stringify(dashUnitsSel)); } catch (e) {} }
function availDashUnits() { return UNITS.concat(PARTNERS.some(p => UNITS.indexOf(p.unit) < 0) ? ['未分配'] : []); }
function unitCount(u) { return u === '未分配' ? PARTNERS.filter(p => UNITS.indexOf(p.unit) < 0).length : PARTNERS.filter(p => p.unit === u).length; }
function openDashUnitModal() {
  dashUnitsDraft = dashUnitsSel.slice();
  const all = availDashUnits();
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-mask show" id="modal-dash-units" onclick="if(event.target===this)closeModal('modal-dash-units')">
      <div class="modal-dialog" style="max-width: 440px;">
        <div class="modal-dialog-header">
          <h3>看板展示单位</h3>
          <button class="btn-ghost" style="padding: 4px;" onclick="closeModal('modal-dash-units')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:10px;">
            <span class="form-hint-note" style="margin:0;">仅勾选的单位会显示在分单位数据区</span>
            <div style="display:flex; gap:4px; flex:none;">
              <button class="btn btn-ghost btn-sm" onclick="dashUnitsAll(true)">全选</button>
              <button class="btn btn-ghost btn-sm" onclick="dashUnitsAll(false)">清空</button>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${all.map(u => `<label style="display:flex; align-items:center; gap:10px; border:1px solid var(--border); border-radius:var(--radius-md); padding:10px 12px; cursor:pointer;">
              <input type="checkbox" value="${u}" ${dashUnitsDraft.indexOf(u) >= 0 ? 'checked' : ''} onchange="toggleDashUnit(this)">
              <span style="font-size:13px;">${u}</span>
              <span class="num" style="margin-left:auto; font-size:12px; color:var(--muted-foreground);">${unitCount(u)} 位合伙人</span>
            </label>`).join('')}
          </div>
        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-dash-units')">取消</button>
          <button class="btn btn-primary" onclick="confirmDashUnits()">确定</button>
        </div>
      </div>
    </div>`;
}
function toggleDashUnit(cb) {
  if (cb.checked) { if (dashUnitsDraft.indexOf(cb.value) < 0) dashUnitsDraft.push(cb.value); }
  else dashUnitsDraft = dashUnitsDraft.filter(x => x !== cb.value);
}
function dashUnitsAll(on) {
  dashUnitsDraft = on ? availDashUnits().slice() : [];
  document.querySelectorAll('#modal-dash-units input[type=checkbox]').forEach(cb => { cb.checked = on; });
}
function confirmDashUnits() {
  dashUnitsSel = dashUnitsDraft.slice();
  saveDashUnits();
  closeModal('modal-dash-units');
  renderActiveView();
}



// ==========================================
// 数据状态 (Data State)
// ==========================================
const GLOBAL_CONFIG = {
  internal_first_rate: 15.0,
  internal_renew_rate: 10.0,
  external_first_rate: 30.0,
  external_renew_rate: 20.0,
  unfreeze_days: 7,
  rebuy_cool_days: 90
};

// 单位配置：审核建档时选择归属单位，数据看板按单位分组统计
let UNITS = ['赤道银河', '中部知光', '启点视界'];

const CONFIG_LOGS = [
  { time: '2026-10-15 10:00', operator: '陈嘉禾', text: '初始化基准分成比例：内部 首购 15.0% / 续购 10.0%，外部 首购 30.0% / 续购 20.0%' }
];

let APPLICATIONS = [
  {
    id: 'APP-1001',
    name: '沈亦舟',
    org: '中国科学院自动化研究所',
    role: '副研究员 / 博士生导师',
    phone: '13811223344',
    wx: 'shen_yz_dr',
    apply_time: '2026-11-04 14:20',
    status: 'PENDING',
    approve_time: '', approve_by: '',
    reject_time: '', reject_by: '',
    reject_reason: '',
    logs: [
      { time: '2026-11-04 14:20', operator: '申请人', action: '提交入驻申请', detail: '自主注册并提交导师资质' }
    ]
  },
  {
    id: 'APP-1002',
    name: '陈晓萌',
    org: '清华大学交叉信息研究院',
    role: '在读博士研究生',
    phone: '13900112233',
    wx: 'momo_academic',
    apply_time: '2026-11-04 11:05',
    status: 'PENDING',
    approve_time: '', approve_by: '',
    reject_time: '', reject_by: '',
    reject_reason: '',
    logs: [
      { time: '2026-11-04 11:05', operator: '申请人', action: '提交入驻申请', detail: '自主注册提交材料' }
    ]
  },
  {
    id: 'APP-1003',
    name: '张宇轩',
    org: '智见 AI 科技自媒体',
    role: '主理人 / 科技博主',
    phone: '13688997766',
    wx: 'zhijian_ai',
    apply_time: '2026-11-02 09:30',
    status: 'REJECTED',
    approve_time: '', approve_by: '',
    reject_time: '2026-11-02 16:10', reject_by: '陈嘉禾',
    reject_reason: '申请材料未提供有效的学术媒体主页或高校凭证，暂不符合本期合伙人准入要求。',
    logs: [
      { time: '2026-11-02 09:30', operator: '申请人', action: '提交入驻申请', detail: '自主注册提交材料' },
      { time: '2026-11-02 16:10', operator: '陈嘉禾', action: '拒绝申请', detail: '原因：申请材料未提供有效的学术媒体主页或高校凭证' }
    ]
  },
  {
    id: 'APP-1004',
    name: '李维国',
    org: '北京航空航天大学计算机学院',
    role: '教授 / 实验室负责人',
    phone: '13700001111',
    wx: 'prof_li_buaa',
    apply_time: '2026-10-18 10:15',
    status: 'APPROVED',
    approve_time: '2026-10-18 14:22', approve_by: '陈嘉禾',
    reject_time: '', reject_by: '',
    reject_reason: '',
    logs: [
      { time: '2026-10-18 10:15', operator: '申请人', action: '提交入驻申请', detail: '申请材料通过初筛' },
      { time: '2026-10-18 14:22', operator: '陈嘉禾', action: '审核通过', detail: '设为外部渠道，初始比例 30.0%，指定专属推荐码 8866' }
    ]
  }
];

let PARTNERS = [
  {
    id: 'PT-8866',
    name: '李维国',
    unit: '赤道银河',
    org: '北京航空航天大学计算机学院',
    role: '教授 / 实验室负责人',
    phone: '13700001111',
    wx: 'prof_li_buaa',
    channel_type: 'EXTERNAL',
    code: '8866',
    first_rate: 30.0,
    renew_rate: 20.0,
    customers_count: 18,
    paying_count: 7,
    points: { total: 7322, withdrawable: 3909, frozen: 1413, settled: 2000, unrecovered: 0 },
    status: 'NORMAL',
    freeze_reason: '',
    join_time: '2026-10-18 14:22',
    orders: [
      { id: 'ORD-20260218-0301', customer_phone: '13812345678', product: 'Pro 月卡 (首购)', pay_amount: 299.00, rate: 30.0, points: 89.70, status: 'UNFROZEN', unfreeze_at: '2026-03-25', created_at: '2026-02-18 09:30', is_upgrade: false, is_cool: false },
      { id: 'ORD-20261103-0921', customer_phone: '13812345678', product: 'Pro 月卡 (续购)', pay_amount: 369.00, rate: 20.0, points: 73.80, status: 'FROZEN', unfreeze_at: '2026-12-10', created_at: '2026-11-03 14:20', is_upgrade: false, is_cool: false },
      { id: 'ORD-20261025-0811', customer_phone: '15011223344', product: 'Max 年卡', pay_amount: 1000.00, rate: 20.0, points: 200, status: 'FROZEN', unfreeze_at: '2027-11-01', created_at: '2026-10-25 16:40', is_upgrade: true, upgrade_from: 'ORD-20261012-0455', is_cool: false },
      { id: 'ORD-20261012-0455', customer_phone: '15011223344', product: 'Pro 年卡', pay_amount: 2999.00, rate: 30.0, points: 899.70, status: 'FROZEN', unfreeze_at: '2027-10-19', created_at: '2026-10-12 09:41', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260925-0102', customer_phone: '18600112233', product: 'Pro 月卡 (首购)', pay_amount: 299.00, rate: 30.0, points: 89.70, status: 'UNFROZEN', unfreeze_at: '2026-11-01', created_at: '2026-09-25 18:05', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260920-0088', customer_phone: '13966554433', product: 'Lite 年卡', pay_amount: 999.00, rate: 30.0, points: 299.70, status: 'UNFROZEN', unfreeze_at: '2026-10-20', created_at: '2026-09-20 11:30', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260915-0012', customer_phone: '13344556677', product: 'Pro 月卡', pay_amount: 299.00, rate: 30.0, points: 89.70, status: 'UNFROZEN', unfreeze_at: '-', created_at: '2026-09-15 10:11', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260820-0066', customer_phone: '17722334455', product: 'Pro 年卡 (首购)', pay_amount: 2999.00, rate: 30.0, points: 899.70, status: 'PAID', unfreeze_at: '2026-09-27', created_at: '2026-08-20 11:30', is_upgrade: false, is_cool: false, refunds: [{ amount: 2374.20, date: '2026-11-06', reason: '第 3 期已使用一半按半退，第 4 期起未使用全额退', voucher: 'TK-20261106-001' }] },
      { id: 'ORD-20260820-0201', customer_phone: '15533556677', product: 'Max 年卡 (首购)', pay_amount: 2999.00, rate: 30.0, points: 899.70, status: 'PAID', unfreeze_at: '2026-09-27', start: '2026-08-20', created_at: '2026-08-20 15:10', is_upgrade: false, is_cool: false, refunds: [{ amount: 2999.00, date: '2026-11-06', reason: '客户使用 2 个月后反馈效果不佳，要求全额退款', voucher: 'TK-20261106-002' }] },
      { id: 'ORG-20260810-001', customer_phone: '', org_name: '北京航空航天大学人工智能研究院', contract_no: 'HT-2026-0810-A', kind: 'ORG', product: '机构版年度合同（线下签约）', pay_amount: 40000.00, rate: 30.0, points: 12000, status: 'ORG', unfreeze_at: '按月分期', created_at: '2026-08-10 10:00', start: '2026-08-10', months: 12, paid_out: 0, remark: '', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260525-0042', customer_phone: '13422334455', product: 'Max 年卡', pay_amount: 9999.00, rate: 30.0, points: 2999.70, status: 'FROZEN', unfreeze_at: '-', created_at: '2026-05-25 14:10', is_upgrade: false, is_cool: false }
    ],
    flow: [
      { time: '2026-03-25 01:00', order_id: 'ORD-20260218-0301', type: '解冻计入', points: '+89.70', status: '已划入可结算金额' },
      { time: '2026-11-03 14:20', order_id: 'ORD-20261103-0921', type: '冻结计入 (续购)', points: '+73.80', status: '冻结中 (预计 2026-12-10 解冻)' },
      { time: '2026-10-28 15:00', order_id: 'SETTLE-202610-008', type: '线下结算核销', points: '-2,074.98', status: '财务已打款 (流水 BCM202610288892)' },
      { time: '2026-10-25 16:40', order_id: 'ORD-20261025-0811', type: '冻结计入 (升级补差·续购)', points: '+200.00', status: '冻结中 (预计 2027-11-01 解冻)' },
      { time: '2026-10-27 01:00', order_id: 'ORD-20260920-0088', type: '年卡分期解冻 (第 1/12 期)', points: '+24.98', status: '划入可结算金额' },
      { time: '2026-11-06 10:30', order_id: 'ORD-20260820-0066', type: '退款扣除', points: '-712.26', status: '退款 ¥2,374.20（第 3 期半退，第 4 期起全退）' }
    ],
    settlements: [
      { batch_no: 'SETTLE-202609-009', points: 74.98, voucher: 'BCM202609308871', operator: '财务王敏', time: '2026-09-30 11:20', remark: 'Max 年卡第 1 期推广佣金' },
      { batch_no: 'SETTLE-202610-008', points: 2074.98, voucher: 'BCM202610288892', operator: '财务王敏', time: '2026-10-28 15:00', remark: '2026年9-10月度推广服务费，招商银行公对私打款付清' }
    ],
    customers: [
      { phone: '13812345678', bind_time: '2026-10-02 10:20', reg_time: '2026-10-02 10:25', plan: 'Pro 月卡', plan_status: 'ACTIVE_MONTH', expire_at: '2026-12-02', orders_cnt: 2, gmv: 668.00 },
      { phone: '13599887766', bind_time: '2026-09-15 21:03', reg_time: '2026-09-15 21:05', plan: 'Max 年卡', plan_status: 'ACTIVE_YEAR', expire_at: '2027-10-25', orders_cnt: 2, gmv: 4199.00 },
      { phone: '15011223344', bind_time: '2026-10-11 12:30', reg_time: '2026-10-11 12:40', plan: 'Pro 年卡', plan_status: 'ACTIVE_YEAR', expire_at: '2027-10-12', orders_cnt: 1, gmv: 2999.00 },
      { phone: '13966554433', bind_time: '2026-09-18 14:11', reg_time: '2026-09-18 14:15', plan: 'Lite 年卡', plan_status: 'ACTIVE_YEAR', expire_at: '2027-09-20', orders_cnt: 1, gmv: 999.00 },
      { phone: '18600112233', bind_time: '2026-10-01 09:00', reg_time: '2026-10-01 09:12', plan: 'Pro 月卡', plan_status: 'EXPIRED', expire_at: '2026-11-01', orders_cnt: 1, gmv: 299.00 }
    ],
    logs: [
      { time: '2026-10-18 14:22', operator: '陈嘉禾', action: '入驻审核通过', before: '申请审核中', after: '正式合伙人 (首购 30.0% / 续购 20.0%)', reason: '符合高校博主与学者准入标准' },
      { time: '2026-10-28 15:00', operator: '财务王敏', action: '线下结算核销', before: '可结算 ¥5,820', after: '可结算 ¥3,820', reason: '核销 ¥2,000，流水 BCM202610288892' }
    ]
  },
  {
    id: 'PT-6601',
    name: '宋建华',
    unit: '启点视界',
    org: '立理科技 (战略创新部)',
    role: '解决方案专家',
    phone: '13800002222',
    wx: 'song_lili',
    channel_type: 'INTERNAL',
    code: '6601',
    first_rate: 15.0,
    renew_rate: 10.0,
    customers_count: 42,
    paying_count: 16,
    points: { total: 5120, withdrawable: 2120, frozen: 3000, settled: 0, unrecovered: 0 },
    status: 'NORMAL',
    freeze_reason: '',
    join_time: '2026-10-20 09:30',
    orders: [
      { id: 'ORD-20261102-0199', customer_phone: '13611229988', product: 'Max 年卡', pay_amount: 3999.00, rate: 15.0, points: 599.85, status: 'FROZEN', unfreeze_at: '2027-11-09', created_at: '2026-11-02 10:15', is_upgrade: false, is_cool: false },
      { id: 'ORD-20260520-0031', customer_phone: '13955667788', product: 'Max 年卡', pay_amount: 9999.00, rate: 15.0, points: 1499.85, status: 'FROZEN', unfreeze_at: '-', created_at: '2026-05-20 09:30', is_upgrade: false, is_cool: false }
    ],
    flow: [
      { time: '2026-11-02 10:15', order_id: 'ORD-20261102-0199', type: '冻结计入', points: '+599.85', status: '冻结中 (预计 2027-11-09 解冻)' }
    ],
    settlements: [],
    customers: [
      { phone: '13611229988', bind_time: '2026-10-28 09:12', reg_time: '2026-10-28 09:20', plan: 'Max 年卡', plan_status: 'ACTIVE_YEAR', expire_at: '2027-11-02', orders_cnt: 1, gmv: 3999.00 }
    ],
    logs: [
      { time: '2026-10-20 09:30', operator: '陈嘉禾', action: '入驻审核通过', before: '待审核', after: '正式合伙人 (首购 15.0% / 续购 10.0%)', reason: '内部员工推广渠道' }
    ]
  },
  {
    id: 'PT-9902',
    name: '韩磊',
    unit: '赤道银河',
    org: '南京大学人工智能学院',
    role: '博士后研究员',
    phone: '13911118888',
    wx: 'hanlei_nju',
    channel_type: 'EXTERNAL',
    code: '9902',
    first_rate: 28.0,
    renew_rate: 18.0,
    customers_count: 11,
    paying_count: 4,
    points: { total: 1650, withdrawable: 1650, frozen: 0, settled: 0, unrecovered: 0 },
    status: 'FROZEN',
    freeze_reason: '合伙人存在异地高校社群虚假刷单争议，暂时冻结拉新分润，保留历史结算金额待查。',
    join_time: '2026-10-22 16:00',
    orders: [
      { id: 'ORG-20260315-001', customer_phone: '', org_name: '南京大学人工智能学院', contract_no: 'HT-2026-0315-B', kind: 'ORG', product: '机构版年度合同（线下签约）', pay_amount: 25000.00, rate: 28.0, points: 7000, status: 'ORG', unfreeze_at: '按月分期', created_at: '2026-03-15 11:00', start: '2026-03-15', months: 12, paid_out: 0, remark: '', is_upgrade: false, is_cool: false }
    ],
    flow: [],
    settlements: [],
    customers: [
      { phone: '18800998877', bind_time: '2026-10-23 11:00', reg_time: '2026-10-23 11:05', plan: 'Pro 月卡', plan_status: 'ACTIVE_MONTH', expire_at: '2026-11-23', orders_cnt: 1, gmv: 299.00 }
    ],
    logs: [
      { time: '2026-10-22 16:00', operator: '陈嘉禾', action: '入驻审核通过', before: '待审核', after: '外部渠道 (首购 28.0% / 续购 18.0%)', reason: '外部特邀合作' },
      { time: '2026-11-01 18:20', operator: '陈嘉禾', action: '冻结账号', before: '正常', after: '已冻结', reason: '合伙人存在异地高校社群虚假刷单争议，暂时冻结' }
    ]
  },
  {
    id: 'PT-7711',
    name: '赵子豪',
    unit: '中部知光',
    org: '极客代码技术社区',
    role: '运营总监',
    phone: '13500003333',
    wx: 'geek_zhao',
    channel_type: 'EXTERNAL',
    code: '7711',
    first_rate: 30.0,
    renew_rate: 20.0,
    customers_count: 5,
    paying_count: 1,
    points: { total: 450, withdrawable: 0, frozen: 0, settled: 450, unrecovered: 0 },
    status: 'FROZEN',
    freeze_reason: '长期未产生有效推广，暂停合作，推荐码已失效。',
    join_time: '2026-09-01 10:00',
    orders: [
      { id: 'ORD-20260410-0155', customer_phone: '15566778899', product: 'Pro 年卡', pay_amount: 2999.00, rate: 30.0, points: 899.70, status: 'FROZEN', unfreeze_at: '-', created_at: '2026-04-10 16:20', is_upgrade: false, is_cool: false }
    ],
    flow: [],
    settlements: [
      { batch_no: 'SETTLE-202609-002', points: 374.90, voucher: 'ALI2026093000881', operator: '财务王敏', time: '2026-09-30 11:20', remark: '历史推广币结清' }
    ],
    customers: [],
    logs: [
      { time: '2026-09-01 10:00', operator: '陈嘉禾', action: '入驻审核通过', before: '待审核', after: '外部渠道 (30.0%)', reason: '初始合作' },
      { time: '2026-10-15 17:00', operator: '陈嘉禾', action: '冻结账号', before: '正常', after: '已冻结', reason: '长期未产生有效推广' }
    ]
  }
];

let SETTLEMENT_HISTORY = [
  {
    settle_id: 'SETTLE-202609-009',
    partner_id: 'PT-8866',
    partner_name: '李维国',
    partner_phone: '13700001111',
    channel_type: 'EXTERNAL',
    points: 74.98,
    voucher: 'BCM202609308871',
    operator: '财务王敏',
    settle_time: '2026-09-30 11:20',
    remark: 'Max 年卡第 1 期推广佣金',
    lines: [{ key: 'ORD-20260820-0201#1', order_id: 'ORD-20260820-0201', k: 1, n: 12, kind: 'YEAR', source: 'Max 年卡 (首购)', amt: 74.98, unlock: '2026-09-27' }]
  },
  {
    settle_id: 'SETTLE-202610-008',
    partner_id: 'PT-8866',
    partner_name: '李维国',
    partner_phone: '13700001111',
    channel_type: 'EXTERNAL',
    points: 2074.98,
    voucher: 'BCM202610288892',
    operator: '财务王敏',
    settle_time: '2026-10-28 15:00',
    remark: '2026年9-10月度推广服务费，招商银行公对私打款付清'
  },
  {
    settle_id: 'SETTLE-202609-002',
    partner_id: 'PT-7711',
    partner_name: '赵子豪',
    partner_phone: '13500003333',
    channel_type: 'EXTERNAL',
    points: 374.90,
    voucher: 'ALI2026093000881',
    operator: '财务王敏',
    settle_time: '2026-09-30 11:20',
    remark: '合作终止全额结清'
  }
];

// ==========================================
// 佣金明细引擎：订单 → 分期明细 → 解冻 → 结算
// 月卡 1 期；年卡 12 期；机构订单按合同周期（月）分期；每期在服务月结束 +7 天解冻
// ==========================================
const REF_DATE = '2026-11-06';
const LINE_SETTLED = { 'ORD-20260820-0201#1': 74.98 };      // 明细 key -> 已结算金额（该年卡第 1 期已打款）
const LINE_SETTLE_ID = { 'ORD-20260820-0201#1': 'SETTLE-202609-009' };  // 明细 key -> 最近一次结算单号

function addMonthsDate(dateStr, m, extraDays) {
  const p = dateStr.slice(0, 10).split('-');
  return new Date(Date.UTC(+p[0], +p[1] - 1 + m, +p[2] + extraDays)).toISOString().slice(0, 10);
}
function orderKind(o) {
  if (o.kind) return o.kind;
  if (o.status === 'VOID_REFUND' || !(o.points > 0)) return 'NONE';
  if (o.is_upgrade) return 'LUMP';
  if (/年卡/.test(o.product)) return 'YEAR';
  return 'MONTH';
}
function orderStart(o) { return o.start || (o.created_at || '').slice(0, 10); }

function rawKind(o) {
  if (o.kind) return o.kind;
  if (o.is_upgrade) return 'LUMP';
  if (/年卡/.test(o.product)) return 'YEAR';
  return 'MONTH';
}
function orderLines(o, p) {
  o._recover = 0; o._refundShort = 0;
  const voided = o.status === 'VOID_REFUND';
  const kind = voided ? rawKind(o) : orderKind(o);
  if (kind === 'NONE') return [];
  // 机构订单：佣金池 = 合同金额 × 核定比例，审核通过后即可结算，按订单整体一笔，不设分期
  if (kind === 'ORG') {
    const pool = round2(o.points || 0);
    const key = o.id + '#1';
    const settled = Math.min(round2(Math.max(o.settled_amount || 0, LINE_SETTLED[key] || 0)), pool);
    const remaining = Math.max(0, round2(pool - settled));
    return [{
      key, order_id: o.id, kind, k: 1, n: 1, amt: pool, settled, remaining,
      unlock: '审核通过即可结算', state: remaining === 0 ? 'SETTLED' : 'ORG',
      source: o.org_name, customer: o.org_name, pay: o.pay_amount, rate: o.rate, order_total: pool,
      period: '合同期 ' + (o.months || 12) + ' 个月'
    }];
  }
  const n = kind === 'YEAR' ? 12 : 1;
  const total = voided ? Math.abs(o.points) : o.points, start = orderStart(o);
  const totalC = Math.round(total * 100);
  const baseC = Math.round(totalC / n);
  const lines = [];
  for (let k = 1; k <= n; k++) {
    const amt = (n === 1 ? totalC : (k < n ? baseC : totalC - baseC * (n - 1))) / 100;
    const unlock = kind === 'LUMP' ? o.unfreeze_at : addMonthsDate(start, k, GLOBAL_CONFIG.unfreeze_days);
    const key = o.id + '#' + k;
    const settled = voided ? 0 : Math.min(LINE_SETTLED[key] || 0, amt);
    const remaining = voided ? 0 : amt - settled;
    let state;
    if (voided) state = 'REFUND';
    else if (remaining === 0) state = 'SETTLED';
    else if (unlock <= REF_DATE) state = 'UNLOCKED';
    else state = 'FROZEN';
    lines.push({
      key, order_id: o.id, kind, k, n, amt, settled, remaining, unlock, state,
      source: kind === 'ORG' ? o.org_name : o.product,
      customer: kind === 'ORG' ? o.org_name : o.customer_phone,
      pay: o.pay_amount, rate: o.rate, order_total: total,
      period: addMonthsDate(start, k - 1, 0) + ' ~ ' + addMonthsDate(start, k, -1)
    });
  }
  // 退款登记：按退款后的实付重算应收佣金，从最后一期往前抵扣尚未解冻的期次；不足部分计入待追回
  const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
  if (refunded > 0 && total > 0) {
    const recover = Math.max(0, round2(total - round2((o.pay_amount - refunded) * o.rate / 100)));
    let left = recover;
    // 1) 未解冻期次从最后一期往前扣回
    for (let i = lines.length - 1; i >= 0 && left > 0; i--) {
      const l = lines[i];
      if (l.state !== 'FROZEN') continue;
      const cut = Math.min(left, l.remaining);
      const cutC = Math.round(cut * 100) / 100;
      l.remaining = Math.round((l.remaining - cutC) * 100) / 100;
      l.cut = cutC;
      left = Math.round((left - cutC) * 100) / 100;
      if (l.remaining <= 0) { l.remaining = 0; l.state = 'REFUND'; }
    }
    // 2) 已解冻未结算期次从可结算余额抵扣
    for (let i = lines.length - 1; i >= 0 && left > 0; i--) {
      const l = lines[i];
      if (l.state !== 'UNLOCKED') continue;
      const cut = Math.min(left, l.remaining);
      const cutC = Math.round(cut * 100) / 100;
      l.remaining = Math.round((l.remaining - cutC) * 100) / 100;
      l.cut = (l.cut || 0) + cutC;
      left = Math.round((left - cutC) * 100) / 100;
      if (l.remaining <= 0) { l.remaining = 0; l.state = 'REFUND'; }
    }
    // 3) 已结算打款部分无法扣回，逐期计入待追回
    let short = 0;
    for (let i = lines.length - 1; i >= 0 && left > 0; i--) {
      const l = lines[i];
      if (l.state !== 'SETTLED') continue;
      const cut = Math.min(left, l.amt);
      l.short = Math.round(cut * 100) / 100;
      short = Math.round((short + l.short) * 100) / 100;
      left = Math.round((left - l.short) * 100) / 100;
      l.state = 'SHORT';
    }
    o._recover = recover;
    o._refundShort = short;
  }
  return lines;
}
function partnerLines(p) {
  let all = [];
  p.orders.forEach(o => { all = all.concat(orderLines(o, p)); });
  return all;
}
function recalcPartner(p) {
  let w = 0, f = 0, s = 0, short = 0;
  partnerLines(p).forEach(l => {
    s += l.settled;
    if (l.state === 'UNLOCKED') w += l.remaining;
    else if (l.state === 'FROZEN') f += l.remaining;
  });
  // 退款差额中已解冻/已结算、无法从期次扣回的部分，进入待追回，下次打款扣减
  p.orders.forEach(o => {
    short += (o._refundShort || 0);
    // 机构订单：未结算佣金不计入可提现，单独在「结算管理 · 待结算机构订单」中按订单结算
    if (orderKind(o) === 'ORG') {
      const l = orderLines(o, p)[0];
      if (l && l.remaining > 0) f += l.remaining;
    }
  });
  p.points = { total: round2(w + f + s), withdrawable: round2(w), frozen: round2(f), settled: round2(s), unrecovered: Math.max(0, round2(short - (p._offsetPaid || 0))) };
}
function recalcAll() { PARTNERS.forEach(recalcPartner); }

// 总销售额：该合伙人所带订单的实付合计，扣除已登记退款；kind 传 'user' / 'org' 时按订单类型拆分
function partnerSales(p, kind) {
  let gmv = 0;
  p.orders.forEach(o => {
    const isOrg = orderKind(o) === 'ORG';
    if (kind === 'user' && isOrg) return;
    if (kind === 'org' && !isOrg) return;
    const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
    gmv += Math.max(0, (o.pay_amount || 0) - refunded);
  });
  return gmv;
}

function allocSettled(settleId, keys) {
  const rec = SETTLEMENT_HISTORY.find(x => x.settle_id === settleId);
  const p = PARTNERS.find(x => x.id === rec.partner_id);
  rec.lines = [];
  keys.forEach(key => {
    const l = partnerLines(p).find(x => x.key === key);
    LINE_SETTLED[key] = l.amt;
    LINE_SETTLE_ID[key] = settleId;
    rec.lines.push({ key, order_id: l.order_id, k: l.k, n: l.n, kind: l.kind, source: l.source, amt: l.amt, unlock: l.unlock });
  });
}
function seqKeys(orderId, from, to) { const r = []; for (let k = from; k <= to; k++) r.push(orderId + '#' + k); return r; }

// ==========================================
// 机构订单申请单：合伙人提交 → 运营审核（核定比例）→ 财务线下确认回款后，在结算管理按订单填写结算金额
// ==========================================
let ORG_REQUESTS = [
  { id: 'ORGREQ-20261106-001', partner_id: 'PT-8866', partner_name: '李维国', org: '中国科学技术大学未来技术学院', contract_no: 'LL-2026-1106-01',
    amount: 50000, rate: null, start: '2026-11-06', months: 12, remark: '首笔款项按合同约定 30 日内到账', imgs: 2,
    status: 'PENDING', created_at: '2026-11-06 14:20', reviewed_at: '', reviewer: '', reject_reason: '', order_id: '', settled_amount: 0 },
  { id: 'ORGREQ-20261029-002', partner_id: 'PT-9902', partner_name: '韩磊', org: '南京大学人工智能学院', contract_no: 'LL-2026-1029-07',
    amount: 30000, rate: null, start: '2026-10-29', months: 6, remark: '', imgs: 1,
    status: 'REJECTED', created_at: '2026-10-29 09:40', reviewed_at: '2026-11-02 10:15', reviewer: '陈嘉禾', reject_reason: '合同盖章页缺失，请补充后重新提交。', order_id: '', settled_amount: 0 },
  { id: 'ORGREQ-20261103-003', partner_id: 'PT-8866', partner_name: '李维国', org: '复旦大学类脑智能研究院', contract_no: 'LL-2026-1103-02',
    amount: 80000, rate: 18, start: '2026-11-03', months: 12, remark: '', imgs: 2,
    status: 'APPROVED', created_at: '2026-11-03 10:05', reviewed_at: '2026-11-03 15:20', reviewer: '陈嘉禾', reject_reason: '', order_id: 'ORG-20261103-001', settled_amount: 0 },
  { id: 'ORGREQ-20260928-004', partner_id: 'PT-8866', partner_name: '李维国', org: '上海交通大学医学院', contract_no: 'LL-2026-0928-05',
    amount: 60000, rate: 15, start: '2026-09-28', months: 12, remark: '首笔款已到账，剩余款项按合同执行', imgs: 1,
    status: 'APPROVED', created_at: '2026-09-28 09:10', reviewed_at: '2026-09-28 16:40', reviewer: '陈嘉禾', reject_reason: '', order_id: 'ORG-20260928-002', settled_amount: 3600, received: 24000 },
  { id: 'ORGREQ-20260815-005', partner_id: 'PT-8866', partner_name: '李维国', org: '浙江大学计算机学院', contract_no: 'LL-2026-0815-03',
    amount: 100000, rate: 20, start: '2026-08-15', months: 12, remark: '合同款项已全额到账，佣金结清', imgs: 3,
    status: 'APPROVED', created_at: '2026-08-15 11:25', reviewed_at: '2026-08-15 17:10', reviewer: '陈嘉禾', reject_reason: '', order_id: 'ORG-20260815-003', settled_amount: 20000, received: 100000 }
];
// 已通过的申请单同步为机构订单：佣金池 = 合同金额 × 核定比例，按订单整笔结算，不设分期与回款登记
function seedOrgRequests() {
  ORG_REQUESTS.forEach(r => {
    if (r.status !== 'APPROVED' || !r.order_id) return;
    const p = PARTNERS.find(x => x.id === r.partner_id); if (!p) return;
    if (p.orders.some(o => o.id === r.order_id)) return;
    p.orders.unshift({ id: r.order_id, customer_phone: '', org_name: r.org, contract_no: r.contract_no, kind: 'ORG',
      product: '机构版年度合同（线下签约）', pay_amount: r.amount, rate: r.rate, points: round2(r.amount * r.rate / 100),
      status: 'ORG', unfreeze_at: '按结算释放', created_at: r.created_at, start: r.start, months: r.months,
      paid_out: 0, settled_amount: r.settled_amount || 0, received_amount: r.received || 0, remark: r.remark, is_upgrade: false, is_cool: false });
  });
}
seedOrgRequests();
// 机构订单结算单：按订单维度生成，财务线下确认回款后分次结算
SETTLEMENT_HISTORY.push(
  { settle_id: 'SETTLE-202610-005', partner_id: 'PT-8866', partner_name: '李维国', partner_phone: '13700001111', channel_type: 'EXTERNAL',
    points: 3600, received: 24000, rate: 15, org_name: '上海交通大学医学院', voucher: 'BCM202610158801', operator: '财务王敏', settle_time: '2026-10-15 10:30',
    remark: '上海交通大学医学院 机构订单结算（首笔款到账 24000，按 15% 结算）', source: 'ORG', org_order_id: 'ORG-20260928-002', lines: [] },
  { settle_id: 'SETTLE-202610-006', partner_id: 'PT-8866', partner_name: '李维国', partner_phone: '13700001111', channel_type: 'EXTERNAL',
    points: 20000, received: 100000, rate: 20, org_name: '浙江大学计算机学院', voucher: 'BCM202610208812', operator: '财务王敏', settle_time: '2026-10-20 14:10',
    remark: '浙江大学计算机学院 机构订单结算（合同款项全额到账，佣金结清）', source: 'ORG', org_order_id: 'ORG-20260815-003', lines: [] }
);

allocSettled('SETTLE-202610-008', seqKeys('ORG-20260810-001', 1, 1).concat(seqKeys('ORD-20260820-0066', 1, 1)));
allocSettled('SETTLE-202609-002', seqKeys('ORD-20260410-0155', 1, 5));
recalcAll();

const KIND_LABEL = { MONTH: '月卡', YEAR: '年卡', ORG: '机构订单', LUMP: '升级补差' };
function kindBadge(k) {
  const cls = k === 'ORG' ? 'badge-blue' : (k === 'YEAR' ? 'badge-success' : 'badge-neutral');
  return `<span class="badge ${cls}" style="font-size:10.5px;">${KIND_LABEL[k] || k}</span>`;
}
// 套餐名：去掉数据里携带的 (首购)/(续购)/(补差价) 等括号后缀
function productName(o) {
  if (orderKind(o) === 'ORG') return '机构版年度合同';
  return o.product.replace(/\s*[（(][^）)]*[）)]\s*/g, '').trim();
}
// 首购 / 续购 以该客户最早一笔订单为准
function isFirstPurchase(o) {
  if (!o.customer_phone) return false;
  let first = o;
  PARTNERS.forEach(p => p.orders.forEach(x => {
    if (x.customer_phone !== o.customer_phone) return;
    if (x.created_at < first.created_at) first = x;
  }));
  return first.id === o.id;
}
function productTags(o) {
  if (orderKind(o) === 'ORG') return [{ t: '机构', cls: 'badge-blue' }];
  if (o.is_upgrade) return [{ t: '升级补差', cls: 'badge-blue' }];
  return isFirstPurchase(o) ? [{ t: '首购', cls: 'badge-blue' }] : [{ t: '续购', cls: 'badge-neutral' }];
}
function productTagHtml(o, extra) {
  return productTags(o).map(x => `<span class="badge ${x.cls}" style="font-size:10.5px;">${x.t}</span>`).join(' ') + (extra || '');
}
function lineStateBadge(l) {
  if (l.state === 'SETTLED') return '<span class="badge badge-neutral">已结算</span>';
  if (l.state === 'SHORT') return '<span class="badge badge-danger">待追回</span>';
  if (l.state === 'UNLOCKED') return '<span class="badge badge-success">可结算</span>';
  if (l.state === 'FROZEN') return '<span class="badge badge-warning">冻结中</span>';
  if (l.state === 'REFUND') return '<span class="badge badge-danger">退款扣除</span>';
  return '';
}

function findOrder(orderId) {
  for (const p of PARTNERS) { const o = p.orders.find(x => x.id === orderId); if (o) return { p, o }; }
  return null;
}
// 订单详情入口：机构订单复用机构订单详情抽屉，其余走个人订单详情抽屉
function showOrderDetail(orderId) {
  const f = findOrder(orderId);
  if (f && orderKind(f.o) === 'ORG') { openOrgOrderDetail(orderId); return; }
  showOrderLines(orderId);
}
function showOrderLines(orderId) {
  const f = findOrder(orderId); if (!f) return;
  const { p, o } = f;
  const ls = orderLines(o, p);
  const sum = st => ls.filter(l => l.state === st).reduce((a, l) => a + l.remaining, 0);
  const settled = ls.reduce((a, l) => a + l.settled, 0);
  // 每期应得：退款扣减后的剩余金额；已打款需追回的期次按「本期佣金 − 待追回」计；被完全冲抵的期次为 0
  const earnOf = l => {
    if (l.state === 'SHORT') return round2(Math.max(0, l.amt - (l.short || 0)));
    if (l.state === 'REFUND') return 0.00;
    if (l.cut > 0) return l.remaining;
    return l.amt;
  };
  const totalAmt = round2(ls.reduce((a, l) => a + l.amt, 0));
  const totalEarn = round2(ls.reduce((a, l) => a + earnOf(l), 0));
  const totalCut = round2(totalAmt - totalEarn);
  const netPts = Math.max(0, o.points - (o._recover || 0));
  const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
  document.getElementById('drawer-root').innerHTML = `
    <div class="drawer-mask show" id="drawer-lines" onclick="if(event.target===this)closeDrawer('drawer-lines')">
      <div class="drawer-panel" style="width:880px; max-width:96vw;">
        <div class="drawer-header">
          <div><h3 style="font-size:15px; font-weight:600;">订单详情 · ${o.id}</h3>
            <div style="font-size:12px; color:var(--muted-foreground); margin-top:2px;">${p.name} · ${o.kind === 'ORG' ? o.org_name : o.product} · ${o.created_at || o.start} · 总佣金 ¥${fmtC(Math.abs(o.points))}</div></div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-lines')">✕</button>
        </div>
        <div class="drawer-body">
          <div class="content-card" style="margin:0 0 12px; padding:12px 16px;">
            ${o.kind === 'ORG' ? `<div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; margin-bottom:10px; border-bottom:1px solid var(--border);">
              <span style="font-size:12px; color:var(--muted-foreground);">合同编号</span><span class="code-badge">${o.contract_no}</span>
            </div>` : ''}
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px;">
              <div><div style="font-size:11.5px; color:var(--muted-foreground);">订单金额</div><strong class="num">¥${formatNum(o.pay_amount)}</strong>${refunded > 0 ? `<div style="font-size:10.5px; color:var(--muted-foreground); margin-top:2px;">已退 ¥${formatNum(refunded)}</div>` : ''}</div>
              <div><div style="font-size:11.5px; color:var(--muted-foreground);">分成比例</div><div><strong class="num">${o.rate}%</strong><span style="margin-left:6px;">${productTagHtml(o)}</span></div></div>
              <div><div style="font-size:11.5px; color:var(--muted-foreground);">本单佣金${refunded > 0 ? '（退款后）' : ''}</div><div><strong class="num" style="color:${netPts > 0 ? '#15803D' : 'var(--muted-foreground)'};">¥${fmtC(netPts)}</strong></div></div>
            </div>
            ${refunded > 0 ? `<div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border); font-size:12px; color:var(--destructive);">
              <strong>${(o.refunds || []).map(r => r.date).filter(Boolean).join('、')}${(o.refunds || []).some(r => r.date) ? ' · ' : ''}${refunded >= o.pay_amount ? '已全额退款' : '部分退款'} ¥${formatNum(refunded)} · 剩余订单金额 ¥${formatNum(Math.max(0, o.pay_amount - refunded))}</strong>
            </div>` : ''}
          </div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:14px;">
            <div class="content-card" style="margin:0; padding:10px 14px;"><div style="font-size:11.5px; color:var(--muted-foreground);">可结算（已解冻未结算）</div><strong class="num" style="color:#15803D;">¥${fmtC(sum('UNLOCKED'))}</strong></div>
            <div class="content-card" style="margin:0; padding:10px 14px;"><div style="font-size:11.5px; color:var(--muted-foreground);">冻结中</div><strong class="num" style="color:#A16207;">¥${fmtC(sum('FROZEN'))}</strong></div>
            <div class="content-card" style="margin:0; padding:10px 14px;"><div style="font-size:11.5px; color:var(--muted-foreground);">已结算</div><strong class="num">¥${fmtC(settled)}</strong></div>
          </div>
          <div class="table-container"><table class="official-table">
            <thead><tr><th>期次</th><th>服务期间</th><th>解冻日</th><th>每期应得</th><th>状态</th></tr></thead>
            <tbody>${ls.map(l => {
              const note = l.short > 0 ? `待追回 ¥${fmtC(l.short)}` : '';
              return `<tr><td>第 ${l.k}/${l.n} 期</td><td style="font-size:12px; color:var(--muted-foreground);">${l.period}</td><td>${l.unlock}</td><td class="num">¥${fmtC(earnOf(l))}${note ? `<div style="font-size:10.5px; color:var(--destructive); margin-top:2px; font-weight:400;">${note}</div>` : ''}</td><td>${lineStateBadge(l)}</td></tr>`;
            }).join('')}</tbody>
            <tfoot><tr>
              <td colspan="3" style="font-weight:600;">合计（${ls.length} 期）</td>
              <td class="num" style="font-weight:700;">¥${fmtC(totalEarn)}${totalCut > 0 ? `<div style="font-size:10.5px; color:var(--muted-foreground); margin-top:2px; font-weight:400;">原 ¥${fmtC(totalAmt)} · 退款扣减 ¥${fmtC(totalCut)}</div>` : ''}</td>
              <td></td>
            </tr></tfoot>
          </table></div>
        </div>
      </div>
    </div>`;
}

// ==========================================
// 退款登记（当前无退款接口，由运营手工登记并扣回佣金）
// ==========================================
let REFUND_ORDER_ID = null;

function openRefundDrawer(orderId) {
  const hit = findOrder(orderId); if (!hit) return;
  const { p, o } = hit;
  const kind = orderKind(o);
  const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
  REFUND_ORDER_ID = orderId;
  document.getElementById('drawer-root').innerHTML = `
    <div class="drawer-mask show" id="drawer-refund" onclick="if(event.target===this)closeDrawer('drawer-refund')">
      <div class="drawer-panel" style="width:860px;">
        <div class="drawer-header">
          <div style="display:flex; align-items:center; gap:8px;">
            <h3 style="font-size:15px; font-weight:600;">退款登记 · ${o.id}</h3>
            ${kindBadge(kind)}
            ${refunded > 0 ? `<span class="badge badge-danger">已退 ¥${formatNum(refunded)}</span>` : ''}
          </div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-refund')">✕</button>
        </div>
        <div class="drawer-body">
          <div style="background:#FAFAFA; border:1px solid var(--border); border-radius:8px; padding:10px 14px; font-size:12.5px; line-height:1.7; margin-bottom:14px;">
            当前无退款接口，退款需在此<strong>手工登记</strong>：按「退款后实付 × 分成比例」重算本单佣金，从<strong>最后一期往前抵扣尚未解冻的期次</strong>；已解冻或已结算、无法扣回的差额计入该合伙人<strong>待追回金额</strong>，下次打款时扣减。
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0 14px;">
            <div class="form-group"><label class="form-group-label">归属合伙人</label><div class="form-input-full" style="background:#FAFAFA;">${p.name} · ${p.channel_type === 'INTERNAL' ? '内部' : '外部'}渠道</div></div>
            <div class="form-group"><label class="form-group-label">订单实付 / 剩余可退</label><div class="form-input-full num" style="background:#FAFAFA;">¥${formatNum(o.pay_amount)} / ¥${formatNum(o.pay_amount - refunded)}</div></div>
            <div class="form-group"><label class="form-group-label">本次退款金额（元）<span class="req">*</span></label><input class="form-input-full num" type="number" id="rf-amount" min="0" max="${o.pay_amount - refunded}" placeholder="如 ${formatNum(o.pay_amount - refunded)}" oninput="refreshRefundPreview()"></div>
            <div class="form-group"><label class="form-group-label">退款日期 <span class="req">*</span></label><input class="form-input-full" type="date" id="rf-date" value="${REF_DATE}" max="${REF_DATE}"></div>
            <div class="form-group"><label class="form-group-label">退款凭证号</label><input class="form-input-full" id="rf-voucher" placeholder="财务退款流水号 / 商户退款单号（选填）"></div>
            <div class="form-group"><label class="form-group-label">退款原因 <span class="req">*</span></label><input class="form-input-full" id="rf-reason" placeholder="如：客户申请退费、机构合同变更"></div>
          </div>
          <div id="rf-preview"></div>
          ${refunded > 0 ? `<div style="margin-top:14px; font-size:12.5px; color:var(--muted-foreground);">历史退款登记：${(o.refunds || []).map(r => `${r.date} · ¥${formatNum(r.amount)}${r.voucher ? ' · 凭证 ' + r.voucher : ''}`).join('；')}</div>` : ''}
        </div>
        <div class="drawer-footer" style="justify-content:space-between;">
          <div>${refunded > 0 ? `<button class="btn btn-outline" onclick="undoRefund('${o.id}')">撤销全部退款登记</button>` : '<span></span>'}</div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-outline" onclick="closeDrawer('drawer-refund')">取消</button>
            <button class="btn btn-primary" style="background:#DC2626; border-color:#DC2626;" onclick="confirmRefund()">确认退款登记</button>
          </div>
        </div>
      </div>
    </div>`;
  refreshRefundPreview();
}

function refreshRefundPreview() {
  const hit = findOrder(REFUND_ORDER_ID); if (!hit) return;
  const { p, o } = hit;
  const box = document.getElementById('rf-preview'); if (!box) return;
  const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
  const amount = parseFloat(document.getElementById('rf-amount').value) || 0;
  const max = o.pay_amount - refunded;
  if (!(amount > 0)) { box.innerHTML = '<div style="margin-top:14px; font-size:12.5px; color:var(--muted-foreground);">填写退款金额后，这里会预览佣金扣回结果。</div>'; return; }
  if (amount > max) { box.innerHTML = `<div style="margin-top:14px; font-size:12.5px; color:#DC2626;">退款金额不能超过剩余可退金额 ¥${formatNum(max)}。</div>`; return; }
  const preview = Object.assign({}, o);
  preview.refunds = (o.refunds || []).concat([{ amount }]);
  const lines = orderLines(preview, p);
  const cuts = lines.filter(l => l.cut > 0);
  const applied = cuts.reduce((a, l) => a + l.cut, 0);
  const short = preview._refundShort || 0;
  box.innerHTML = `
    <div style="margin-top:14px; background:#FFF7ED; border:1px solid #FDBA74; border-radius:8px; padding:12px 14px; font-size:12.5px; line-height:1.9;">
      应扣回佣金 <strong class="num">¥${fmtC(preview._recover)}</strong>
      · 可从冻结 / 可结算期次扣回 <strong class="num" style="color:#15803D;">¥${fmtC(applied)}</strong>
      · 计入待追回 <strong class="num" style="color:#DC2626;">¥${fmtC(short)}</strong>
      ${cuts.length ? `<div style="margin-top:6px; color:var(--muted-foreground);">扣回期次：${cuts.map(l => `第 ${l.k}/${l.n} 期 −¥${fmtC(l.cut)}`).join('、')}</div>` : ''}
      ${short > 0 ? '<div style="margin-top:6px; color:#B45309;">该差额对应已结算打款的佣金，无法从余额抵扣，将挂入该合伙人的待追回金额，下次打款时扣减。</div>' : ''}
      <div style="margin-top:6px; color:var(--muted-foreground);">退款后本单佣金：¥${fmtC(Math.max(0, o.points - preview._recover))}</div>
    </div>`;
}

function confirmRefund() {
  const hit = findOrder(REFUND_ORDER_ID); if (!hit) return;
  const { p, o } = hit;
  const refunded = (o.refunds || []).reduce((a, r) => a + r.amount, 0);
  const amount = parseFloat(document.getElementById('rf-amount').value) || 0;
  const date = document.getElementById('rf-date').value;
  const voucher = document.getElementById('rf-voucher').value.trim();
  const reason = document.getElementById('rf-reason').value.trim();
  if (!(amount > 0)) { toast('请填写本次退款金额'); return; }
  if (amount > o.pay_amount - refunded) { toast('退款金额不能超过剩余可退金额 ¥' + formatNum(o.pay_amount - refunded)); return; }
  if (!date) { toast('请选择退款日期'); return; }
  if (!reason) { toast('请填写退款原因'); return; }
  const beforeRecover = o._recover || 0;
  if (!o.refunds) o.refunds = [];
  o.refunds.push({ amount, date, voucher, reason, operator: '运营', time: nowTime() });
  orderLines(o, p);
  recalcPartner(p);
  const delta = o._recover - beforeRecover;
  const vcText = voucher ? ' · 凭证 ' + voucher : '';
  const shortMsg = o._refundShort > 0 ? ' · 差额 ¥' + fmtC(o._refundShort) + ' 计入待追回' : '';
  p.flow.unshift({ time: nowTime(), order_id: o.id, type: '退款扣除', points: delta > 0 ? '-¥' + fmtC(delta) : '¥0', status: `退款 ¥${formatNum(amount)}${vcText}${shortMsg}` });
  p.logs.unshift({ time: nowTime(), operator: '运营', action: '手工退款登记', before: `本单佣金 ¥${fmtC(Math.max(0, o.points - beforeRecover))}`, after: `本单佣金 ¥${fmtC(Math.max(0, o.points - o._recover))}`, reason: `退款 ¥${formatNum(amount)}${vcText}，扣回 ¥${fmtC(delta)}${shortMsg}` });
  recalcAll();
  closeDrawer('drawer-refund');
  toast(`退款登记成功：扣回佣金 ¥${fmtC(delta)}，合伙人端佣金已同步`);
  renderOrdersView(document.getElementById('main-view-container'));
}

function undoRefund(orderId) {
  const hit = findOrder(orderId); if (!hit) return;
  const { p, o } = hit;
  if (!confirm('确定撤销该订单的全部退款登记？撤销后将恢复原佣金与可结算金额。')) return;
  const before = o._recover || 0;
  o.refunds = [];
  orderLines(o, p);
  recalcPartner(p);
  p.flow.unshift({ time: nowTime(), order_id: o.id, type: '退款撤销', points: before > 0 ? '+¥' + fmtC(before) : '¥0', status: '撤销退款登记，恢复原订单佣金' });
  p.logs.unshift({ time: nowTime(), operator: '运营', action: '撤销退款登记', before: `本单佣金 ¥${fmtC(o.points - before)}`, after: `本单佣金 ¥${fmtC(o.points)}`, reason: '撤销手工退款登记' });
  recalcAll();
  closeDrawer('drawer-refund');
  toast('已撤销退款登记，佣金与可结算金额已恢复');
  renderOrdersView(document.getElementById('main-view-container'));
}

// ==========================================
// 结算核对单（按明细勾选结算）
// ==========================================
let SHEET = null;

function prevMonthEnd(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(1); d.setMonth(d.getMonth() - 1);
  const y = d.getFullYear(), m = d.getMonth();
  const last = new Date(y, m + 1, 0).getDate();
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(last).padStart(2, '0')}`;
}

function openSettleSheet(pid) {
  const p = PARTNERS.find(x => x.id === pid); if (!p) return;
  if (p.status === 'FROZEN') { toast('该合伙人账号已冻结，请先在合伙人档案解冻账号后再进行结算核算'); return; }
  const cutoff = prevMonthEnd(REF_DATE);
  const all = partnerLines(p);
  const lines = all.filter(l => l.state === 'UNLOCKED' && l.unlock <= cutoff).sort((a, b) => a.order_id.localeCompare(b.order_id) || a.k - b.k);
  SHEET = { pid, lines, checked: new Set(lines.map(l => l.key)) };
  const autoVoucher = 'BCM' + REF_DATE.replace(/-/g, '') + Math.floor(1000 + Math.random() * 8999);
  const total = lines.reduce((a, l) => a + l.remaining, 0);
  const dueOffset = Math.min(p.points.unrecovered || 0, total);
  document.getElementById('drawer-root').innerHTML = `
    <div class="drawer-mask show" id="drawer-settle" onclick="if(event.target===this)closeDrawer('drawer-settle')">
      <div class="drawer-panel" style="width:1020px;">
        <div class="drawer-header">
          <div style="display:flex; align-items:center; gap:8px;">
            <h3 style="font-size:15px; font-weight:600;">结算核对单 · ${p.name}</h3>
            ${p.channel_type === 'INTERNAL' ? '<span class="badge badge-blue">内部渠道</span>' : '<span class="badge badge-neutral">外部渠道</span>'}
            ${p.status === 'FROZEN' ? '<span class="badge badge-warning">账号已冻结</span>' : ''}
          </div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-settle')">✕</button>
        </div>
        <div class="drawer-body">
          <div style="font-size:12.5px; color:var(--muted-foreground); margin-bottom:10px;">${p.org} · ${p.phone}${p.wx ? ' · 微信 ' + p.wx : ''}</div>
          ${dueOffset > 0 ? `<div style="background:#FEF2F2; border:1px solid #FCA5A5; border-radius:8px; padding:8px 12px; font-size:12.5px; color:#B91C1C; margin-bottom:12px;">该合伙人存在退款待追回 <strong class="num">¥${fmtC(p.points.unrecovered)}</strong>，本次结算自动扣减 <strong class="num">¥${fmtC(dueOffset)}</strong>${p.points.unrecovered > total ? '，剩余 ¥' + fmtC(p.points.unrecovered - total) + ' 结转下次扣减' : ''}。</div>` : ''}
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px; font-size:12.5px;">
            <span>本期可结算范围：<strong>${cutoff}（含）</strong>之前解冻的佣金</span>
            <span style="flex:1;"></span>
            <button class="btn btn-outline btn-sm" onclick="sheetSelectAll(true)">全选</button>
            <button class="btn btn-outline btn-sm" onclick="sheetSelectAll(false)">清空</button>
          </div>
          <div class="table-container"><table class="official-table">
            <thead><tr><th style="width:36px;"></th><th>商品名称</th><th>订单号</th><th>客户 / 机构</th><th>期次 / 服务期间</th><th>解冻日</th><th style="text-align:right;">本次可结算</th></tr></thead>
            <tbody>${lines.map(l => `
              <tr>
                <td><input type="checkbox" class="sheet-chk" data-key="${l.key}" data-unlock="${l.unlock}" checked onchange="toggleSheetLine(this)"></td>
                <td>${kindBadge(l.kind)} ${l.kind === 'ORG' ? '机构版合同' : l.source}</td>
                <td><span class="code-badge">${l.order_id}</span></td>
                <td class="num">${l.customer || '-'}</td>
                <td>${l.n > 1 ? '第 ' + l.k + '/' + l.n + ' 期' : '一次性'}<div style="font-size:11.5px; color:var(--muted-foreground);">${l.period}</div></td>
                <td>${l.unlock}</td>
                <td class="num" style="text-align:right;"><strong>¥${fmtC(l.remaining)}</strong>${l.settled > 0 ? `<div style="font-size:11px; color:var(--muted-foreground);">已结算 ¥${fmtC(l.settled)}（原 ¥${fmtC(l.amt)}）</div>` : ''}</td>
              </tr>`).join('')}</tbody>
          </table></div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div class="form-group"><label class="form-group-label">财务打款凭证流水单号 <span class="req">*</span></label><input class="form-input-full num" id="sheet-voucher" value="${autoVoucher}"></div>
            <div class="form-group"><label class="form-group-label">结算经办人</label><input class="form-input-full" id="sheet-op" value="财务王敏"></div>
          </div>
          <div class="form-group"><label class="form-group-label">打款备注说明</label><input class="form-input-full" id="sheet-rem" value="2026年11月度推广服务费，公对私转账付清"></div>
        </div>
        <div class="drawer-footer" style="justify-content:space-between;">
          <div style="font-size:13px;">本次实结 <strong id="sheet-total" class="num" style="font-size:20px; color:#15803D;">¥${fmtC(total - dueOffset)}</strong> <span id="sheet-count" style="color:var(--muted-foreground); font-size:12px;">（已选 ${lines.length}/${lines.length} 条明细）</span><div id="sheet-offset" style="font-size:11.5px; color:#B91C1C; margin-top:2px;">${dueOffset > 0 ? `可结算 ¥${fmtC(total)} − 待追回 ¥${fmtC(dueOffset)} = 本次实结 ¥${fmtC(total - dueOffset)}` : ''}</div></div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-outline" onclick="closeDrawer('drawer-settle')">取消</button>
            <button class="btn btn-primary" onclick="confirmSettleSheet()">确认结算并同步</button>
          </div>
        </div>
      </div>
    </div>`;
}
function updateSheetTotal() {
  const sel = SHEET.lines.filter(l => SHEET.checked.has(l.key));
  const gross = sel.reduce((a, l) => a + l.remaining, 0);
  const p = PARTNERS.find(x => x.id === SHEET.pid);
  const offset = p ? Math.min(p.points.unrecovered || 0, gross) : 0;
  document.getElementById('sheet-total').textContent = '¥' + fmtC(gross - offset);
  document.getElementById('sheet-offset').textContent = offset > 0 ? `可结算 ¥${fmtC(gross)} − 待追回 ¥${fmtC(offset)} = 本次实结 ¥${fmtC(gross - offset)}` : '';
  document.getElementById('sheet-count').textContent = `（已选 ${sel.length}/${SHEET.lines.length} 条明细）`;
}
function toggleSheetLine(el) {
  if (el.checked) SHEET.checked.add(el.dataset.key); else SHEET.checked.delete(el.dataset.key);
  updateSheetTotal();
}
function sheetSelectAll(on) {
  document.querySelectorAll('.sheet-chk').forEach(el => {
    el.checked = on;
    if (on) SHEET.checked.add(el.dataset.key); else SHEET.checked.delete(el.dataset.key);
  });
  updateSheetTotal();
}
let SETTLE_PENDING = null;
let ORG_SETTLE_PENDING = null;
function confirmSettleSheet() {
  const p = PARTNERS.find(x => x.id === SHEET.pid); if (!p) return;
  const sel = SHEET.lines.filter(l => SHEET.checked.has(l.key));
  if (!sel.length) { toast('请至少勾选一条结算明细'); return; }
  const voucher = document.getElementById('sheet-voucher').value.trim();
  if (!voucher) { toast('请填写财务打款凭证流水号'); return; }
  const op = document.getElementById('sheet-op').value.trim() || '财务';
  const rem = document.getElementById('sheet-rem').value.trim();
  const total = sel.reduce((a, l) => a + l.remaining, 0);
  const offset = Math.min(p.points.unrecovered || 0, total);
  const net = total - offset;
  SETTLE_PENDING = { pid: p.id, sel, voucher, op, rem, total, offset, net };
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-mask show" id="modal-settle-confirm">
      <div class="modal-dialog" style="width:440px;">
        <div class="modal-dialog-header"><h3>确认结算 · ${p.name}</h3><button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-settle-confirm')">✕</button></div>
        <div class="modal-dialog-body">
          <div style="display:grid; gap:10px; font-size:13px;">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--muted-foreground);">已选结算明细</span><span>${sel.length} 条</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--muted-foreground);">明细合计</span><span class="num">¥${fmtC(total)}</span></div>
            ${offset > 0 ? `<div style="display:flex; justify-content:space-between; color:#B91C1C;"><span>扣减退款待追回</span><span class="num">−¥${fmtC(offset)}</span></div>` : ''}
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border); padding-top:10px;"><span style="color:var(--muted-foreground);">本次实结</span><strong class="num" style="font-size:18px; color:#15803D;">¥${fmtC(net)}</strong></div>
          </div>
          <div style="margin-top:12px; font-size:12px; color:var(--muted-foreground);">确认后明细将标记为已结算，并实时同步合伙人端，可在结算历史中查看。</div>
        </div>
        <div class="modal-dialog-footer"><button class="btn btn-outline" onclick="closeModal('modal-settle-confirm')">取消</button><button class="btn btn-primary" onclick="executeSettleSheet()">确认结算并同步</button></div>
      </div>
    </div>`;
}
function executeSettleSheet() {
  const d = SETTLE_PENDING; if (!d) return;
  const p = PARTNERS.find(x => x.id === d.pid); if (!p) return;
  closeModal('modal-settle-confirm');
  SETTLE_PENDING = null;
  const { sel, voucher, op, rem, total, offset, net } = d;
  const before = p.points.withdrawable;
  const bNo = 'SETTLE-' + REF_DATE.slice(0, 7).replace('-', '') + '-' + Math.floor(100 + Math.random() * 899);
  sel.forEach(l => { LINE_SETTLED[l.key] = (LINE_SETTLED[l.key] || 0) + l.remaining; LINE_SETTLE_ID[l.key] = bNo; });
  const rec = {
    settle_id: bNo, partner_id: p.id, partner_name: p.name, partner_phone: p.phone, channel_type: p.channel_type,
    points: net, gross: total, offset, voucher, operator: op, settle_time: nowTime(), remark: rem,
    lines: sel.map(l => ({ key: l.key, order_id: l.order_id, k: l.k, n: l.n, kind: l.kind, source: l.source, amt: l.remaining, unlock: l.unlock }))
  };
  SETTLEMENT_HISTORY.unshift(rec);
  p._offsetPaid = (p._offsetPaid || 0) + offset;
  p.settlements.unshift({ batch_no: bNo, points: net, gross: total, offset, voucher, operator: op, time: rec.settle_time, remark: rem });
  p.flow.unshift({ time: rec.settle_time, order_id: bNo, type: '线下结算核销', points: '-¥' + fmtC(net), status: `凭证 ${voucher} 已完成打款（${sel.length} 条明细）${offset > 0 ? ' · 扣减退款待追回 ¥' + fmtC(offset) : ''}` });
  recalcPartner(p);
  p.logs.unshift({ time: rec.settle_time, operator: op, action: '线下结算打款核销', before: `可结算 ¥${fmtC(before)}`, after: `可结算 ¥${fmtC(p.points.withdrawable)}`, reason: `结算 ${sel.length} 条明细合计 ¥${fmtC(total)}${offset > 0 ? '，扣减退款待追回 ¥' + fmtC(offset) : ''}，实结 ¥${fmtC(net)}，凭证 ${voucher}` });
  closeDrawer('drawer-settle');
  toast(`结算成功：${sel.length} 条明细，实结 ¥${fmtC(net)}${offset > 0 ? '（已扣减退款待追回 ¥' + fmtC(offset) + '）' : ''}，已同步合伙人端`);
  renderSettlementsView(document.getElementById('main-view-container'));
}

function openSettleDetail(settleId) {
  const s = SETTLEMENT_HISTORY.find(x => x.settle_id === settleId); if (!s) return;
  const ls = s.lines || [];
  const isOrg = s.source === 'ORG';
  const detailTable = isOrg
    ? `<div class="table-container"><table class="official-table">
        <thead><tr><th>机构订单</th><th>本次到账回款</th><th>分成比例</th><th style="text-align:right;">本次结算推广币</th></tr></thead>
        <tbody><tr>
          <td><span class="badge badge-blue">机构订单</span> <span class="code-badge">${s.org_order_id || '-'}</span><div style="font-size:11.5px; color:var(--muted-foreground); margin-top:3px;">${esc(s.org_name || '-')}</div></td>
          <td class="num">¥${fmtC(s.received || 0)}</td>
          <td class="num">${s.rate != null ? s.rate + '%' : '-'}</td>
          <td class="num" style="text-align:right; font-weight:700;">${fmtC(s.points || 0)}</td>
        </tr></tbody>
      </table></div>`
    : `<div class="table-container"><table class="official-table">
        <thead><tr><th>来源订单</th><th>期次</th><th>解冻日</th><th style="text-align:right;">结算金额</th></tr></thead>
        <tbody>${ls.map(l => `<tr><td>${kindBadge(l.kind)} <span class="code-badge">${l.order_id}</span><div style="font-size:11.5px; color:var(--muted-foreground);">${l.source}</div></td><td>${l.n > 1 ? '第 ' + l.k + '/' + l.n + ' 期' : '一次性'}</td><td>${l.unlock}</td><td class="num" style="text-align:right;">¥${fmtC(l.amt)}</td></tr>`).join('')}
        <tr><td colspan="3" style="text-align:right; font-weight:600;">合计</td><td class="num" style="text-align:right; font-weight:700;">¥${fmtC(s.points)}</td></tr></tbody>
      </table></div>`;
  document.getElementById('drawer-root').innerHTML = `
    <div class="drawer-mask show" id="drawer-sd" onclick="if(event.target===this)closeDrawer('drawer-sd')">
      <div class="drawer-panel" style="width:680px;">
        <div class="drawer-header">
          <div><h3 style="font-size:15px; font-weight:600;">结算明细 · ${s.settle_id}</h3>
            <div style="font-size:12px; color:var(--muted-foreground); margin-top:2px;">${s.partner_name} · ${s.settle_time} · 凭证 ${s.voucher}</div></div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-sd')">✕</button>
        </div>
        <div class="drawer-body">
          ${detailTable}
        </div>
      </div>
    </div>`;
}
function openEditVoucherModal(settleId) {
  const s = SETTLEMENT_HISTORY.find(x => x.settle_id === settleId); if (!s) return;
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-mask show" id="modal-rem">
      <div class="modal-dialog">
        <div class="modal-dialog-header"><h3>修改打款备注 · ${s.settle_id}</h3><button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-rem')">✕</button></div>
        <div class="modal-dialog-body">
          <div class="form-group"><label class="form-group-label">打款备注说明</label><input class="form-input-full" id="in-rem-edit" value="${esc(s.remark)}"></div>
          <div class="form-hint-note">仅可修改备注；金额、凭证号和结算明细不可修改。</div>
        </div>
        <div class="modal-dialog-footer"><button class="btn btn-outline" onclick="closeModal('modal-rem')">取消</button><button class="btn btn-primary" onclick="saveVoucherRemark('${s.settle_id}')">保存</button></div>
      </div>
    </div>`;
}
function saveVoucherRemark(settleId) {
  const s = SETTLEMENT_HISTORY.find(x => x.settle_id === settleId); if (!s) return;
  s.remark = document.getElementById('in-rem-edit').value.trim();
  const p = PARTNERS.find(x => x.id === s.partner_id);
  const r = p && p.settlements.find(x => x.batch_no === settleId); if (r) r.remark = s.remark;
  closeModal('modal-rem'); toast('备注已更新');
  renderSettlementsView(document.getElementById('main-view-container'));
}
function revokeSettlement(settleId) {
  const s = SETTLEMENT_HISTORY.find(x => x.settle_id === settleId); if (!s) return;
  if (s.imported) { toast('该结算单为机构订单录入时已发放，不支持撤销'); return; }
  const p = PARTNERS.find(x => x.id === s.partner_id); if (!p) return;
  const cnt = (s.lines || []).length;
  if (!confirm(`确认撤销结算单 ${settleId}？\n撤销后所选 ${cnt} 条明细将恢复为「可结算」，合伙人端同步回滚该笔已结算记录。`)) return;
  const before = p.points.withdrawable;
  (s.lines || []).forEach(l => {
    const rest = Math.max(0, (LINE_SETTLED[l.key] || 0) - l.amt);
    if (rest > 0) LINE_SETTLED[l.key] = rest;
    else { delete LINE_SETTLED[l.key]; delete LINE_SETTLE_ID[l.key]; }
  });
  SETTLEMENT_HISTORY.splice(SETTLEMENT_HISTORY.indexOf(s), 1);
  if (s.offset) p._offsetPaid = Math.max(0, (p._offsetPaid || 0) - s.offset);
  p.settlements = p.settlements.filter(x => x.batch_no !== settleId);
  p.flow = p.flow.filter(x => x.order_id !== settleId);
  recalcPartner(p);
  p.logs.unshift({ time: nowTime(), operator: s.operator || '财务', action: '撤销线下结算', before: `可结算 ¥${fmtC(before)}`, after: `可结算 ¥${fmtC(p.points.withdrawable)}`, reason: `撤销结算单 ${settleId}，恢复 ${cnt} 条明细为可结算` });
  toast(`已撤销结算单 ${settleId}：${cnt} 条明细恢复为可结算，合伙人端已同步回滚`);
  renderSettlementsView(document.getElementById('main-view-container'));
}
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

// ==========================================
// 机构订单审核（合伙人提交 → 运营审核核定比例 → 财务登记回款 → 按回款释放佣金）
// ==========================================
const ORG_STATE_LABEL = { PENDING: '待审核', REJECTED: '已驳回', PENDING_SETTLE: '待结算', SETTLED: '已结算' };
const ORG_STATE_BADGE = { PENDING: 'badge-warning', REJECTED: 'badge-danger', PENDING_SETTLE: 'badge-blue', SETTLED: 'badge-success' };

function allOrgOrders() {
  const r = [];
  PARTNERS.forEach(p => p.orders.forEach(o => { if (o.kind === 'ORG') r.push({ p, o, lines: orderLines(o, p) }); }));
  return r.sort((a, b) => (b.o.start || '').localeCompare(a.o.start || ''));
}
function orgReqOrder(r) {
  const p = PARTNERS.find(x => x.id === r.partner_id);
  if (!p) return null;
  const o = p.orders.find(x => x.id === r.order_id);
  return o ? { p, o, lines: orderLines(o, p) } : null;
}
function orgReqState(r) {
  if (r.status === 'PENDING') return 'PENDING';
  if (r.status === 'REJECTED') return 'REJECTED';
  const x = orgReqOrder(r);
  if (!x) return 'PENDING_SETTLE';
  return orgRemainOf(x.o) === 0 ? 'SETTLED' : 'PENDING_SETTLE';
}
function orgSettledOf(o) {
  const pool = round2(o.points || 0);
  return Math.min(round2(Math.max(o.settled_amount || 0, LINE_SETTLED[o.id + '#1'] || 0)), pool);
}
function orgRemainOf(o) { return Math.max(0, round2((o.points || 0) - orgSettledOf(o))); }
function orgReceivedOf(o) { return round2(o.received_amount || 0); }
function orgReqRate(r) {
  if (r.rate != null) return r.rate;
  const x = orgReqOrder(r);
  return x ? x.o.rate : null;
}
function orgDocCount(r) { return r.imgs || 0; }

function openOrgReviewDrawer(reqId) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  const p = PARTNERS.find(x => x.id === r.partner_id);
  const st = orgReqState(r);
  const editable = st === 'PENDING';
  const rate = orgReqRate(r);
  const linkedOrder = orgReqOrder(r);
  const initRate = rate != null ? rate : '';
  const pool = rate != null ? round2(r.amount * rate / 100) : 0;
  const settled = linkedOrder ? orgSettledOf(linkedOrder.o) : 0;
  const remain = Math.max(0, round2((linkedOrder ? linkedOrder.o.points : pool) - settled));
  const kv = (k, v) => `<div style="display:flex; justify-content:space-between; gap:14px; padding:9px 0; border-bottom:1px dashed var(--border); font-size:13px;"><span style="flex:none; color:var(--muted-foreground);">${k}</span><span style="text-align:right; font-weight:500;">${v}</span></div>`;
  const docs = Array.from({ length: r.imgs || 0 }, (_, i) => `
    <button type="button" class="org-doc-card" title="点击预览" onclick="previewOrgDoc('${r.id}', ${i})">
      <span class="org-doc-paper"><i></i><i></i><i></i><i></i><i style="width:58%"></i><span class="org-doc-stamp"></span></span>
      <span class="org-doc-zoom">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </span>
    </button>`).join('');

  document.getElementById('drawer-root').innerHTML = `
    <div class="drawer-mask show" id="drawer-org-review" onclick="if(event.target===this)closeDrawer('drawer-org-review')">
      <div class="drawer-panel" style="width:720px;">
        <div class="drawer-header">
          <div>
            <h3 style="font-size:15px; font-weight:600;">${editable ? '机构订单审核' : '机构订单详情'}</h3>
            <div style="font-size:11.5px; color:var(--muted-foreground); margin-top:3px;">申请单 ${r.id}</div>
          </div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-org-review')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="drawer-body">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 16px; border:1px solid var(--border); border-radius:var(--radius-lg); background:#FAFAFA; margin-bottom:18px;">
            <div>
              <div style="font-size:11.5px; color:var(--muted-foreground);">当前状态</div>
              <div style="display:flex; align-items:center; gap:8px; margin-top:5px;">
                <span class="badge ${ORG_STATE_BADGE[st]}">${ORG_STATE_LABEL[st]}</span>
                <span style="font-size:12px; color:var(--muted-foreground);">提交于 ${r.created_at}</span>
              </div>
            </div>
            <div style="text-align:right; font-size:12px; color:var(--muted-foreground); line-height:1.7;">
              ${r.reviewed_at ? `审核人 ${r.reviewer}<br>审核于 ${r.reviewed_at}` : '等待运营审核'}
            </div>
          </div>

          ${st === 'REJECTED' ? `<div style="background:#FEF2F2; border:1px solid #FECACA; color:#B91C1C; border-radius:var(--radius-md); padding:10px 14px; font-size:12.5px; margin-bottom:18px;">驳回原因：${esc(r.reject_reason)}</div>` : ''}

          <div style="font-size:13px; font-weight:600; margin-bottom:4px;">申请信息</div>
          <div style="margin-bottom:20px;">
            ${kv('归属合伙人', `${r.partner_name}${p ? `<span style="font-weight:400; color:var(--muted-foreground);"> · ${p.channel_type === 'INTERNAL' ? '内部' : '外部'}渠道</span>` : ''}`)}
            ${kv('机构名称', esc(r.org))}
            ${kv('合同编号', `<span class="code-badge">${esc(r.contract_no)}</span>`)}
            ${kv('合同金额', `<span class="num">¥${formatNum(r.amount)}</span>`)}
            ${kv('服务周期', `${r.start} · ${r.months} 个月`)}
            ${r.remark ? kv('合伙人备注', esc(r.remark)) : ''}
          </div>

          <div style="font-size:13px; font-weight:600; margin-bottom:10px;">合同扫描件 <span style="font-size:11.5px; font-weight:400; color:var(--muted-foreground);">（${r.imgs || 0} 张）</span></div>
          <div class="org-doc-grid" style="margin-bottom:22px;">${docs || '<div style="font-size:12.5px; color:var(--muted-foreground);">未上传合同扫描件</div>'}</div>

          ${editable ? `
          <div style="border:1px solid var(--border); border-radius:var(--radius-lg); padding:16px; margin-bottom:18px;">
            <div style="font-size:13px; font-weight:600; margin-bottom:12px;">核定分成比例</div>
            <div style="display:flex; align-items:center; height:36px; border:1px solid var(--input); border-radius:var(--radius-md); background:#fff; padding:0 12px; gap:8px; max-width:200px;">
              <span style="flex:none; font-size:12px; color:var(--muted-foreground);">比例</span>
              <input class="num" type="number" step="1" min="0" max="100" id="org-review-rate" value="${initRate}" style="flex:1; min-width:0; height:100%; border:none; outline:none; background:transparent; font-family:inherit; font-size:13px; text-align:right;" oninput="refreshOrgReviewPool('${r.id}')">
              <span style="flex:none; font-size:12px; color:var(--muted-foreground);">%</span>
            </div>
            <div class="form-hint-note">比例由审核运营核定，通过后锁定，不随后续比例调整变化。</div>
            <div style="margin-top:14px; display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
              <div class="content-card" style="margin:0; padding:10px 12px;"><div style="font-size:11.5px; color:var(--muted-foreground);">合同金额</div><strong class="num">¥${formatNum(r.amount)}</strong></div>
              <div class="content-card" style="margin:0; padding:10px 12px;"><div style="font-size:11.5px; color:var(--muted-foreground);">总佣金</div><strong class="num" id="org-review-pool">${rate != null ? '¥' + fmtC(pool) : '—'}</strong></div>
            </div>
          </div>` : `
          <div style="font-size:13px; font-weight:600; margin-bottom:4px;">审核结果</div>
          <div style="margin-bottom:20px;">
            ${kv('核定比例', rate != null ? rate + '%' : '-')}
            ${kv('总佣金（合同金额 × 比例）', `<span class="num">¥${fmtC(rate != null ? round2(r.amount * rate / 100) : 0)}</span>`)}
            ${kv('已结算佣金 / 总佣金', `<span class="num">¥${fmtC(settled)} / ¥${fmtC(linkedOrder ? linkedOrder.o.points : 0)}</span>`)}
            ${kv('待结算佣金', `<span class="num" style="color:#A16207;">¥${fmtC(remain)}</span>`)}
            ${kv('审核人', r.reviewer || '-')}
          </div>
          <div style="font-size:13px; font-weight:600; margin-bottom:10px;">结算记录</div>
          ${(() => {
            const recs = linkedOrder ? SETTLEMENT_HISTORY.filter(s => s.org_order_id === linkedOrder.o.id) : [];
            if (!recs.length) return `<div style="font-size:12.5px; color:var(--muted-foreground); border:1px dashed var(--border); border-radius:var(--radius-md); padding:16px; text-align:center;">该订单尚未结算。财务确认回款后，在「结算管理 · 待结算机构订单」中按订单填写结算金额。</div>`;
            return `<div class="table-container"><table class="official-table">
              <thead><tr><th>结算单号</th><th>结算金额</th><th>打款凭证</th><th>经办人</th><th>结算时间</th></tr></thead>
              <tbody>${recs.map(s => `<tr>
                  <td><span class="code-badge">${s.settle_id}</span></td>
                  <td class="num" style="color:#15803D; font-weight:600;">¥${fmtC(s.points)}</td>
                  <td><span class="code-badge">${esc(s.voucher)}</span></td>
                  <td>${esc(s.operator)}</td>
                  <td class="num" style="font-size:12px; color:var(--muted-foreground);">${s.settle_time}</td>
                </tr>`).join('')}</tbody></table></div>`;
          })()}`}
        </div>
        <div class="drawer-footer">
          <button class="btn btn-outline" onclick="closeDrawer('drawer-org-review')">${editable ? '取消' : '关闭'}</button>
          ${editable ? `<button class="btn btn-destructive" onclick="openOrgRejectModal('${r.id}')">驳回</button>
          <button class="btn btn-primary" onclick="confirmOrgApprove('${r.id}')">通过并生成订单</button>` : ''}
        </div>
      </div>
    </div>`;
}

function refreshOrgReviewPool(reqId) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  const el = document.getElementById('org-review-pool'); if (!el) return;
  const rate = parseFloat(document.getElementById('org-review-rate').value);
  el.textContent = (isNaN(rate) || rate < 0 || rate > 100) ? '—' : '¥' + fmtC(round2(r.amount * rate / 100));
}

function openOrgRejectModal(reqId) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-mask show" id="modal-org-reject" onclick="if(event.target===this)closeModal('modal-org-reject')">
      <div class="modal-dialog" style="max-width:460px;">
        <div class="modal-dialog-header">
          <h3>驳回机构订单</h3>
          <button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-org-reject')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body">
          <div style="display:flex; gap:12px; padding:12px 14px; background:#FAFAFA; border:1px solid var(--border); border-radius:var(--radius-md); margin-bottom:16px;">
            <div style="font-size:12px; color:var(--muted-foreground); flex:none; padding-top:1px;">申请单</div>
            <div style="min-width:0;">
              <div style="font-size:13px; font-weight:600;">${esc(r.org)}</div>
              <div style="font-size:11.5px; color:var(--muted-foreground); margin-top:2px;">${r.id} · 合同 ${esc(r.contract_no)} · ¥${formatNum(r.amount)}</div>
            </div>
          </div>
          <label class="form-group-label">驳回原因<span class="req">*</span></label>
          <textarea class="form-textarea-full" id="org-reject-reason" placeholder="如：合同盖章页缺失，请补充后重新提交"></textarea>
        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-org-reject')">取消</button>
          <button class="btn btn-destructive" onclick="confirmOrgReject('${r.id}')">确认驳回</button>
        </div>
      </div>
    </div>`;
  const ta = document.getElementById('org-reject-reason');
  if (ta) ta.focus();
}

function previewOrgDoc(reqId, idx) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  const name = '合同扫描件 ' + (idx + 1) + (orgDocCount(r) ? ' / ' + orgDocCount(r) : '');
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-mask show" id="modal-org-doc" onclick="if(event.target===this)closeModal('modal-org-doc')">
      <div class="modal-dialog" style="max-width:560px;">
        <div class="modal-dialog-header">
          <h3>${name}</h3>
          <button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-org-doc')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body" style="background:#F4F4F5;">
          <div class="org-paper">
            <div class="org-paper-title">技术推广服务合同</div>
            <div class="org-paper-sub">合同编号 ${esc(r.contract_no)}</div>
            <div class="org-paper-line" style="width:88%"></div>
            <div class="org-paper-line" style="width:76%"></div>
            <div class="org-paper-line" style="width:92%"></div>
            <div class="org-paper-line" style="width:64%"></div>
            <div class="org-paper-line" style="width:84%"></div>
            <div class="org-paper-line" style="width:72%"></div>
            <div class="org-paper-line" style="width:90%"></div>
            <div class="org-paper-line" style="width:56%"></div>
            <div style="font-size:11.5px; color:var(--muted-foreground); margin-top:18px;">甲方：${esc(r.org)}</div>
            <div style="font-size:11.5px; color:var(--muted-foreground); margin-top:4px;">乙方：立理（杭州）智能科技有限公司</div>
            <div class="org-paper-stamp">合同专用章</div>
          </div>
        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-org-doc')">关闭</button>
        </div>
      </div>
    </div>`;
}

function confirmOrgApprove(reqId) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  const p = PARTNERS.find(x => x.id === r.partner_id);
  if (!p) { toast('归属合伙人不存在，无法生成订单'); return; }
  const rate = parseFloat(document.getElementById('org-review-rate').value);
  if (isNaN(rate) || rate < 0 || rate > 100) { toast('请填写 0~100 之间的核定分成比例'); return; }
  const now = nowTime();
  const orderId = 'ORG-' + r.start.replace(/-/g, '') + '-' + String(allOrgOrders().length + 1).padStart(3, '0');
  const pool = round2(r.amount * rate / 100);
  r.status = 'APPROVED';
  r.rate = rate;
  r.reviewed_at = now;
  r.reviewer = '陈嘉禾';
  r.reject_reason = '';
  r.order_id = orderId;
  r.settled_amount = 0;
  p.orders.unshift({ id: orderId, customer_phone: '', org_name: r.org, contract_no: r.contract_no, kind: 'ORG',
    product: '机构版年度合同（线下签约）', pay_amount: r.amount, rate, points: pool,
    status: 'ORG', unfreeze_at: '按结算释放', created_at: now, start: r.start, months: r.months,
    paid_out: 0, settled_amount: 0, received_amount: 0, remark: r.remark, is_upgrade: false, is_cool: false });
  p.flow.unshift({ time: now, order_id: orderId, type: '机构订单审核通过', points: '+¥' + fmtC(pool), status: `合同 ${r.contract_no}，待结算佣金 ¥${fmtC(pool)}` });
  p.logs.unshift({ time: now, operator: '陈嘉禾', action: '审核机构订单', before: r.id, after: `${r.org} · ¥${formatNum(r.amount)} × ${rate}%`, reason: `核定比例 ${rate}%，总佣金 ¥${fmtC(pool)}，按订单维度结算` });
  recalcAll();
  closeDrawer('drawer-org-review');
  toast(`审核通过：${r.org}，核定 ${rate}%，总佣金 ¥${fmtC(pool)}`);
  renderOrdersView(document.getElementById('main-view-container'));
}

function confirmOrgReject(reqId) {
  const r = ORG_REQUESTS.find(x => x.id === reqId); if (!r) return;
  const ta = document.getElementById('org-reject-reason');
  const reason = ta ? ta.value.trim() : '';
  if (!reason) { toast('请填写驳回原因'); return; }
  const now = nowTime();
  r.status = 'REJECTED';
  r.reviewed_at = now;
  r.reviewer = '陈嘉禾';
  r.reject_reason = reason;
  const p = PARTNERS.find(x => x.id === r.partner_id);
  if (p) p.logs.unshift({ time: now, operator: '陈嘉禾', action: '驳回机构订单', before: r.id, after: r.org, reason });
  closeModal('modal-org-reject');
  closeDrawer('drawer-org-review');
  toast(`已驳回：${r.org}`);
  renderOrdersView(document.getElementById('main-view-container'));
}

// ==========================================
// 路由控制器 (Router)
// ==========================================
let currentRoute = 'applications';
let routeParams = {};


// 通用列表翻页器
let pageState = {};
function pageMeta(key, total) {
  const st = pageState[key] || (pageState[key] = { page: 1, size: 20 });
  const pages = Math.max(1, Math.ceil(total / st.size));
  if (st.page > pages) st.page = pages;
  return { st, pages, start: (st.page - 1) * st.size };
}
function pagedList(key, arr) {
  const m = pageMeta(key, arr.length);
  return arr.slice(m.start, m.start + m.st.size);
}
function resetPage(key) {
  if (pageState[key]) pageState[key].page = 1;
}
function goPage(key, page) {
  const st = pageState[key] || (pageState[key] = { page: 1, size: 20 });
  st.page = Math.max(1, page);
  renderActiveView();
}
function setPageSize(key, size) {
  pageState[key] = { page: 1, size: parseInt(size, 10) || 20 };
  renderActiveView();
}
function pagerBar(key, total) {
  const { st, pages } = pageMeta(key, total);
  return `
    <div class="table-pager">
      <div class="pager-total">共 ${total} 条 · 第 ${st.page}/${pages} 页</div>
      <div class="pager-actions">
        <select class="input-control pager-size" onchange="setPageSize('${key}', this.value)">
          <option value="20" ${st.size === 20 ? 'selected' : ''}>20 条/页</option>
          <option value="50" ${st.size === 50 ? 'selected' : ''}>50 条/页</option>
        </select>
        <button class="pager-arrow" ${st.page <= 1 ? 'disabled' : ''} onclick="goPage('${key}', ${st.page - 1})">‹ 上一页</button>
        <button class="pager-arrow" ${st.page >= pages ? 'disabled' : ''} onclick="goPage('${key}', ${st.page + 1})">下一页 ›</button>
      </div>
    </div>`;
}


// ==========================================
// 1. 页面：申请审核 (APPLICATIONS)
// ==========================================
let appStatusTab = 'PENDING';
let appKw = '';
let appFrom = '';
let appTo = '';
let appPickerOpen = false;
let appTmpFrom = '';
let appTmpTo = '';
let appCalMonth = '2026-11';


// ==========================================
let listKw = '';
let listChannel = 'ALL';
let listStatus = 'ALL';


// ==========================================
// 4. 页面：结算管理 (SETTLEMENTS)
// ==========================================
let settleSubTab = 'pending';
let settleKw = '';
let settleChannel = 'ALL';
let settleOrgKw = '';
let settleOrgChannel = 'ALL';

function settleRefocus(id) {
  renderSettlementsView(document.getElementById('main-view-container'));
  const el = document.getElementById(id);
  if (el) { el.focus(); try { el.setSelectionRange(el.value.length, el.value.length); } catch (e) {} }
}

function settleFilterBar(kind) {
  const isOrg = kind === 'org';
  const kw = isOrg ? settleOrgKw : settleKw;
  const ch = isOrg ? settleOrgChannel : settleChannel;
  return `<div class="filter-card" style="margin-bottom:16px;">
    <div class="filter-inputs-grid">
      <div class="filter-field" style="flex:1; min-width:240px;">
        <label class="field-label">搜索</label>
        <input class="input-control" id="${isOrg ? 'settle-org-kw' : 'settle-kw'}" value="${esc(kw)}"
          placeholder="${isOrg ? '机构名称 / 合伙人姓名' : '合伙人姓名 / 手机号'}"
          oninput="${isOrg ? `settleOrgKw=this.value; settleRefocus('settle-org-kw')` : `settleKw=this.value; settleRefocus('settle-kw')`}">
      </div>
      <div class="filter-field" style="min-width:150px;">
        <label class="field-label">渠道</label>
        <select class="input-control" onchange="${isOrg ? `settleOrgChannel=this.value; renderSettlementsView(document.getElementById('main-view-container'))` : `settleChannel=this.value; renderSettlementsView(document.getElementById('main-view-container'))`}">
          <option value="ALL"${ch === 'ALL' ? ' selected' : ''}>全部渠道</option>
          <option value="INTERNAL"${ch === 'INTERNAL' ? ' selected' : ''}>内部</option>
          <option value="EXTERNAL"${ch === 'EXTERNAL' ? ' selected' : ''}>外部</option>
        </select>
      </div>
      <button class="btn btn-outline" onclick="${isOrg ? `settleOrgKw=''; settleOrgChannel='ALL'; renderSettlementsView(document.getElementById('main-view-container'))` : `settleKw=''; settleChannel='ALL'; renderSettlementsView(document.getElementById('main-view-container'))`}">重置</button>
    </div>
  </div>`;
}


let dashRange = { start: '2026-01-01', end: '2026-12-31' };
const DASH_TODAY = '2026-11-06';
function dashRangeBounds() {
  const s = dashRange.start || DASH_TODAY, e = dashRange.end || DASH_TODAY;
  const start = s <= e ? s : e, end = s <= e ? e : s;
  const full = /^\d{4}-01-01$/.test(start) && /^\d{4}-12-31$/.test(end) && start.slice(0, 4) === end.slice(0, 4);
  return { start, end, full, label: start + ' ~ ' + end };
}
function setDashRange(k, v) { if (v) dashRange[k] = v; renderActiveView(); }

function dashMetrics(list) {
  const b = dashRangeBounds();
  const inR = s => { const d = String(s || '').slice(0, 10); return d >= b.start && d <= b.end; };
  let userGmv = 0, orgGmv = 0, userFee = 0, orgFee = 0, cust = 0, paying = 0, orgDeals = 0;
  list.forEach(p => {
    const cs = p.customers || [];
    cust += cs.length ? cs.filter(c => inR(c.reg_time)).length : (b.full ? (p.customers_count || 0) : 0);
    (p.orders || []).filter(o => inR(o.created_at)).forEach(o => {
      const refunded = (o.refunds || []).reduce((a, r) => a + (r.amount || 0), 0);
      const net = Math.max(0, round2((o.pay_amount || 0) - refunded));
      const fee = Math.max(0, round2(net * (o.rate || 0) / 100));
      if (orderKind(o) === 'ORG') { orgGmv += net; orgFee += fee; if (net > 0) orgDeals++; }
      else { userGmv += net; userFee += fee; if (net > 0) paying++; }
    });
  });
  userGmv = round2(userGmv); orgGmv = round2(orgGmv);
  userFee = round2(userFee); orgFee = round2(orgFee);
  return {
    gmv: round2(userGmv + orgGmv), userGmv, orgGmv,
    fee: round2(userFee + orgFee), userFee, orgFee,
    cust, paying, orgDeals,
    userAov: paying > 0 ? round2(userGmv / paying) : 0,
    orgAov: orgDeals > 0 ? round2(orgGmv / orgDeals) : 0
  };
}


let orderSubTab = 'user';
let ordKw = '';
let ordStatus = 'ALL';
let orgStatusTab = 'PENDING';

function ordIsRefunded(o) {
  return (o.refunds || []).length > 0 || o.status === 'VOID_REFUND';
}

function allUserOrders() {
  const r = [];
  PARTNERS.forEach(p => p.orders.forEach(o => { if (orderKind(o) !== 'ORG') r.push({ p, o, lines: orderLines(o, p) }); }));
  return r.sort((a, b) => (b.o.created_at || '').localeCompare(a.o.created_at || ''));
}


// ==========================================
let reportPeriod = 'MONTH';


let settingsEditing = { rates: false, freeze: false };
let pendingSettings = null;
let unitEditing = -1;


function openRejectModal(appId) {
  const app = APPLICATIONS.find(a => a.id === appId);
  if (!app) return;

  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-mask show" id="modal-reject">
      <div class="modal-dialog">
        <div class="modal-dialog-header">
          <h3>拒绝合伙人申请</h3>
          <button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-reject')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body">
          <p style="font-size: 13px; color: var(--muted-foreground); margin-bottom: 14px;">
            正在拒绝 <strong>${app.name}</strong> (${app.phone}) 的申请。确认后该申请标记为「已拒绝」，申请人状态页不再显示该申请可办理。
          </p>

        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-reject')">取消</button>
          <button class="btn btn-destructive" onclick="confirmRejectPartner('${app.id}')">确认拒绝</button>
        </div>
      </div>
    </div>
  `;
}

function confirmRejectPartner(appId) {
  const app = APPLICATIONS.find(a => a.id === appId);
  if (!app) return;

  const opTime = nowTime();
  app.status = 'REJECTED';
  app.reject_time = opTime;
  app.reject_by = '陈嘉禾';
  app.logs.unshift({
    time: opTime,
    operator: '陈嘉禾',
    action: '拒绝申请',
    detail: '操作人直接拒绝，未填写原因'
  });

  closeModal('modal-reject');
  toast(`已拒绝【${app.name}】的申请`);
  updateSidebarMenu();
  renderApplicationsView(document.getElementById('main-view-container'));
}

// 3. 申请详情抽屉
// 抽屉内的只读信息行
function infoRow(label, value, mono) {
  return `<div style="display:flex; justify-content:space-between; gap:14px; padding:9px 0; border-bottom:1px dashed var(--border); font-size:13px;">
    <span style="flex:none; color:var(--muted-foreground);">${label}</span>
    <span style="text-align:right; font-weight:500;" class="${mono ? 'num' : ''}">${value}</span>
  </div>`;
}

function openAppDetailDrawer(appId) {
  const app = APPLICATIONS.find(a => a.id === appId);
  if (!app) return;

  const root = document.getElementById('drawer-root');
  root.innerHTML = `
    <div class="drawer-mask show" id="drawer-app" onclick="if(event.target===this)closeDrawer('drawer-app')">
      <div class="drawer-panel">
        <div class="drawer-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <h3 style="font-size: 15px; font-weight: 600;">${app.status === 'PENDING' ? '审核申请' : '申请档案详情'}</h3>
            ${app.status==='PENDING'?'<span class="badge badge-warning">待审核</span>':''}
            ${app.status==='APPROVED'?'<span class="badge badge-success">已通过</span>':''}
            ${app.status==='REJECTED'?'<span class="badge badge-danger">已拒绝</span>':''}
          </div>
          <button class="btn-ghost" style="padding:4px;" onclick="closeDrawer('drawer-app')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="drawer-body">
          <div style="font-size:13px; font-weight:600; margin-bottom:10px;">申请人填写信息</div>
          <div style="border:1px solid var(--border); border-radius:var(--radius-md); background:#FAFAFA; padding:2px 14px; margin-bottom:18px;">
            ${infoRow('申请人姓名', app.name)}
            ${infoRow('申请手机号', app.phone, true)}
            ${infoRow('所属单位', app.org)}
            ${infoRow('微信号', app.wx || '—')}
            ${infoRow('提交时间', app.apply_time || '—')}
          </div>

          ${app.status === 'PENDING' ? `
          <div style="font-size:13px; font-weight:600; margin-bottom:10px;">审核设置</div>
          <div class="form-group">
            <label class="form-group-label">归属单位 <span class="req">*</span></label>
            <select class="form-input-full" id="in-approve-unit" style="cursor: pointer;">
              <option value="">请选择归属单位</option>
              ${UNITS.map(u => `<option value="${u}">${u}</option>`).join('')}
            </select>
            <div class="form-hint-note">选项来自「系统设置 · 单位配置」，用于数据看板按单位统计；确定后不可修改。</div>
          </div>

          <div class="form-group">
            <label class="form-group-label">渠道类型 <span class="req">*</span></label>
            <div class="choice-cards-grid">
              <div class="choice-card-item selected" id="opt-ext" onclick="pickChannelType('EXTERNAL')">
                <input type="radio" name="ch" value="EXTERNAL" checked>
                <span class="choice-title">外部渠道</span>
              </div>
              <div class="choice-card-item" id="opt-int" onclick="pickChannelType('INTERNAL')">
                <input type="radio" name="ch" value="INTERNAL">
                <span class="choice-title">内部渠道</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-group-label">分成比例（首购 / 续购）<span class="req">*</span></label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display: flex; align-items: center; height: 36px; border: 1px solid var(--input); border-radius: var(--radius-md); background: #fff; padding: 0 12px; gap: 8px;">
                <span style="flex: none; font-size: 12px; color: var(--muted-foreground);">首购</span>
                <input class="num" type="number" step="1" min="0" max="100" id="in-approve-first-rate" value="${GLOBAL_CONFIG.external_first_rate}" style="flex: 1; min-width: 0; height: 100%; border: none; outline: none; background: transparent; font-family: inherit; font-size: 13px; text-align: right;">
              </div>
              <div style="display: flex; align-items: center; height: 36px; border: 1px solid var(--input); border-radius: var(--radius-md); background: #fff; padding: 0 12px; gap: 8px;">
                <span style="flex: none; font-size: 12px; color: var(--muted-foreground);">续购</span>
                <input class="num" type="number" step="1" min="0" max="100" id="in-approve-renew-rate" value="${GLOBAL_CONFIG.external_renew_rate}" style="flex: 1; min-width: 0; height: 100%; border: none; outline: none; background: transparent; font-family: inherit; font-size: 13px; text-align: right;">
              </div>
            </div>
          </div>

          <div class="form-group">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <label class="form-group-label" style="margin-bottom:0;">专属推荐码 (4位纯数字) <span class="req">*</span></label>
              <button class="btn btn-ghost btn-sm" style="height:22px; padding:0 6px;" onclick="document.getElementById('in-approve-code').value=Math.floor(1000+Math.random()*8999).toString().replace(/4/g,'6')">重新生成</button>
            </div>
            <input class="form-input-full num" type="text" maxlength="4" id="in-approve-code" value="${Math.floor(1000 + Math.random() * 8999).toString().replace(/4/g, '8')}" style="letter-spacing: 4px; font-weight: 700; text-align: center; font-size:16px;">
            <div class="form-hint-note">下单结算页输入或短链带入的 4 位唯一代码，确定后不可修改。</div>
          </div>
          ` : `
          <div style="font-size:13px; font-weight:600; margin-bottom:10px;">审核结果</div>
          <div style="border:1px solid var(--border); border-radius:var(--radius-md); background:#FAFAFA; padding:2px 14px; margin-bottom:18px;">
            ${app.status === 'APPROVED' ? `
              ${infoRow('归属单位', (PARTNERS.find(x => x.phone === app.phone) || {}).unit || '—')}
              ${infoRow('渠道类型', (PARTNERS.find(x => x.phone === app.phone) || {}).channel_type === 'INTERNAL' ? '内部渠道' : '外部渠道')}
              ${infoRow('首购 / 续购比例', (PARTNERS.find(x => x.phone === app.phone) || {}).first_rate + '% / ' + (PARTNERS.find(x => x.phone === app.phone) || {}).renew_rate + '%')}
              ${infoRow('专属推荐码', (PARTNERS.find(x => x.phone === app.phone) || {}).code || '—', true)}
              ${infoRow('审核人', app.approve_by || '—')}
              ${infoRow('审核时间', app.approve_time || '—')}
            ` : `
              ${infoRow('拒绝原因', app.reject_reason || '—')}
              ${infoRow('审核人', app.reject_by || '—')}
              ${infoRow('审核时间', app.reject_time || '—')}
            `}
          </div>
          `}

          ${app.status === 'REJECTED' && app.reject_reason ? `
            <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-md); padding: 10px 12px; margin-bottom: 16px; font-size: 12.5px; color: #991B1B;">
              <strong>历史拒绝原因：</strong>${app.reject_reason}
            </div>
          ` : ''}
        </div>

        <div class="drawer-footer">
          <button class="btn btn-outline" onclick="closeDrawer('drawer-app')">取消</button>
          ${app.status === 'PENDING' ? `
            <button class="btn btn-destructive" onclick="closeDrawer('drawer-app');openRejectModal('${app.id}')">拒绝</button>
            <button class="btn btn-primary" onclick="confirmApprovePartner('${app.id}')">通过</button>
          ` : ''}
          ${app.status === 'REJECTED' ? `
            <button class="btn btn-primary" onclick="confirmApprovePartner('${app.id}')">重新审核</button>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// 4. 修改比例弹窗
function openModifyRateModal(partnerId) {
  const p = PARTNERS.find(item => item.id === partnerId);
  if (!p) return;

  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-mask show" id="modal-rate">
      <div class="modal-dialog">
        <div class="modal-dialog-header">
          <h3>修改分成比例</h3>
          <button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-rate')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body">
          <div style="background: #FAFAFA; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px 14px; margin-bottom: 16px; font-size: 13px;">
            合伙人：<strong>${p.name}</strong> (${p.phone} · 推荐码: ${p.code})
          </div>

          <div class="form-group">
            <label class="form-group-label">当前比例（首购 / 续购）</label>
            <input class="form-input-full num" value="${p.first_rate}% / ${p.renew_rate}%" disabled>
          </div>

          <div class="form-group">
            <label class="form-group-label">新分成比例（首购 / 续购） <span class="req">*</span></label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display:flex; align-items:center; height:36px; border:1px solid var(--input); border-radius:var(--radius-md); background:#fff; padding:0 12px; gap:8px;">
                <span style="flex:none; font-size:12px; color:var(--muted-foreground);">首购</span>
                <input class="num" type="number" step="1" min="0" max="100" id="in-new-first-rate" value="${p.first_rate}" style="flex:1; min-width:0; height:100%; border:none; outline:none; background:transparent; font-family:inherit; font-size:13px; text-align:right; color:var(--foreground);">
              </div>
              <div style="display:flex; align-items:center; height:36px; border:1px solid var(--input); border-radius:var(--radius-md); background:#fff; padding:0 12px; gap:8px;">
                <span style="flex:none; font-size:12px; color:var(--muted-foreground);">续购</span>
                <input class="num" type="number" step="1" min="0" max="100" id="in-new-renew-rate" value="${p.renew_rate}" style="flex:1; min-width:0; height:100%; border:none; outline:none; background:transparent; font-family:inherit; font-size:13px; text-align:right; color:var(--foreground);">
              </div>
            </div>
            <div class="form-hint-note" style="color: #A16207;">
              ⚠️ 仅对修改后新产生订单生效，历史已带单分成不追溯重算。
            </div>
          </div>
        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-rate')">取消</button>
          <button class="btn btn-primary" onclick="confirmModifyRate('${p.id}')">确认修改</button>
        </div>
      </div>
    </div>
  `;
}

function confirmModifyRate(partnerId) {
  const p = PARTNERS.find(item => item.id === partnerId);
  if (!p) return;
  const firstRate = parseFloat(document.getElementById('in-new-first-rate').value);
  const renewRate = parseFloat(document.getElementById('in-new-renew-rate').value);

  if (isNaN(firstRate) || firstRate < 0 || firstRate > 100 || isNaN(renewRate) || renewRate < 0 || renewRate > 100 || !Number.isInteger(firstRate) || !Number.isInteger(renewRate)) { alert('首购与续购比例需为 0~100 的整数'); return; }

  const oldFirst = p.first_rate, oldRenew = p.renew_rate;
  p.first_rate = firstRate;
  p.renew_rate = renewRate;
  p.logs.unshift({
    time: nowTime(),
    operator: '陈嘉禾',
    action: '分成比例调整',
    before: `首购 ${oldFirst}% / 续购 ${oldRenew}%`,
    after: `首购 ${firstRate}% / 续购 ${renewRate}%`
  });

  closeModal('modal-rate');
  toast(`分成比例已调整为 首购 ${firstRate}% / 续购 ${renewRate}%`);
  renderActiveView();
}

// 5. 冻结 / 解冻
function openFreezeModal(partnerId) {
  const p = PARTNERS.find(item => item.id === partnerId);
  if (!p) return;

  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-mask show" id="modal-freeze">
      <div class="modal-dialog">
        <div class="modal-dialog-header">
          <h3>冻结合伙人账号</h3>
          <button class="btn-ghost" style="padding:4px;" onclick="closeModal('modal-freeze')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-dialog-body">
          <div style="background: #FEFCE8; border: 1px solid #FEF08A; border-radius: var(--radius-md); padding: 10px 12px; font-size: 12.5px; color: #A16207; margin-bottom: 14px;">
            冻结后该合伙人<strong>立即无法登录前台</strong>，推荐码 (${p.code}) 与专属推广链接同步失效，下单不再产生归属与佣金；解冻后恢复。历史可结算金额保留。
          </div>
          <div class="form-group">
            <label class="form-group-label">冻结原因 <span class="req">*</span></label>
            <textarea class="form-textarea-full" id="txt-freeze-reason" placeholder="请输入冻结原因..."></textarea>
          </div>
        </div>
        <div class="modal-dialog-footer">
          <button class="btn btn-outline" onclick="closeModal('modal-freeze')">取消</button>
          <button class="btn btn-primary" onclick="confirmFreeze('${p.id}')">确认冻结</button>
        </div>
      </div>
    </div>
  `;
}

function confirmFreeze(partnerId) {
  const p = PARTNERS.find(item => item.id === partnerId);
  if (!p) return;
  const reason = document.getElementById('txt-freeze-reason').value.trim();
  if (!reason) { alert('请填写冻结原因'); return; }

  p.status = 'FROZEN';
  p.freeze_reason = reason;
  p.logs.unshift({
    time: nowTime(),
    operator: '陈嘉禾',
    action: '冻结账号',
    before: '正常',
    after: '已冻结',
    reason: reason
  });

  closeModal('modal-freeze');
  toast(`合伙人【${p.name}】已冻结`);
  renderActiveView();
}

function unfreezePartner(partnerId) {
  const p = PARTNERS.find(item => item.id === partnerId);
  if (!p) return;
  if (!confirm(`确认解冻合伙人【${p.name}】吗？`)) return;

  p.status = 'NORMAL';
  p.freeze_reason = '';
  p.logs.unshift({
    time: nowTime(),
    operator: '陈嘉禾',
    action: '解冻账号',
    before: '已冻结',
    after: '正常',
    reason: '合规核实完毕恢复正常合作'
  });

  toast(`合伙人【${p.name}】已成功解冻`);
  renderActiveView();
}

// 6. 确认结算核销弹窗
// 7. 页面：系统设置 (SETTINGS)

// 通用助手函数
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
function closeDrawer(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
function toast(msg) {
  const el = document.getElementById('app-toast');
  const txt = document.getElementById('toast-text');
  if (!el || !txt) return;
  txt.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}
function nowTime() {
  const d = new Date();
  const pad = n => n < 10 ? '0' + n : n;
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function formatNum(n) {
  if (n === null || n === undefined) return '0';
  const v = Math.round(n * 100) / 100;
  return v.toLocaleString(undefined, Number.isInteger(v) ? { maximumFractionDigits: 0 } : { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
// 佣金一律按分取整（保留两位小数）
function round2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }
function fmtC(n) {
  if (n === null || n === undefined) return '0.00';
  return round2(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}



// 多页面导航控制器
function navigate(path) {
  var map = {
    dashboard: 'dashboard.html',
    applications: 'applications.html',
    list: 'partners.html',
    orders: 'orders.html',
    settlements: 'settlements.html',
    settings: 'settings.html',
    reports: 'reports.html'
  };
  if (path.startsWith('partner/')) {
    var parts = path.split('/');
    location.href = 'partner-detail.html?partnerId=' + parts[1] + (parts[2] ? '&tab=' + parts[2] : '');
    return;
  }
  var target = map[path] || (path + '.html');
  var curPage = location.pathname.split('/').pop() || '';
  if (curPage === target) {
    if (typeof renderCurrentPage === 'function') renderCurrentPage();
  } else {
    location.href = target;
  }
}

function renderActiveView() {
  if (typeof renderCurrentPage === 'function') {
    renderCurrentPage();
  }
}

function initAdminNav(currentNavId) {
  document.querySelectorAll('.sidebar-menu-item').forEach(function(el) { el.classList.remove('active'); });
  var activeItem = document.getElementById(currentNavId);
  if (activeItem) activeItem.classList.add('active');
}
