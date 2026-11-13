// ==================== 内置免网络矢量图标库 (Self-contained SVG Icons) ====================
var ICON_PATHS = {
  'share-2': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'user-check': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'wallet': '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  'wallet-cards': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c.5.6 1.3.9 2.1.9H21"/>',
  'coins': '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
  'badge-percent': '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>',
  'headphones': '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'plus-circle': '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off': '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>',
  'key-round': '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
  'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'check-circle-2': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'x-circle': '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
  'sparkles': '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
  'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'tag': '<path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/>',
  'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'link-2': '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>',
  'pencil': '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="2" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'building-2': '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'
};

function renderIcons() {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    try { lucide.createIcons(); return; } catch(e) {}
  }
  var els = document.querySelectorAll('[data-lucide]');
  els.forEach(function(el) {
    var name = el.getAttribute('data-lucide');
    var path = ICON_PATHS[name] || '';
    if (!path) return;
    var cls = el.getAttribute('class') || '';
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', cls);
    svg.innerHTML = path;
    el.parentNode.replaceChild(svg, el);
  });
}

// ==================== 右下角独立演示助手控制函数 (DEMO TOOLKIT CONTROLLER) ====================
var demoToolkitOpen = true;

function toggleDemoToolkit(force) {
  if (typeof force === 'boolean') {
    demoToolkitOpen = force;
  } else {
    demoToolkitOpen = !demoToolkitOpen;
  }
  var panel = $('demo-toolkit-panel');
  var btn = $('demo-toolkit-btn');
  if (panel && btn) {
    if (demoToolkitOpen) {
      panel.style.display = 'block';
      btn.style.display = 'none';
    } else {
      panel.style.display = 'none';
      btn.style.display = 'flex';
    }
  }
}

function demoSwitchAccount(phone) {
  var st = PHONES[phone];
  if (!st) return;

  if (st === 'FROZEN') {
    toast('账号 ' + phone + ' 权限已被冻结（演示用例）');
    return;
  }

  // 设置当前登录用户
  S.user = { phone: phone, st: st };
  
  // 若在登录页，同步回填表单
  var pInput = $('l_phone'); if (pInput) pInput.value = phone;
  var pwdInput = $('l_pwd'); if (pwdInput) pwdInput.value = 'Test1234';
  var codeInput = $('l_code'); if (codeInput) codeInput.value = '888888';

  toast('已切换为账号 ' + phone + ' (' + (st === 'APPROVED' ? '已通过' : st === 'PENDING' ? '审核中' : '已拒绝') + ')');
  
  localStorage.setItem('lili_partner_user', JSON.stringify(S.user));
  if (st === 'APPROVED') {
    go('promotion');
  } else {
    go('status');
  }
}

function demoFillOps() {
  S.lmode = 'pwd'; S.user = null;
  go('login');
  var a = $('l_phone'), b = $('l_pwd');
  if (a) a.value = 'ops_admin';
  if (b) b.value = 'Admin1234';
  toast('已填入运营账号 ops_admin / Admin1234');
}

// ==================== 全局状态与基础测试数据 (PRD V1.1) ====================
var S = {
  user: null,
  sort: 'exp',
  dir: 'asc',
  filter: 'all',
  tf: 'all',
  query: '',
  tab: 'flow',
  open: {},
  applied: false,
  pending: '',
  lmode: 'pwd',
  edit: -1,
  tagFor: null,
  done: false,
  cp: 1,
  op: 1,
  sp: 1,
  ordQ: '',
  ordF: 'all'
};

var PHONES = {
  '13800000001': 'PENDING',
  '13800000002': 'REJECTED',
  '13800000003': 'APPROVED',
  '13800000004': 'FROZEN'
};

var PWD = {
  '13800000001': 'Test1234',
  '13800000002': 'Test1234',
  '13800000003': 'Test1234',
  '13800000004': 'Test1234'
};

// 运营账号（演示用，实际由后台配置）：字母开头，与手机号区分
var OPS = {
  'ops_admin': { pwd: 'Admin1234', name: '陈嘉禾', role: '超级管理员' },
  'ops_finance': { pwd: 'Finance1234', name: '李静', role: '财务' }
};

var APP = {
  '13800000001': { name: '李明', org: '华东师范大学认知神经实验室', wx: 'liming_01', time: '2026-11-01 10:30' },
  '13800000002': { name: '王芳', org: '知本信息科技技术社区', wx: 'wf_ai_tech', time: '2026-10-20 09:12' },
  '13800000003': { name: '张伟', org: '清华大学智能计算实验室', wx: 'zhangwei_s1', time: '2026-09-05 15:40', first: 30, next: 20 }
};

var ST = {
  none: { text: '未开通', badge: 'bg-surface-subtle text-slate-muted border border-surface-border' },
  month: { text: '月卡生效中', badge: 'bg-brand-50 text-brand-600 border border-brand-100 font-semibold' },
  year: { text: '年卡生效中', badge: 'bg-emerald-50 text-emerald-600 border border-emerald-100 font-semibold' },
  expired: { text: '会员已过期', badge: 'bg-rose-50 text-rose-600 border border-rose-100' }
};

var CUST = [
  ['138****4501', '2026-10-02 10:20', '2026-10-02 09:50', 'month', '2026-11-30', '张老师课题组 5 人采购', '核心', 598],
  ['139****7723', '2026-09-15 21:03', '2026-09-14 18:30', 'year', '2027-09-30', '上海交大 AI 实验室年卡', '重要', 299],
  ['139****0021', '2026-10-20 14:11', '2026-10-18 11:00', 'none', '', '个人算法研究员试用中', '一般', 0],
  ['136****8890', '2026-08-01 09:00', '2026-07-30 20:12', 'expired', '2026-10-31', '月卡已到期，沟通续订中', '待召回', 0],
  ['150****6620', '2026-10-28 16:40', '2026-10-28 16:20', 'month', '2026-11-12', '小红书科研博主粉丝', '一般', 99],
  ['150****3344', '2026-07-11 12:30', '2026-07-10 08:45', 'year', '2027-07-31', '医学影像课题组负责人', '重要', 1198],
  ['137****9086', '2026-02-12 10:05', '2026-02-10 13:30', 'year', '2027-02-28', 'Max 年卡客户，课题组长期使用', '核心', 9999],
  ['186****2210', '2026-11-02 09:12', '2026-11-01 21:40', 'month', '2026-12-02', 'B 站视频进线，首购月卡', '一般', 99],
  ['159****6631', '2026-11-04 15:30', '2026-11-03 10:15', 'none', '', '领了资料包，暂未开通', '待召回', 0],
  ['133****7845', '2026-06-20 11:00', '2026-06-18 16:22', 'expired', '2026-09-20', '月卡到期未续，等预算审批', '待召回', 0],
  ['188****0092', '2026-08-08 14:20', '2026-08-07 09:31', 'year', '2027-08-08', '浙大计算机学院博士', '重要', 1198],
  ['151****3377', '2026-10-11 10:40', '2026-10-10 19:05', 'month', '2026-11-11', '药学院课题组，先试一个月', '重要', 299],
  ['135****5518', '2026-09-02 08:50', '2026-09-01 22:10', 'year', '2027-09-02', '清华自动化所，年卡团购 10 人', '核心', 9999],
  ['187****4402', '2026-05-15 17:20', '2026-05-14 11:08', 'expired', '2026-08-15', '', '待召回', 0],
  ['132****9963', '2026-10-25 13:10', '2026-10-24 20:45', 'none', '', '高校老师，正在走采购流程', '重要', 0],
  ['189****1177', '2026-07-03 09:40', '2026-07-02 15:30', 'year', '2027-07-03', '中科院自动化所课题组', '核心', 2999],
  ['176****3320', '2026-11-05 16:05', '2026-11-05 09:20', 'month', '2026-12-05', '知识星球引流，首购月卡', '一般', 99],
  ['155****8841', '2026-04-18 12:00', '2026-04-17 10:12', 'expired', '2026-07-18', '毕业离校，暂不需要', '待召回', 0],
  ['170****2265', '2026-09-28 18:30', '2026-09-27 14:00', 'month', '2026-10-28', '续费提醒已发，未回复', '一般', 99],
  ['131****7708', '2026-11-06 10:15', '2026-11-06 08:50', 'month', '2026-12-06', '', '一般', 99],
  ['136****5512', '2026-03-09 11:25', '2026-03-08 19:40', 'year', '2027-03-09', '复旦类脑研究院，二次续费', '核心', 2999],
  ['160****3345', '2026-10-30 14:50', '2026-10-29 10:20', 'none', '', '扫码进群后未转化', '待召回', 0]
];

var TAGS = {
  def: ['一般', '重要', '核心'],
  custom: ['待召回']
};

var REF_DATE = '2026-11-05';
var ORDERS = [
  { no: 'ORD202611030921', time: '2026-11-03 14:20', name: 'Pro 月卡（续购）', kind: 'month', paid: 369, rate: 20, ph: '138****4501', refund: 0 },
  { no: 'ORD202610150388', time: '2026-10-15 10:08', name: 'Pro 月卡（首购）', kind: 'month', paid: 369, rate: 30, ph: '139****7723', refund: 100, refundAt: '2026-10-20' },
  { no: 'ORD202610120455', time: '2026-10-12 09:41', name: 'Pro 年卡（首购）', kind: 'year', paid: 2999, rate: 30, ph: '150****3344', refund: 0 },
  { no: 'ORD202609020102', time: '2026-09-02 18:05', name: 'Lite 月卡（首购）', kind: 'month', paid: 99, rate: 30, ph: '150****6620', refund: 0 },
  { no: 'ORD202608200066', time: '2026-08-20 11:30', name: 'Pro 月卡（首购）', kind: 'month', paid: 299, rate: 30, ph: '139****0021', refund: 299, refundAt: '2026-08-25' },
  { no: 'ORD202607010215', time: '2026-07-01 16:42', name: 'Lite 年卡（首购）', kind: 'year', paid: 999, rate: 30, ph: '136****8890', refund: 500, refundAt: '2026-09-15', refunds: [{ amt: 200, at: '2026-08-30' }, { amt: 300, at: '2026-09-15' }] },
  { no: 'ORD202603050132', time: '2026-03-05 20:15', name: 'Pro 年卡（首购）', kind: 'year', paid: 2999, rate: 30, ph: '138****4501', refund: 0 },
  { no: 'ORD202602100077', time: '2026-02-10 13:30', name: 'Max 年卡（首购）', kind: 'year', paid: 9999, rate: 30, ph: '137****9086', refund: 5000, refundAt: '2026-11-05', settled: 1900 },
  { no: 'ORD202609100201', time: '2026-09-10 15:10', name: 'Max 年卡（首购）', kind: 'year', paid: 2999, rate: 30, ph: '150****3344', refund: 2999, refundAt: '2026-11-05' },
  { no: 'ORD202606200177', time: '2026-06-20 10:30', name: 'Lite 年卡（首购）', kind: 'year', paid: 999, rate: 30, ph: '137****9086', refund: 999, refundAt: '2026-08-05' },
  { no: 'ORD202610250199', time: '2026-10-25 16:00', name: 'Pro 年卡（升级补差）', kind: 'year', paid: 1000, rate: 20, ph: '138****4501', refund: 0 }
];

// ==================== 机构订单申请（合伙人录入 → 运营审核） ====================
var ORG_LS_KEY = 'll_s1_partner_org_demo_v3';
var ORG_REQS = null;
var ORG_IMGS = [];

function makeContractImg(title, tone) {
  var seal = tone === 'rose' ? '#E11D48' : '#B91C1C';
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="460" viewBox="0 0 360 460">'
    + '<rect width="360" height="460" fill="#FFFFFF"/>'
    + '<rect x="18" y="18" width="324" height="424" fill="none" stroke="#D1D5DB" stroke-width="1.5"/>'
    + '<text x="40" y="66" font-family="Songti SC, serif" font-size="19" fill="#111827">' + title + '</text>'
    + '<line x1="40" y1="78" x2="320" y2="78" stroke="#9CA3AF" stroke-width="1"/>'
    + '<text x="40" y="112" font-family="Songti SC, serif" font-size="12" fill="#6B7280">合同编号：LL-2026-1106-01</text>'
    + '<text x="40" y="140" font-family="Songti SC, serif" font-size="12" fill="#6B7280">合同金额：人民币伍万元整</text>'
    + '<text x="40" y="168" font-family="Songti SC, serif" font-size="12" fill="#6B7280">合作内容：立理 S1 科研智能体年度服务</text>'
    + '<text x="40" y="196" font-family="Songti SC, serif" font-size="12" fill="#6B7280">服务周期：2026-11-10 起 12 个月</text>'
    + '<line x1="40" y1="232" x2="320" y2="232" stroke="#E5E7EB" stroke-width="1"/>'
    + '<text x="40" y="268" font-family="Songti SC, serif" font-size="12" fill="#9CA3AF">双方确认以上条款并签署本协议。</text>'
    + '<text x="40" y="404" font-family="Songti SC, serif" font-size="12" fill="#6B7280">甲方（盖章）：立理科技</text>'
    + '<text x="40" y="432" font-family="Songti SC, serif" font-size="12" fill="#6B7280">乙方（盖章）：合作机构</text>'
    + '<circle cx="286" cy="412" r="34" fill="none" stroke="' + seal + '" stroke-width="3"/>'
    + '<text x="286" y="416" text-anchor="middle" font-family="Songti SC, serif" font-size="10" fill="' + seal + '">合同专用章</text>'
    + '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function seedOrgReqs() {
  return [
    // 待审核：合伙人刚提交，运营未处理
    {
      id: 'ORGREQ-20261106-001', org: '中国科学技术大学未来技术学院', contract_no: 'LL-2026-1106-01',
      amount: 50000, rate: null, start: '2026-11-10', months: 12, remark: '年度框架合同，分两批付款',
      contract_imgs: [makeContractImg('机构合作合同', 'red'), makeContractImg('补充协议', 'red')],
      status: 'PENDING', created_at: '2026-11-06 14:20', reviewed_at: '', reviewer: '', reject_reason: '',
      order_id: '', receipts: [], settled: 0
    },
    // 已驳回：材料不合规，可修改后重提
    {
      id: 'ORGREQ-20261029-002', org: '南京大学人工智能学院', contract_no: 'LL-2026-1029-07',
      amount: 30000, rate: null, start: '2026-10-01', months: 6, remark: '',
      contract_imgs: [makeContractImg('机构合作合同', 'rose')],
      status: 'REJECTED', created_at: '2026-10-29 09:40', reviewed_at: '2026-11-02 10:15', reviewer: '演示审核',
      reject_reason: '合同盖章页缺失，请补充后重新提交。', order_id: '', receipts: [], settled: 0
    },
    // 待结算：审核通过，机构尚未回款
    {
      id: 'ORGREQ-20261103-003', org: '复旦大学类脑智能研究院', contract_no: 'LL-2026-1103-02',
      amount: 80000, rate: 18, start: '2026-11-03', months: 12, remark: '首笔款项按合同约定 30 日内到账',
      contract_imgs: [makeContractImg('机构合作合同', 'red'), makeContractImg('付款计划附件', 'red')],
      status: 'APPROVED', created_at: '2026-11-01 10:05', reviewed_at: '2026-11-03 09:30', reviewer: '演示审核',
      reject_reason: '', order_id: 'ORG-20261103-001', receipts: [], settled: 0
    },
    // 待结算：部分回款、已回款部分已结算
    {
      id: 'ORGREQ-20260928-004', org: '上海交通大学医学院', contract_no: 'LL-2026-0928-05',
      amount: 60000, rate: 15, start: '2026-09-28', months: 12, remark: '分三期回款',
      contract_imgs: [makeContractImg('机构合作合同', 'red')],
      status: 'APPROVED', created_at: '2026-09-28 09:10', reviewed_at: '2026-09-28 15:40', reviewer: '演示审核',
      reject_reason: '', order_id: 'ORG-20260928-002',
      receipts: [
        { date: '2026-10-08', amount: 24000, voucher: 'BCM202610080011' },
        { date: '2026-11-04', amount: 18000, voucher: 'BCM202611040032' }
      ], settled: 3600,
      settle_records: [{ date: '2026-10-20', amount: 3600 }]
    },
    // 已结算：全额回款且佣金已结清
    {
      id: 'ORGREQ-20260815-005', org: '浙江大学计算机学院', contract_no: 'LL-2026-0815-03',
      amount: 100000, rate: 20, start: '2026-08-15', months: 12, remark: '',
      contract_imgs: [makeContractImg('机构合作合同', 'red'), makeContractImg('验收单', 'red')],
      status: 'APPROVED', created_at: '2026-08-15 11:20', reviewer: '演示审核', reviewed_at: '2026-08-15 16:05',
      reject_reason: '', order_id: 'ORG-20260815-003',
      receipts: [
        { date: '2026-08-20', amount: 40000, voucher: 'BCM202608200007' },
        { date: '2026-10-12', amount: 60000, voucher: 'BCM202610120019' }
      ], settled: 20000,
      settle_records: [{ date: '2026-09-02', amount: 8000 }, { date: '2026-10-20', amount: 12000 }]
    }
  ]
}

function saveOrgReqs(list) {
  ORG_REQS = list;
  try { window.localStorage.setItem(ORG_LS_KEY, JSON.stringify(list)); } catch (e) {}
  return list;
}

function loadOrgReqs() {
  if (ORG_REQS) return ORG_REQS;
  try {
    var raw = window.localStorage.getItem(ORG_LS_KEY);
    if (raw) {
      var list = JSON.parse(raw);
      if (Array.isArray(list)) { ORG_REQS = list; return ORG_REQS; }
    }
  } catch (e) {}
  return saveOrgReqs(seedOrgReqs());
}

function nextOrgReqId() {
  var d = new Date(), z = function(n) { return (n < 10 ? '0' : '') + n; };
  var day = '' + d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate());
  var n = loadOrgReqs().filter(function(r) { return (r.id || '').indexOf('ORGREQ-' + day) === 0; }).length + 1;
  return 'ORGREQ-' + day + '-' + ('000' + n).slice(-3);
}

function nextOrgOrderNo() {
  var d = new Date(), z = function(n) { return (n < 10 ? '0' : '') + n; };
  var day = '' + d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate());
  var n = ORDERS.filter(function(o) { return (o.no || '').indexOf('ORG-') === 0; }).length + 1;
  return 'ORG-' + day + '-' + ('000' + n).slice(-3);
}

// 把本地已通过的申请补齐为订单（幂等）
function hydrateOrgOrders() {
  loadOrgReqs().forEach(function(r) {
    if (r.status !== 'APPROVED' || !r.order_id) return;
    if (ORDERS.some(function(o) { return o.no === r.order_id; })) return;
    ORDERS.unshift({
      no: r.order_id, time: r.start, name: '机构合同（回款结算）', kind: 'orgc', months: r.months,
      paid: r.amount, rate: r.rate, org: r.org, contract_no: r.contract_no, refund: 0, settled: round2(r.settled || 0),
      receipts: (r.receipts || []).slice()
    });
  });
}

var SETTLE = [
  { batch: 'SETTLE-202611-004', kind: 'ORG', org: '上海交通大学医学院', order_id: 'ORG-20260928-002', received: 24000, source: '线下结算', status: '已结算', time: '2026-11-04 16:20', gross: 3600, offset: 0, note: '' },
  { batch: 'SETTLE-202611-002', kind: 'ORG', org: '上海交通大学医学院', order_id: 'ORG-20260928-002', received: 2000, source: '录入时已发放', status: '已发放', time: '2026-11-02 10:00', gross: 200, offset: 0, note: '第 1 期佣金于录入前线下发放，不可撤销' },
  { batch: 'SETTLE-202611-001', kind: 'USER', count: 5, source: '线下结算', status: '已结算', time: '2026-11-01 11:30', gross: 2400, offset: 0, note: '建行对公转账流水尾号 3321' },
  { batch: 'SETTLE-202610-008', kind: 'USER', count: 3, source: '线下结算', status: '已结算', time: '2026-10-28 15:00', gross: 1900, offset: 0, note: '招行对公转账流水尾号 8892，款项已结清' },
  { batch: 'SETTLE-202610-021', kind: 'ORG', org: '复旦大学类脑智能研究院', order_id: 'ORG-20261103-001', received: 40000, source: '线下结算', status: '已结算', time: '2026-10-21 14:05', gross: 6000, offset: 0, note: '' },
  { batch: 'SETTLE-202610-014', kind: 'USER', count: 6, source: '线下结算', status: '已结算', time: '2026-10-14 10:20', gross: 3200, offset: 100, note: '' },
  { batch: 'SETTLE-202609-006', kind: 'ORG', org: '浙江大学计算机学院', order_id: 'ORG-20260815-003', received: 36000, source: '线下结算', status: '已结算', time: '2026-09-06 16:40', gross: 5400, offset: 0, note: '招行对公转账流水尾号 6618' },
  { batch: 'SETTLE-202608-003', kind: 'USER', count: 4, source: '线下结算', status: '已结算', time: '2026-08-03 09:50', gross: 3000, offset: 0, note: '' }
];

function fmt(n) { return Number(n).toLocaleString('en-US'); }
function fmt2(n) { return Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function round2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }
function addMonthsDate(dateStr, m, extraDays) {
  var p = dateStr.slice(0, 10).split('-');
  return new Date(Date.UTC(+p[0], +p[1] - 1 + m, +p[2] + extraDays)).toISOString().slice(0, 10);
}

// 以订单为维度核算：月卡/加油包一期，年卡 12 期按服务月解冻；机构合同按实际回款逐笔释放佣金
// 退款扣回顺序：先扣退款时尚未解冻的期次（从最后一期往前），再扣已解冻但未结算的期次；已结算打款部分计入待抵扣
// 机构合同·回款驱动：财务确认到账后，按到账金额 × 约定比例释放佣金，累计封顶佣金池
function calcReceiptOrder(o) {
  var pool = round2(o.paid * o.rate / 100);
  var list = (o.receipts || []).slice().sort(function(a, b) { return (a.date || '').localeCompare(b.date || ''); });
  var used = 0, received = 0, ins = [];
  list.forEach(function(r, i) {
    var amt = round2(r.amount * o.rate / 100);
    var left = round2(pool - used);
    if (amt > left) amt = left;
    if (amt < 0) amt = 0;
    used = round2(used + amt);
    received = round2(received + r.amount);
    ins.push({ k: i + 1, orig: amt, amt: amt, unlock: r.date, done: true, sAmt: 0, date: r.date, payAmt: r.amount, voucher: r.voucher || '' });
  });
  var settled = round2(o.settled || 0);
  return {
    o: o, total0: pool, eff: pool, deduct: 0, cut: 0, short: 0, ins: ins,
    unlocked: used, settled: settled, settleable: round2(used - settled),
    frozen: round2(pool - used), doneCnt: ins.length, n: ins.length,
    full: false, part: false, receiptMode: true,
    received: received, unpaid: round2(Math.max(0, o.paid - received))
  };
}

function calcOrder(o) {
  if (o.kind === 'orgc') return calcReceiptOrder(o);
  var pts = function(amt) { return round2(amt * o.rate / 100); };
  var total0 = pts(o.paid), eff = pts(o.paid - o.refund), deduct = round2(total0 - eff);
  var n = o.kind === 'year' ? 12 : (o.kind === 'org' ? (o.months || 12) : 1), ins = [], k, i;
  var baseOrig = n === 1 ? total0 : round2(total0 / n);
  for (k = 1; k <= n; k++) {
    var origAmt = n === 1 ? total0 : (k < n ? baseOrig : round2(total0 - baseOrig * (n - 1)));
    var ud = addMonthsDate(o.time, k, 7);
    ins.push({ k: k, orig: origAmt, amt: origAmt, cut: 0, unlock: ud, done: ud <= REF_DATE, sAmt: 0 });
  }
  // 已打款核销发生在退款之前：先已解冻期次，再提前支付的未解冻期次（按原金额分配）
  var paidTotal = round2((o.settled || 0) + (o.prepaid || 0));
  var leftS = paidTotal;
  for (k = 0; k < n && leftS > 0; k++) {
    if (ins[k].done && ins[k].amt > 0) {
      var sa = Math.min(leftS, ins[k].amt);
      ins[k].sAmt = round2(sa);
      leftS = round2(leftS - sa);
    }
  }
  for (k = 0; k < n && leftS > 0; k++) {
    if (!ins[k].done && ins[k].amt > 0) {
      var sb = Math.min(leftS, ins[k].amt);
      ins[k].sAmt = round2(sb);
      leftS = round2(leftS - sb);
    }
  }
  // 退款扣回三步：① 冻结中的期次（从最后一期往前）→ ② 可结算的期次（从最近解冻的往前）→ ③ 已结算的扣不回，差额计入「待抵扣」
  // 被扣空的期次变为「退款扣除」；只被扣一部分的期次，状态不变，金额变少
  var left = deduct, room, take;
  for (i = n - 1; i >= 0 && left > 0; i--) {
    if (!ins[i].done) {
      room = round2(ins[i].amt - ins[i].sAmt - ins[i].cut);
      if (room > 0) { take = Math.min(left, room); ins[i].cut = round2(ins[i].cut + take); left = round2(left - take); }
    }
  }
  for (i = n - 1; i >= 0 && left > 0; i--) {
    if (ins[i].done) {
      room = round2(ins[i].amt - ins[i].sAmt - ins[i].cut);
      if (room > 0) { take = Math.min(left, room); ins[i].cut = round2(ins[i].cut + take); left = round2(left - take); }
    }
  }
  var short = round2(Math.max(0, left));
  var settleable = 0, frozen = 0, settledAmt = 0, cutTotal = 0, unlocked = 0, doneCnt = 0;
  ins.forEach(function(x) {
    x.amt = round2(x.orig - x.cut);
    var unsettled = round2(x.amt - x.sAmt);
    settledAmt = round2(settledAmt + x.sAmt);
    cutTotal = round2(cutTotal + x.cut);
    if (x.done) { settleable = round2(settleable + unsettled); unlocked = round2(unlocked + x.amt); if (x.amt > 0) doneCnt++; }
    else frozen = round2(frozen + unsettled);
  });
  // 对账：可结算 + 冻结中 + 已结算 + 退款扣除 = 原推广币；有效推广币 = 可结算 + 冻结中 + 已结算 − 待抵扣
  return { o: o, total0: total0, eff: eff, deduct: deduct, cut: cutTotal, short: short, ins: ins,
           unlocked: unlocked, settled: settledAmt, paid: paidTotal, settleable: settleable,
           frozen: frozen, doneCnt: doneCnt, n: n,
           full: o.refund >= o.paid, part: o.refund > 0 && o.refund < o.paid };
}

function getSum() {
  var u = 0, f = 0, st = 0, shortTotal = 0, offset = 0;
  // 只统计个人订单（机构合同订单走机构订单维度，单独核算，避免口径互串）
  ORDERS.filter(function(o) { return o.kind !== 'orgc'; }).forEach(function(o) {
    var c = calcOrder(o); u += c.settleable; f += c.frozen; st += c.settled; shortTotal += c.short;
  });
  SETTLE.forEach(function(r) { offset += (r.offset || 0); });
  u = round2(u); f = round2(f); st = round2(st); shortTotal = round2(shortTotal);
  var unrecovered = Math.max(0, round2(shortTotal - offset));
  return { total: Math.max(0, round2(u + f + st - shortTotal)), settleable: u, frozen: f, settled: st, unrecovered: unrecovered,
           payable: Math.max(0, round2(u - unrecovered)) };
}

var BADGE = {
  emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border border-amber-200',
  rose: 'bg-rose-50 text-rose-700 border border-rose-200'
};
function badge(t, c) { return '<span class="px-2 py-0.5 rounded-full text-xs font-semibold ' + BADGE[c] + '">' + t + '</span>'; }
function togOrder(no) { S.open[no] = !S.open[no]; pComm(); }

var PAGE_SIZE = 10;
function paged(list, page) {
  var size = S.pageSize || PAGE_SIZE;
  var total = Math.max(1, Math.ceil(list.length / size));
  var p = Math.min(Math.max(page || 1, 1), total);
  return { items: list.slice((p - 1) * size, p * size), total: total, page: p, count: list.length, size: size };
}
function setPagerSize(v, fnName) { S.pageSize = parseInt(v, 10) || PAGE_SIZE; window[fnName](1); }
function pagerHtml(info, fnName) {
  var base = 'px-3 py-1.5 rounded-full text-xs font-semibold transition-all ';
  var prev = info.page > 1
    ? '<button onclick="' + fnName + '(' + (info.page - 1) + ')" class="' + base + 'border border-surface-border bg-white text-slate-body hover:bg-surface-subtle">‹ 上一页</button>'
    : '<button disabled class="' + base + 'border border-surface-border bg-white text-slate-muted opacity-40 cursor-not-allowed">‹ 上一页</button>';
  var next = info.page < info.total
    ? '<button onclick="' + fnName + '(' + (info.page + 1) + ')" class="' + base + 'border border-surface-border bg-white text-slate-body hover:bg-surface-subtle">下一页 ›</button>'
    : '<button disabled class="' + base + 'border border-surface-border bg-white text-slate-muted opacity-40 cursor-not-allowed">下一页 ›</button>';
  var sizeSel = '<select onchange="setPagerSize(this.value, \'' + fnName + '\')" class="px-2 py-1.5 rounded-full border border-surface-border bg-white text-xs text-slate-body outline-none">'
    + '<option value="10"' + (info.size === 10 ? ' selected' : '') + '>10 条/页</option>'
    + '<option value="20"' + (info.size === 20 ? ' selected' : '') + '>20 条/页</option>'
    + '<option value="50"' + (info.size === 50 ? ' selected' : '') + '>50 条/页</option>'
    + '</select>';
  return '<div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-3 border-t border-surface-border-subtle text-xs text-slate-muted">'
    + '<span>共 ' + info.count + ' 条 · 第 ' + info.page + '/' + info.total + ' 页</span>'
    + '<div class="flex items-center space-x-1.5">' + sizeSel + prev + next + '</div>'
    + '</div>';
}
function goCustPage(n) { S.cp = n; pCust(); }
function goOrdPage(n) { S.op = n; pComm(); }
function goSettlePage(n) { S.sp = n; pComm(); }

// 个人订单：搜索（订单号 / 手机号 / 产品名 / 机构名称）+ 状态筛选
function stateOfCalc(c) {
  if (c.eff === 0) return 'REFUNDED';
  var valid = c.ins.filter(function(x) { return x.amt > 0; });
  var pending = valid.some(function(x) { return round2(x.amt - x.sAmt) > 0; });
  if (!pending) return 'SETTLED';
  // 只要有佣金已解冻（可以结算）即可结算，否则为冻结中
  return c.doneCnt > 0 ? 'SETTLEABLE' : 'FROZEN';
}
function ordStateOf(o) { return stateOfCalc(calcOrder(o)); }
function ordFilterActive() {
  return !!((S.ordQ || '').trim()) || !!(S.ordF && S.ordF !== 'all');
}
function ordFiltered() {
  var q = (S.ordQ || '').trim().toLowerCase(), f = S.ordF || 'all';
  var W = { SETTLEABLE: 0, FROZEN: 1, SETTLED: 2, REFUNDED: 3 };
  var all = ORDERS.filter(function(o) { return o.kind !== 'orgc'; });
  var list = all.filter(function(o) {
    if (f !== 'all' && ordStateOf(o) !== f) return false;
    if (q) {
      var hay = [o.name, o.no, o.ph, o.org].join(' ').toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  }).sort(function(a, b) {
    var wa = W[ordStateOf(a)], wb = W[ordStateOf(b)];
    if (wa !== wb) return wa - wb;
    return (b.time || '').localeCompare(a.time || '');
  });
  return { all: all, list: list };
}
function ordFilterBar() {
  var f = S.ordF || 'all';
  var opts = [['all', '全部状态'], ['SETTLEABLE', '可结算'], ['FROZEN', '冻结中'], ['SETTLED', '已结算'], ['REFUNDED', '已退款']];
  return '<div class="flex flex-wrap items-center gap-2.5">'
    + '<div class="relative w-full sm:w-64">'
      + '<i data-lucide="search" class="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2"></i>'
      + '<input type="text" value="' + esc(S.ordQ || '') + '" oninput="setOrdQuery(this.value)" placeholder="搜索订单号 / 手机号 / 产品名称..." class="w-full bg-surface-subtle text-slate-title text-xs rounded-full pl-8 pr-3 py-1.5 border border-surface-border focus:outline-none focus:border-brand-500">'
    + '</div>'
    + '<select onchange="setOrdFilter(this.value)" class="bg-surface-subtle border border-surface-border rounded-full px-3 py-1.5 text-xs text-slate-title font-medium focus:outline-none cursor-pointer">'
      + opts.map(function(o) { return '<option value="' + o[0] + '"' + (f === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('')
    + '</select>'
    + '<button id="ord-clear" type="button" onclick="clearOrdFilter()" class="text-xs font-bold text-brand-600 hover:text-brand-700 px-2 py-1' + (ordFilterActive() ? '' : ' hidden') + '">清除筛选</button>'
  + '</div>';
}
function ordListInner() {
  var d = ordFiltered();
  if (!d.all.length) return '<div class="py-10 text-center text-xs text-slate-muted">暂无个人订单</div>';
  if (!d.list.length) return '<div class="py-10 text-center text-xs text-slate-muted">没有匹配条件的订单</div>';
  var pg = paged(d.list, S.op);
  return ordersHtml(pg.items) + pagerHtml(pg, 'goOrdPage');
}
function setOrdQuery(v) { S.ordQ = v; S.op = 1; updateOrdList(); }
function setOrdFilter(v) { S.ordF = v; S.op = 1; updateOrdList(); }
function clearOrdFilter() { S.ordQ = ''; S.ordF = 'all'; S.op = 1; pComm(); }
function updateOrdList() {
  var el = $('ord-list'); if (el) el.innerHTML = ordListInner();
  var c = $('ord-clear');
  if (c) c.className = 'text-xs font-bold text-brand-600 hover:text-brand-700 px-2 py-1' + (ordFilterActive() ? '' : ' hidden');
  renderIcons();
}

function ordersHtml(items) {
  items = (items || ORDERS).filter(function(o) { return o.kind !== 'orgc'; });
  return items.map(calcOrder).map(function(c) {
    var o = c.o, st = stateOfCalc(c);
    var validN = c.ins.filter(function(x) { return x.amt > 0; }).length;
    // 佣金状态四态：冻结中 / 可结算 / 已结算 / 已退款
    var badges = st === 'REFUNDED' ? badge('已退款', 'rose')
      : st === 'SETTLED' ? badge('已结算', 'emerald')
      : st === 'SETTLEABLE' ? badge('可结算', 'emerald')
      : badge('冻结中', 'amber');
    var refundLine = o.refund > 0
      ? '<div class="text-xs mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1">'
        + '<span class="inline-flex items-center rounded-full bg-brand-100 px-2 py-0.5 font-semibold text-brand-700">退款</span>'
        + '<span class="text-slate-title">累计退款 ¥' + fmt2(o.refund) + '</span>'
        + '<span class="text-slate-muted">·</span>'
        + '<span class="text-rose-600">佣金扣减 ' + fmt2(c.deduct) + ' 推广币</span>'
        + '</div>'
      : '';
    var cell = function(label, val, color, sub) {
      return '<div class="rounded-xl bg-white border border-surface-border py-2 text-center"><div class="text-xs text-slate-muted">' + label + '</div><div class="font-bold tabular-nums ' + color + '">' + val + '</div>' + (sub ? '<div class="text-[11px] text-rose-600 mt-0.5">' + sub + '</div>' : '') + '</div>';
    };
    var cells = [
      cell('可结算', fmt2(c.settleable), 'text-emerald-600'),
      cell('冻结中', fmt2(c.frozen), 'text-amber-600'),
      cell('已结算', fmt2(c.settled), 'text-slate-title')
    ];
    var grid = '<div class="mt-3 grid grid-cols-2 ' + (cells.length > 3 ? 'sm:grid-cols-4' : 'sm:grid-cols-3') + ' gap-2">' + cells.join('') + '</div>';
    var shortNote = c.short > 0
      ? '<div class="mt-2 text-xs text-slate-muted"><span class="text-rose-600 font-semibold">待抵扣 ' + fmt2(c.short) + '</span>：该订单已结算金额超出退款后应得的推广币，超出部分将在下次结算时抵扣。</div>'
      : '';
    var extra = '';
    if (c.n === 1 && c.eff > 0) {
      var i0 = c.ins[0];
      extra = '<div class="mt-2 text-xs text-slate-muted">' + (i0.done ? '已于 ' + i0.unlock + ' 解冻' : '预计 ' + i0.unlock + ' 解冻') + '</div>';
    }
    if (c.n > 1) {
      var next = null;
      c.ins.forEach(function(x) { if (!next && !x.done && x.amt > 0 && x.sAmt === 0) next = x; });
      // 进度条四色：可结算 / 已结算 / 冻结中 / 退款扣除
      var seg = c.ins.map(function(x) {
        var cl;
        if (x.orig > 0 && x.amt === 0) cl = 'bg-rose-300';
        else if (x.sAmt > 0 && round2(x.amt - x.sAmt) <= 0) cl = 'bg-blue-500';
        else if (x.done) cl = 'bg-emerald-400';
        else cl = 'bg-amber-300';
        return '<div class="h-1.5 flex-1 rounded-full ' + cl + '"></div>';
      }).join('');
      var open = !!S.open[o.no];
      var rows = '';
      if (open) {
        var parts = [], i = 0, rowHtml = function(label, mid, amtTxt, amtCls, st2) {
          return '<div class="flex items-center justify-between gap-2 px-3 py-2"><span class="text-slate-body flex-none whitespace-nowrap">' + label + '</span><span class="text-slate-muted flex-1">' + mid + '</span><span class="font-bold tabular-nums ' + amtCls + '">' + amtTxt + '</span>' + st2 + '</div>';
        };
        while (i < c.ins.length) {
          var x = c.ins[i];
          if (x.orig > 0 && x.amt === 0) {
            // 连续被扣空的期次折叠成一行
            var j = i, sum = 0;
            while (j < c.ins.length && c.ins[j].orig > 0 && c.ins[j].amt === 0) { sum = round2(sum + c.ins[j].orig); j++; }
            var cnt = j - i;
            parts.push(rowHtml(cnt > 1 ? '第 ' + c.ins[i].k + '–' + c.ins[j - 1].k + ' 期' : '第 ' + x.k + ' 期', cnt > 1 ? '共 ' + cnt + ' 期' : '解冻日 ' + x.unlock, fmt2(sum), 'text-slate-muted line-through', badge('退款扣除', 'rose')));
            i = j;
          } else {
            var note = x.cut > 0
              ? '<span class="text-slate-muted font-normal">（已扣 ' + fmt2(x.cut) + '）</span>'
              : (x.sAmt > 0 && round2(x.amt - x.sAmt) > 0 ? '<span class="text-slate-muted font-normal">（已结算 ' + fmt2(x.sAmt) + '）</span>' : '');
            var st3 = (!x.done && x.sAmt > 0) ? badge('已预支', 'emerald')
              : (x.sAmt > 0 && round2(x.amt - x.sAmt) <= 0 ? badge('已结算', 'emerald')
              : (x.done ? badge('可结算', 'emerald') : badge('冻结中', 'amber')));
            parts.push(rowHtml('第 ' + x.k + ' 期', '解冻日 ' + x.unlock, '+' + fmt2(x.amt) + note, 'text-slate-title', st3));
            i++;
          }
        }
        rows = '<div class="mt-2 rounded-xl bg-white border border-surface-border divide-y divide-surface-border text-xs">' + parts.join('') + '</div>';
      }
      var summary = validN === 0
        ? '该订单已退款，全部期次已扣除'
        : '已解冻 ' + c.doneCnt + '/' + validN + ' 期' + (next ? ' · 下期 ' + next.unlock + ' 解冻 +' + fmt2(next.amt) : '');
      extra = '<div class="mt-3"><div class="flex gap-1">' + seg + '</div>' +
        '<div class="mt-2 flex items-center justify-between gap-2 text-xs text-slate-muted"><span>' + summary + '</span>' +
        '<button onclick="togOrder(\'' + o.no + '\')" class="font-bold text-brand-600 hover:underline flex-none">' + (open ? '收起分期明细' : '查看分期明细') + '</button></div>' + rows + '</div>';
    }
    return '<div class="p-4 rounded-2xl bg-surface-subtle border border-surface-border hover:border-brand-200 transition-all">' +
      '<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">' +
        '<div class="min-w-0">' +
          '<div class="flex flex-wrap items-center gap-2"><span class="font-bold text-sm text-slate-title">' + o.name + '</span>' + badges + '</div>' +
          '<div class="text-xs text-slate-body mt-1 flex items-center space-x-3"><span>订单实付: <b class="text-slate-title">¥' + fmt2(o.paid) + '</b></span><span>分成比例: <b class="text-brand-600">' + o.rate + '%</b></span></div>' +
          '<div class="text-xs text-slate-muted mt-0.5">' + o.no + ' · ' + (o.kind === 'org' ? '服务起始 ' : '') + o.time + '</div>' +
          '<div class="text-xs text-slate-muted mt-0.5">' + (o.kind === 'org' ? '机构名称' : '下单用户') + ' <b class="text-slate-body font-normal">' + (o.kind === 'org' ? (o.org || '-') : (o.ph || '-')) + '</b></div>' + refundLine +
        '</div>' +
        '<div class="sm:text-right flex-none"><div class="text-xs text-slate-muted">本单有效推广币</div>' +
          '<div class="font-extrabold text-xl tabular-nums ' + (c.eff > 0 ? 'text-brand-600' : 'text-slate-muted') + '">' + fmt2(c.eff) + '</div>' +
          (c.deduct > 0 ? '<div class="text-xs text-slate-muted">原 <span class="line-through">' + fmt2(c.total0) + '</span> 推广币</div>' : (c.n > 1 ? '<div class="text-xs text-slate-muted">' + (o.kind === 'org' ? '按 ' + c.n + ' 个月服务期分期' : '按 12 个月分期发放') + '</div>' : '')) +
        '</div>' +
      '</div>' + grid + shortNote + extra + '</div>';
  }).join('');
}

// ==================== 机构订单：列表 / 录入 / 演示审核 ====================
// 四态：待审核 / 已驳回 / 待结算 / 已结算
function orgReqState(r) {
  if (r.status === 'PENDING') return 'PENDING';
  if (r.status === 'REJECTED') return 'REJECTED';
  var pool = round2(r.amount * r.rate / 100);
  var got = (r.receipts || []).reduce(function(a, x) { return round2(a + x.amount); }, 0);
  var settled = round2(r.settled || 0);
  if (pool > 0 && got >= r.amount && settled >= pool) return 'SETTLED';
  return 'PENDING_SETTLE';
}

function orgReqBadge(state) {
  if (state === 'SETTLED') return badge('已结算', 'emerald');
  if (state === 'PENDING_SETTLE') return badge('待结算', 'amber');
  if (state === 'REJECTED') return badge('已驳回', 'rose');
  return badge('待审核', 'amber');
}

// 机构订单核算口径（合伙人端）
// 佣金池 = 合同金额 × 比例；已释放 = min(佣金池, 累计回款 × 比例)；待结算 = 已释放 − 已结算
// 合伙人端只展示：佣金池 / 已结算 / 待结算（已释放 = 已结算 + 待结算，不单独展示，也没有「未释放」「冻结」概念）
function orgNums(r) {
  var rate = Number(r.rate) || 0;
  var pool = round2(r.amount * rate / 100);
  var got = (r.receipts || []).reduce(function(a, x) { return round2(a + x.amount); }, 0);
  var released = round2(Math.min(pool, got * rate / 100));
  var settled = round2(r.settled || 0);
  var due = Math.max(0, round2(released - settled));
  var pct = r.amount > 0 ? Math.min(100, Math.floor(got / r.amount * 100)) : 0;
  return { pool: pool, got: got, released: released, settled: settled, due: due, pct: pct };
}

function orgReqCard(r) {
  var st = orgReqState(r);
  var approved = r.status === 'APPROVED';

  var head = '<div class="flex items-start justify-between gap-2">'
    + '<div class="min-w-0 flex flex-wrap items-center gap-2"><span class="font-bold text-sm text-slate-title">' + esc(r.org) + '</span>' + orgReqBadge(st) + '</div>'
    + '<button type="button" onclick="showOrgDetail(\'' + r.id + '\')" class="flex-none text-xs font-bold text-brand-600 hover:underline">查看详情 ›</button>'
    + '</div>';

  var meta = '<div class="mt-1.5 text-xs text-slate-muted">合同金额 <b class="text-slate-title tabular-nums">¥' + fmt(r.amount) + '</b>'
    + (approved ? ' · 分成比例 <b class="text-slate-title">' + r.rate + '%</b>' : ' · 服务周期 ' + svcRange(r))
    + '</div>'
    + (approved ? '' : '<div class="mt-0.5 text-xs text-slate-muted">提交时间 ' + esc(r.created_at) + '</div>');

  var body = '';
  if (r.status === 'PENDING') {
    body = '';
  } else if (r.status === 'REJECTED') {
    body = '<div class="mt-3 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5">'
      + '<div class="flex-1 min-w-0 text-xs leading-relaxed text-rose-700"><b>驳回原因：</b>' + esc(r.reject_reason || '—') + '</div>'
      + '<button type="button" onclick="showOrgEntryModal(\'' + r.id + '\')" class="flex-shrink-0 px-2.5 py-1 rounded-full border border-rose-300 bg-white text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-all">重新提交</button>'
      + '</div>';
  } else {
    var n = orgNums(r);
    var done = st === 'SETTLED';
    var cell = function(label, val, cls, vcls) {
      return '<div class="rounded-xl border px-3 py-2.5 ' + cls + '">'
        + '<div class="text-xs text-slate-muted">' + label + '</div>'
        + '<div class="mt-0.5 text-base font-extrabold tabular-nums break-all ' + vcls + '">' + fmt2(val) + '</div>'
        + '</div>';
    };
    body = '<div class="mt-3 grid grid-cols-3 gap-2">'
        + cell('总推广币', n.pool, 'bg-white border-surface-border', 'text-slate-title')
        + cell('已结算', n.settled, 'bg-white border-surface-border', 'text-slate-title')
        + cell('待结算', n.due, 'bg-white border-surface-border', 'text-slate-title')
      + '</div>'
      + '<div class="mt-3">'
        + '<span class="text-xs text-slate-muted">订单号 ' + esc(r.order_id) + '</span>'
      + '</div>';
  }

  return '<div class="p-4 rounded-2xl bg-surface-subtle border border-surface-border">' + head + meta + body + '</div>';
}

function closeOrgDetail() {
  S.orgDetail = '';
  var el = $('org-detail'); if (el) el.remove();
}

function showOrgDetail(id) {
  var r = loadOrgReqs().filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单'); return; }
  var old = $('org-detail'); var keep = old ? old.querySelector('[data-scroll]') : null;
  var keepTop = keep ? keep.scrollTop : 0;
  if (old) old.remove();
  S.orgDetail = id;

  var st = orgReqState(r);
  var approved = r.status === 'APPROVED';
  var row = function(k, v) {
    return '<div class="flex items-start justify-between gap-4 py-2"><span class="text-slate-muted flex-none">' + k + '</span><span class="text-slate-title text-right break-all">' + v + '</span></div>';
  };
  var sec = function(title, inner, extra) {
    return '<section><div class="flex items-center justify-between mb-2"><h4 class="text-xs font-bold text-slate-title">' + title + '</h4>' + (extra || '') + '</div>' + inner + '</section>';
  };
  var box = function(inner) { return '<div class="rounded-xl bg-surface-subtle border border-surface-border px-3 text-xs divide-y divide-surface-border">' + inner + '</div>'; };

  var info = row('机构名称', esc(r.org))
    + row('订单号', '<span class="font-mono">' + esc(approved ? r.order_id : r.id) + '</span>')
    + row('提交时间', esc(r.created_at))
    + (r.remark ? row('备注', esc(r.remark)) : '');

  var imgs = (r.contract_imgs || []).map(function(src) {
    return '<button type="button" onclick="showOrgImg(this.querySelector(\'img\').src)" class="relative w-16 h-[84px] rounded-lg overflow-hidden border border-surface-border bg-white flex-none group">'
      + '<img src="' + src + '" alt="合同图片" class="w-full h-full object-cover">'
      + '<span class="absolute inset-0 bg-slate-title/0 group-hover:bg-slate-title/20 transition-all"></span></button>';
  }).join('');

  var html = '';
  if (r.status === 'REJECTED') {
    html += '<div class="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-xs leading-relaxed text-rose-700">'
      + '<div><b>驳回原因：</b>' + esc(r.reject_reason || '—') + '</div>'
      + (r.reviewed_at ? '<div class="mt-1 text-rose-600/80">驳回时间 ' + esc(r.reviewed_at) + '</div>' : '')
      + '<div class="mt-2"><button type="button" onclick="closeOrgDetail();showOrgEntryModal(\'' + r.id + '\')" class="px-2.5 py-1 rounded-full border border-rose-300 bg-white text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-all">修改后重新提交</button></div>'
      + '</div>';
  } else if (r.status === 'PENDING') {
    html += '<div class="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs text-amber-700">等待运营审核，通过后核定分成比例并生成订单。</div>';
  }

  var contract = row('合同编号', '<span class="font-mono">' + esc(r.contract_no) + '</span>')
    + row('签约日期', esc(r.start))
    + row('服务周期', svcRange(r));
  var srBox = '';
  if (approved) {
    var n = orgNums(r);
    contract += row('合同金额', '¥' + fmt2(r.amount))
      + row('分成比例', r.rate + '%')
      + row('总推广币', '<b class="tabular-nums">' + fmt2(n.pool) + '</b>')
      + row('已结算', '<b class="tabular-nums">' + fmt2(n.settled) + '</b>')
      + row('待结算', '<b class="tabular-nums ' + (n.due > 0 ? 'text-amber-700' : '') + '">' + fmt2(n.due) + '</b>');

    var srs = (r.settle_records || []).slice().sort(function(a, b) { return (b.date || '').localeCompare(a.date || ''); });
    var srHtml = srs.length ? srs.map(function(x) {
      return '<div class="flex items-center justify-between gap-2 py-2">'
        + '<span class="text-slate-body">' + esc(x.date) + '</span>'
        + '<span class="font-bold tabular-nums text-emerald-700">已结算 ' + fmt2(x.amount) + '</span>'
        + '</div>';
    }).join('') : '<div class="py-4 text-center text-slate-muted">暂无结算记录</div>';
    srBox = sec('结算记录', box(srHtml));
  } else {
    contract += row('合同金额', '¥' + fmt2(r.amount));
  }
  if (imgs) contract += '<div class="px-3 py-2.5 flex gap-2 flex-wrap">' + imgs + '</div>';

  html += sec('基本信息', box(info));
  html += sec('合同信息', box(contract));
  html += srBox;

  var m = document.createElement('div');
  m.id = 'org-detail';
  m.className = 'fixed inset-0 z-50 bg-slate-title/50 backdrop-blur-xs flex items-end sm:items-stretch sm:justify-end animate-fade-in';
  m.onclick = function(e) { if (e.target === m) closeOrgDetail(); };
  m.innerHTML = '<div class="bg-surface-card w-full sm:w-[440px] max-h-[88vh] sm:max-h-none sm:h-full rounded-t-[24px] sm:rounded-none sm:rounded-l-[24px] border border-surface-border shadow-dropdown flex flex-col">'
    + '<div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-surface-border">'
      + '<div class="min-w-0"><div class="text-xs text-slate-muted">机构订单详情</div>'
      + '<div class="mt-1 flex flex-wrap items-center gap-2"><span class="text-base font-bold text-slate-title">' + esc(r.org) + '</span>' + orgReqBadge(st) + '</div></div>'
      + '<button type="button" onclick="closeOrgDetail()" class="w-8 h-8 rounded-full hover:bg-surface-subtle text-slate-muted flex items-center justify-center flex-none"><i data-lucide="x" class="w-4 h-4"></i></button>'
    + '</div>'
    + '<div data-scroll class="px-5 py-4 overflow-y-auto space-y-5 text-xs">' + html + '</div>'
    + '</div>';
  document.body.appendChild(m);
  var sc = m.querySelector('[data-scroll]'); if (sc) sc.scrollTop = keepTop;
  renderIcons();
}

function closeOrgSettleModal() {
  var el = $('org-settle-modal'); if (el) el.remove();
}

// 演示：正式版由运营在后台填写结算金额，合伙人端只展示结果
function showOrgSettleModal(id) {
  var old = $('org-settle-modal'); if (old) old.remove();
  var r = loadOrgReqs().filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单'); return; }
  var n = orgNums(r);
  var m = document.createElement('div');
  m.id = 'org-settle-modal';
  m.className = 'fixed inset-0 bg-slate-title/50 backdrop-blur-xs flex items-center justify-center p-4 z-[55] animate-fade-in';
  m.innerHTML = [
    '<div class="bg-surface-card rounded-[24px] border border-surface-border p-6 max-w-sm w-full shadow-dropdown">',
      '<h3 class="text-base font-bold text-slate-title">登记结算</h3>',
      '<p class="text-xs text-slate-body mt-1.5">演示用。正式版由运营在后台完成打款后填写结算金额，合伙人端同步展示。</p>',
      '<div class="mt-4 space-y-3">',
        '<label class="block"><span class="block text-xs font-semibold text-slate-body mb-1">结算日期 <span class="text-rose-500">*</span></span>',
          '<input id="st_date" type="date" value="' + REF_DATE + '" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title focus:outline-none focus:border-brand-500 focus:bg-white transition-all"></label>',
        '<label class="block"><span class="block text-xs font-semibold text-slate-body mb-1">结算金额 <span class="text-rose-500">*</span></span>',
          '<input id="st_amount" type="number" min="0.01" step="0.01" placeholder="如 1000" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all">',
          '<span class="block text-xs text-slate-muted mt-1">当前待结算 ¥' + fmt2(n.due) + '</span></label>',
      '</div>',
      '<div class="mt-5 flex space-x-2">',
        '<button type="button" onclick="closeOrgSettleModal()" class="flex-1 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-slate-body hover:bg-surface-subtle transition-all">取消</button>',
        '<button type="button" onclick="confirmOrgSettle(\'' + id + '\')" class="flex-1 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-sm shadow-brand-500/25 transition-all">确认登记</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(m);
}

function confirmOrgSettle(id) {
  var list = loadOrgReqs();
  var r = list.filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单'); return; }
  var date = ($('st_date') || {}).value || '';
  var amt = Number(($('st_amount') || {}).value || 0);
  if (!date) { toast('请选择结算日期'); return; }
  if (!(amt > 0)) { toast('请填写结算金额'); return; }
  var n = orgNums(r);
  if (amt > n.due) { toast('超出当前待结算 ¥' + fmt2(n.due)); return; }
  r.settle_records = (r.settle_records || []).concat([{ date: date, amount: amt }]);
  r.settled = round2((r.settled || 0) + amt);
  ORDERS.forEach(function(o) { if (o.no === r.order_id) o.settled = r.settled; });
  saveOrgReqs(list);
  closeOrgSettleModal();
  S.tab = 'org';
  pComm();
  if (S.orgDetail) showOrgDetail(S.orgDetail);
  toast('演示：已登记结算 ¥' + fmt2(amt));
}

function safeOrgReqHtml() {
  try { return orgReqHtml(); } catch (e) {
    console.error(e);
    return '<div class="rounded-xl border border-rose-200 bg-rose-50 px-3 py-3 text-xs text-rose-700">机构订单加载失败：' + esc(e && e.message) + '</div>';
  }
}

// 搜索（机构名称 / 合同编号 / 订单号 / 申请编号）+ 状态筛选；排序：待审核 → 已驳回 → 待结算 → 已结算，同状态按提交时间倒序
function orgFilterActive() {
  return !!((S.orgQ || '').trim()) || !!(S.orgF && S.orgF !== 'all');
}

function orgFiltered() {
  var q = (S.orgQ || '').trim().toLowerCase(), f = S.orgF || 'all';
  var W = { PENDING: 0, REJECTED: 1, PENDING_SETTLE: 2, SETTLED: 3 };
  var all = loadOrgReqs();
  var list = all.filter(function(r) {
    if (f !== 'all' && orgReqState(r) !== f) return false;
    if (q) {
      var hay = [r.org, r.contract_no, r.order_id, r.id].join(' ').toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  }).sort(function(a, b) {
    var wa = W[orgReqState(a)], wb = W[orgReqState(b)];
    if (wa !== wb) return wa - wb;
    return (b.created_at || '').localeCompare(a.created_at || '');
  });
  return { all: all, list: list };
}

function orgListInner() {
  var d = orgFiltered();
  if (!d.all.length) {
    return '<div class="py-10 text-center">'
      + '<div class="w-12 h-12 mx-auto rounded-2xl bg-white border border-surface-border flex items-center justify-center text-slate-muted"><i data-lucide="building-2" class="w-6 h-6"></i></div>'
      + '<div class="text-sm font-bold text-slate-title mt-3">暂无机构订单申请</div>'
      + '<div class="text-xs text-slate-muted mt-1">点击右上角「录入机构订单」提交合同信息，由运营审核。</div>'
      + '</div>';
  }
  if (!d.list.length) {
    return '<div class="py-10 text-center text-xs text-slate-muted">没有匹配条件的机构订单</div>';
  }
  return '<div class="text-xs text-slate-muted">共 <b class="text-slate-title">' + d.list.length + '</b> 条合同'
    + (orgFilterActive() ? '（全部 ' + d.all.length + ' 条）' : '') + '</div>'
    + '<div class="mt-3 space-y-3">' + d.list.map(orgReqCard).join('') + '</div>';
}

// 搜索输入只刷新列表区域，避免整页重渲染导致输入框失焦
function updateOrgList() {
  var el = $('org-list'); if (el) el.innerHTML = orgListInner();
  var c = $('org-clear');
  if (c) c.className = 'text-xs font-bold text-brand-600 hover:text-brand-700 px-2 py-1' + (orgFilterActive() ? '' : ' hidden');
  renderIcons();
}
function setOrgQuery(v) { S.orgQ = v; updateOrgList(); }
function setOrgFilter(v) { S.orgF = v; pComm(); }
function clearOrgFilter() { S.orgQ = ''; S.orgF = 'all'; pComm(); }

function orgReqHtml() {
  var all = loadOrgReqs();
  var opts = [
    ['all', '全部状态'], ['PENDING', '待审核'], ['REJECTED', '已驳回'],
    ['PENDING_SETTLE', '待结算'], ['SETTLED', '已结算']
  ];
  var cur = S.orgF || 'all';
  return '<div class="flex flex-wrap items-center justify-between gap-3">'
    + '<div class="flex flex-wrap items-center gap-2.5">'
      + '<div class="relative w-full sm:w-64">'
        + '<i data-lucide="search" class="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2"></i>'
        + '<input type="text" value="' + esc(S.orgQ || '') + '" oninput="setOrgQuery(this.value)" placeholder="搜索机构名称 / 合同编号 / 订单号..." class="w-full bg-surface-subtle text-slate-title text-xs rounded-full pl-8 pr-3 py-1.5 border border-surface-border focus:outline-none focus:border-brand-500">'
      + '</div>'
      + '<select onchange="setOrgFilter(this.value)" class="bg-surface-subtle border border-surface-border rounded-full px-3 py-1.5 text-xs text-slate-title font-medium focus:outline-none cursor-pointer">'
        + opts.map(function(o) { return '<option value="' + o[0] + '"' + (cur === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('')
      + '</select>'
      + '<button id="org-clear" type="button" onclick="clearOrgFilter()" class="text-xs font-bold text-brand-600 hover:text-brand-700 px-2 py-1' + (orgFilterActive() ? '' : ' hidden') + '">清除筛选</button>'
    + '</div>'
    + '<button type="button" onclick="showOrgEntryModal()" class="px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-sm shadow-brand-500/25 flex items-center space-x-1.5 transition-all">'
      + '<i data-lucide="plus" class="w-4 h-4"></i><span>录入机构订单</span>'
    + '</button>'
    + '</div>'
    + '<div id="org-list" class="mt-4">' + orgListInner() + '</div>';
}

function showOrgImg(src) {
  var old = $('org-img-lightbox'); if (old) old.remove();
  var m = document.createElement('div');
  m.id = 'org-img-lightbox';
  m.className = 'fixed inset-0 z-[60] bg-slate-title/80 flex items-center justify-center p-4 animate-fade-in';
  m.onclick = function() { m.remove(); };
  m.innerHTML = '<img src="' + src + '" alt="合同图片" class="max-h-[85vh] max-w-full rounded-xl shadow-2xl bg-white">';
  document.body.appendChild(m);
}

function closeOrgEntryModal() {
  var el = $('org-entry-modal'); if (el) el.remove();
}

function renderOrgImgs() {
  var el = $('oe_imgs'); if (!el) return;
  var html = ORG_IMGS.map(function(src, i) {
    return '<div class="relative rounded-xl overflow-hidden border border-surface-border bg-white h-[92px]">'
      + '<img src="' + src + '" alt="合同图片 ' + (i + 1) + '" class="w-full h-full object-cover">'
      + '<button type="button" onclick="removeOrgImg(' + i + ')" class="absolute top-1 right-1 w-6 h-6 rounded-full bg-slate-title/70 text-white flex items-center justify-center hover:bg-rose-600 transition-all"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>'
      + '</div>';
  }).join('');
  el.innerHTML = html;
  renderIcons();
}

function removeOrgImg(i) {
  ORG_IMGS.splice(i, 1);
  renderOrgImgs();
}

function readOrgImages(files) {
  var list = Array.prototype.slice.call(files || []);
  var room = 3 - ORG_IMGS.length;
  if (room <= 0) { toast('最多上传 3 张合同图片'); return; }
  if (list.length > room) toast('最多上传 3 张合同图片');
  list.slice(0, room).forEach(function(file) {
    if (!/^image\//.test(file.type)) { toast('仅支持图片文件'); return; }
    if (file.size > 10 * 1024 * 1024) { toast('单张图片需小于 10MB'); return; }
    var fr = new FileReader();
    fr.onload = function() {
      var img = new Image();
      img.onload = function() {
        var w = img.width, h = img.height, max = 1200;
        var scale = Math.min(1, max / Math.max(w, h));
        var cw = Math.round(w * scale), ch = Math.round(h * scale);
        var cv = document.createElement('canvas');
        cv.width = cw; cv.height = ch;
        var ctx = cv.getContext('2d');
        ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, cw, ch);
        ctx.drawImage(img, 0, 0, cw, ch);
        if (ORG_IMGS.length < 3) {
          ORG_IMGS.push(cv.toDataURL('image/jpeg', 0.72));
          renderOrgImgs();
        }
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

function showOrgEntryModal(prefillId) {
  var old = $('org-entry-modal'); if (old) old.remove();
  var src = prefillId ? loadOrgReqs().filter(function(r) { return r.id === prefillId; })[0] : null;
  ORG_IMGS = src ? (src.contract_imgs || []).slice(0, 3) : [];

  var fld = function(label, id, type, ph, val, extra, hint) {
    return '<label class="block">'
      + '<span class="block text-xs font-semibold text-slate-body mb-1">' + label + ' <span class="text-rose-500">*</span></span>'
      + '<input id="' + id + '" type="' + type + '" placeholder="' + ph + '" value="' + (val || '') + '" ' + (extra || '') + ' class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all">'
      + (hint ? '<span class="block text-xs text-slate-muted mt-1">' + hint + '</span>' : '')
      + '</label>';
  };

  var svcStart0 = src ? src.start : REF_DATE;
  var svcEnd0 = src
    ? (src.svc_end || addDays(addMonths(svcStart0, src.months || 12), -1))
    : addDays(addMonths(svcStart0, 12), -1);

  var m = document.createElement('div');
  m.id = 'org-entry-modal';
  m.className = 'fixed inset-0 bg-slate-title/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in';
  m.innerHTML = [
    '<div class="bg-surface-card rounded-[24px] border border-surface-border shadow-dropdown max-w-xl w-full max-h-[90vh] flex flex-col">',
      '<div class="flex items-start justify-between px-6 pt-5 pb-4 border-b border-surface-border">',
        '<div>',
          '<h3 class="text-base font-bold text-slate-title">录入机构订单</h3>',
        '</div>',
        '<button type="button" onclick="closeOrgEntryModal()" class="w-8 h-8 rounded-full hover:bg-surface-subtle text-slate-muted flex items-center justify-center flex-none"><i data-lucide="x" class="w-4 h-4"></i></button>',
      '</div>',
      '<div class="px-6 py-5 overflow-y-auto space-y-3.5">',
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">',
          fld('机构名称', 'oe_name', 'text', '如 南京大学人工智能学院', src ? src.org : ''),
          fld('合同编号', 'oe_contract', 'text', '线下合同编号', src ? src.contract_no : ''),
          fld('合同金额（元）', 'oe_amount', 'number', '如 50000', src ? src.amount : '', 'min="1" step="0.01"'),
          fld('签约日期', 'oe_start', 'date', '', src ? src.start : REF_DATE),
        '</div>',
        '<div>',
          '<span class="block text-xs font-semibold text-slate-body mb-1">服务周期 <span class="text-rose-500">*</span></span>',
          '<div class="grid grid-cols-2 gap-2">',
            '<div>',
              '<span class="block text-[11px] text-slate-muted mb-1">开始日期</span>',
              '<input id="oe_svc_start" type="date" value="' + svcStart0 + '" onchange="syncSvcEnd()" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title focus:outline-none focus:border-brand-500 focus:bg-white transition-all">',
            '</div>',
            '<div>',
              '<span class="block text-[11px] text-slate-muted mb-1">结束日期</span>',
              '<input id="oe_svc_end" type="date" value="' + svcEnd0 + '" onchange="syncSvcEnd()" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title focus:outline-none focus:border-brand-500 focus:bg-white transition-all">',
            '</div>',
          '</div>',
        '</div>',
        '<div>',
          '<span class="block text-xs font-semibold text-slate-body mb-1">合同图片 <span class="text-rose-500">*</span></span>',
          '<div id="oe_imgs" class="grid grid-cols-4 gap-2"></div>',
          '<input id="oe_file" type="file" accept="image/*" multiple class="hidden" onchange="readOrgImages(this.files); this.value=\'\'">',
          '<button type="button" onclick="$(\'oe_file\').click()" class="mt-2 w-full py-2.5 rounded-xl border border-dashed border-surface-border bg-surface-subtle hover:border-brand-300 hover:bg-brand-50/40 text-xs font-semibold text-slate-body flex items-center justify-center space-x-1.5 transition-all">',
            '<i data-lucide="upload" class="w-4 h-4"></i><span>上传合同图片</span>',
          '</button>',
          '<div class="text-xs text-slate-muted mt-1.5">请上传合同首页、服务内容和金额页面；最多 3 张，支持 JPG / PNG，单张不超过 10MB。</div>',
        '</div>',
        '<label class="block">',
          '<span class="block text-xs font-semibold text-slate-body mb-1">备注</span>',
          '<input id="oe_remark" type="text" placeholder="选填，如付款方式、联系人等" value="' + (src ? esc(src.remark || '') : '') + '" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all">',
        '</label>',
      '</div>',
      '<div class="px-6 py-4 border-t border-surface-border flex justify-end space-x-2">',
        '<button type="button" onclick="closeOrgEntryModal()" class="px-5 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-slate-body hover:bg-surface-subtle transition-all">取消</button>',
        '<button type="button" onclick="submitOrgReq(\'' + (prefillId || '') + '\')" class="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-sm shadow-brand-500/25 transition-all">提交审核</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(m);
  renderOrgImgs();
  renderIcons();
}

function syncSvcEnd() {
  var s = $('oe_svc_start'), e = $('oe_svc_end');
  if (!s || !e || !s.value) return;
  if (!e.value || e.value <= s.value) e.value = addDays(addMonths(s.value, 12), -1);
}

function addMonths(dateStr, n) {
  var d = new Date(dateStr + 'T00:00:00');
  var day = d.getDate();
  d.setMonth(d.getMonth() + Number(n));
  if (d.getDate() < day) d.setDate(0);
  return dateStrOf(d);
}

function addDays(dateStr, n) {
  var d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + Number(n));
  return dateStrOf(d);
}

function dateStrOf(d) {
  var mm = ('0' + (d.getMonth() + 1)).slice(-2), dd = ('0' + d.getDate()).slice(-2);
  return d.getFullYear() + '-' + mm + '-' + dd;
}

function svcRange(r) {
  if (r.svc_start && r.svc_end) return r.svc_start + ' 至 ' + r.svc_end;
  var s = r.start, m = r.months || 12;
  return s + ' 至 ' + addDays(addMonths(s, m), -1);
}

function submitOrgReq(prefillId) {
  var name = (($('oe_name') || {}).value || '').trim();
  var contract = (($('oe_contract') || {}).value || '').trim();
  var amount = Number(($('oe_amount') || {}).value || 0);
  var start = ($('oe_start') || {}).value || '';
  var svcStart = ($('oe_svc_start') || {}).value || '';
  var svcEnd = ($('oe_svc_end') || {}).value || '';
  var months = (svcStart && svcEnd)
    ? Math.max(1, Math.round((new Date(svcEnd + 'T00:00:00') - new Date(svcStart + 'T00:00:00') + 86400000) / 2629800000))
    : 0;
  var remark = (($('oe_remark') || {}).value || '').trim();

  if (!name) { toast('请填写机构名称'); return; }
  if (!contract) { toast('请填写合同编号'); return; }
  if (!(amount > 0)) { toast('请填写合同金额'); return; }
  if (!start) { toast('请选择签约日期'); return; }
  if (!svcStart || !svcEnd) { toast('请选择服务周期的开始与结束日期'); return; }
  if (svcEnd <= svcStart) { toast('服务结束日期需晚于开始日期'); return; }
  if (months > 60) { toast('服务周期最长 5 年'); return; }
  if (!ORG_IMGS.length) { toast('请上传至少 1 张合同图片'); return; }

  var list = loadOrgReqs();
  var dup = list.some(function(r) {
    return r.id !== prefillId && r.contract_no === contract && (r.status === 'PENDING' || r.status === 'APPROVED');
  });
  if (dup) { toast('该合同编号已提交，请勿重复'); return; }

  var req;
  if (prefillId) {
    var old = list.filter(function(r) { return r.id === prefillId; })[0];
    req = {
      id: old.id, org: name, contract_no: contract, amount: amount, rate: null, start: start,
      svc_start: svcStart, svc_end: svcEnd, months: months,
      remark: remark, contract_imgs: ORG_IMGS.slice(0, 3), status: 'PENDING',
      created_at: nowStr(), reviewed_at: '', reviewer: '', reject_reason: '', order_id: '', receipts: [], settled: 0
    };
    list = list.map(function(r) { return r.id === prefillId ? req : r; });
  } else {
    req = {
      id: nextOrgReqId(), org: name, contract_no: contract, amount: amount, rate: null, start: start,
      svc_start: svcStart, svc_end: svcEnd, months: months,
      remark: remark, contract_imgs: ORG_IMGS.slice(0, 3), status: 'PENDING',
      created_at: nowStr(), reviewed_at: '', reviewer: '', reject_reason: '', order_id: '', receipts: [], settled: 0
    };
    list = [req].concat(list);
  }
  saveOrgReqs(list);
  closeOrgEntryModal();
  S.tab = 'org'; S.op = 1; S.orgQ = ''; S.orgF = 'all';
  pComm();
  toast('已提交，等待运营审核');
}

function closeReceiptModal() {
  var el = $('receipt-modal'); if (el) el.remove();
}

function showReceiptModal(orderNo) {
  var old = $('receipt-modal'); if (old) old.remove();
  var o = ORDERS.filter(function(x) { return x.no === orderNo; })[0];
  if (!o) { toast('未找到该机构订单'); return; }
  var m = document.createElement('div');
  m.id = 'receipt-modal';
  m.className = 'fixed inset-0 bg-slate-title/50 backdrop-blur-xs flex items-center justify-center p-4 z-[55] animate-fade-in';
  m.innerHTML = [
    '<div class="bg-surface-card rounded-[24px] border border-surface-border p-6 max-w-sm w-full shadow-dropdown">',
      '<h3 class="text-base font-bold text-slate-title">登记机构回款</h3>',
      '<p class="text-xs text-slate-body mt-1.5">演示用。正式版由财务在运营后台凭银行流水登记，登记即刻按比例释放佣金。</p>',
      '<div class="mt-4 space-y-3">',
        '<label class="block"><span class="block text-xs font-semibold text-slate-body mb-1">到账日期 <span class="text-rose-500">*</span></span>',
          '<input id="rc_date" type="date" value="' + REF_DATE + '" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title focus:outline-none focus:border-brand-500 focus:bg-white transition-all"></label>',
        '<label class="block"><span class="block text-xs font-semibold text-slate-body mb-1">到账金额（元） <span class="text-rose-500">*</span></span>',
          '<input id="rc_amount" type="number" min="1" step="0.01" placeholder="如 20000" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all">',
          '<span class="block text-xs text-slate-muted mt-1">剩余未收 ¥' + fmt2(Math.max(0, o.paid - (o.receipts || []).reduce(function(a, x) { return round2(a + x.amount); }, 0))) + '</span></label>',
        '<label class="block"><span class="block text-xs font-semibold text-slate-body mb-1">回款凭证号</span>',
          '<input id="rc_voucher" type="text" placeholder="选填，如 BCM202611100001" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all"></label>',
      '</div>',
      '<div class="mt-5 flex space-x-2">',
        '<button type="button" onclick="closeReceiptModal()" class="flex-1 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-slate-body hover:bg-surface-subtle transition-all">取消</button>',
        '<button type="button" onclick="confirmReceipt(\'' + orderNo + '\')" class="flex-1 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-sm shadow-brand-500/25 transition-all">确认登记</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(m);
  renderIcons();
}

function confirmReceipt(orderNo) {
  var o = ORDERS.filter(function(x) { return x.no === orderNo; })[0];
  if (!o) { toast('未找到该机构订单'); return; }
  var date = ($('rc_date') || {}).value || '';
  var amount = Number(($('rc_amount') || {}).value || 0);
  var voucher = (($('rc_voucher') || {}).value || '').trim();
  if (!date) { toast('请选择到账日期'); return; }
  if (!(amount > 0)) { toast('请填写到账金额'); return; }
  var got = (o.receipts || []).reduce(function(a, x) { return round2(a + x.amount); }, 0);
  var rest = round2(o.paid - got);
  if (rest <= 0) { toast('该合同已全额回款，无需再登记'); return; }
  if (amount > rest) { toast('超出合同剩余未收 ¥' + fmt2(rest)); return; }
  o.receipts = (o.receipts || []).concat([{ date: date, amount: amount, voucher: voucher }]);
  var list = loadOrgReqs();
  list.forEach(function(r) { if (r.order_id === orderNo) r.receipts = o.receipts.slice(); });
  saveOrgReqs(list);
  closeReceiptModal();
  S.tab = 'org';
  pComm();
  if (S.orgDetail) showOrgDetail(S.orgDetail);
  toast('已登记回款 ¥' + fmt2(amount) + '，佣金已按比例释放');
}

function closeOrgApproveModal() {
  var el = $('org-approve-modal'); if (el) el.remove();
}

function updateOrgApprovePreview(amount) {
  var v = Number((($('oa_rate') || {}).value) || 0);
  var el = $('oa_preview');
  if (el) el.innerHTML = '预计总佣金 <b class="text-brand-600">¥' + fmt2(round2(amount * v / 100)) + '</b>（合同金额 × ' + v + '%）';
}

function showOrgApproveModal(id) {
  var old = $('org-approve-modal'); if (old) old.remove();
  var r = loadOrgReqs().filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单申请'); return; }
  var m = document.createElement('div');
  m.id = 'org-approve-modal';
  m.className = 'fixed inset-0 bg-slate-title/50 backdrop-blur-xs flex items-center justify-center p-4 z-[55] animate-fade-in';
  m.innerHTML = [
    '<div class="bg-surface-card rounded-[24px] border border-surface-border p-6 max-w-sm w-full shadow-dropdown">',
      '<h3 class="text-base font-bold text-slate-title">审核通过 · 核定分成比例</h3>',
      '<p class="text-xs text-slate-body mt-1.5">比例由运营在此核定，通过后按该比例计算总佣金与每笔回款释放金额。</p>',
      '<div class="mt-4 rounded-xl bg-surface-subtle border border-surface-border px-3 py-2.5 text-xs space-y-1.5">',
        '<div class="flex justify-between gap-3"><span class="text-slate-muted flex-none">机构名称</span><span class="font-bold text-slate-title text-right">' + esc(r.org) + '</span></div>',
        '<div class="flex justify-between gap-3"><span class="text-slate-muted flex-none">合同编号</span><span class="font-mono text-slate-title">' + esc(r.contract_no) + '</span></div>',
        '<div class="flex justify-between gap-3"><span class="text-slate-muted flex-none">合同金额</span><span class="font-bold text-slate-title tabular-nums">¥' + fmt(r.amount) + '</span></div>',
      '</div>',
      '<label class="block mt-3"><span class="block text-xs font-semibold text-slate-body mb-1">约定比例（%） <span class="text-rose-500">*</span></span>',
        '<input id="oa_rate" type="number" min="0" max="100" step="0.5" placeholder="如 15" oninput="updateOrgApprovePreview(' + r.amount + ')" class="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all"></label>',
      '<div id="oa_preview" class="mt-2 text-xs text-slate-muted">填写比例后显示预计总佣金</div>',
      '<div class="mt-5 flex space-x-2">',
        '<button type="button" onclick="closeOrgApproveModal()" class="flex-1 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-slate-body hover:bg-surface-subtle transition-all">取消</button>',
        '<button type="button" onclick="demoApproveOrgReq(\'' + id + '\')" class="flex-1 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all">确认通过</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(m);
  renderIcons();
}

function demoApproveOrgReq(id) {
  var list = loadOrgReqs();
  var r = list.filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单申请'); return; }
  if (r.status !== 'PENDING') { toast('该申请已处理，请勿重复操作'); return; }
  var rate = Number((($('oa_rate') || {}).value) || -1);
  if (!(rate >= 0 && rate <= 100)) { toast('请填写 0-100 的约定比例'); return; }
  if (ORDERS.some(function(o) { return o.contract_no === r.contract_no && o.kind === 'orgc'; })) {
    toast('该合同已生成机构订单，请勿重复');
    return;
  }
  var no = nextOrgOrderNo();
  ORDERS.unshift({
    no: no, time: r.start, name: '机构合同（回款结算）', kind: 'orgc', months: r.months,
    paid: r.amount, rate: rate, org: r.org, contract_no: r.contract_no, refund: 0, settled: 0,
    receipts: (r.receipts || []).slice()
  });
  r.rate = rate;
  r.status = 'APPROVED';
  r.settled = 0;
  r.reviewed_at = nowStr();
  r.reviewer = '演示审核';
  r.order_id = no;
  r.reject_reason = '';
  saveOrgReqs(list);
  closeOrgApproveModal();
  S.tab = 'org';
  pComm();
  toast('演示：审核通过，已按 ' + rate + '% 核定，生成订单 ' + no);
}

function demoRejectOrgReq(id) {
  showOrgRejectModal(id);
}

function closeOrgRejectModal() {
  var el = $('org-reject-modal'); if (el) el.remove();
}

function showOrgRejectModal(id) {
  var old = $('org-reject-modal'); if (old) old.remove();
  var m = document.createElement('div');
  m.id = 'org-reject-modal';
  m.className = 'fixed inset-0 bg-slate-title/50 backdrop-blur-xs flex items-center justify-center p-4 z-[55] animate-fade-in';
  m.innerHTML = [
    '<div class="bg-surface-card rounded-[24px] border border-surface-border p-6 max-w-sm w-full shadow-dropdown">',
      '<h3 class="text-base font-bold text-slate-title">驳回机构订单申请</h3>',
      '<p class="text-xs text-slate-body mt-1.5">驳回原因将展示在合伙人端，便于修改后重新提交。</p>',
      '<textarea id="org_reject_note" rows="3" placeholder="如：合同盖章页缺失，请补充后重新提交。" class="mt-4 w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-slate-title placeholder:text-slate-muted focus:outline-none focus:border-brand-500 focus:bg-white transition-all resize-y"></textarea>',
      '<div class="mt-5 flex space-x-2">',
        '<button type="button" onclick="closeOrgRejectModal()" class="flex-1 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-slate-body hover:bg-surface-subtle transition-all">取消</button>',
        '<button type="button" onclick="confirmOrgReject(\'' + id + '\')" class="flex-1 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm transition-all">确认驳回</button>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(m);
  renderIcons();
  var ta = $('org_reject_note'); if (ta) ta.focus();
}

function confirmOrgReject(id) {
  var reason = (($('org_reject_note') || {}).value || '').trim();
  if (!reason) { toast('请填写驳回原因'); return; }
  var list = loadOrgReqs();
  var r = list.filter(function(x) { return x.id === id; })[0];
  if (!r) { toast('未找到该机构订单申请'); return; }
  if (r.status !== 'PENDING') { toast('该申请已处理，请勿重复操作'); return; }
  r.status = 'REJECTED';
  r.reviewed_at = nowStr();
  r.reviewer = '演示审核';
  r.reject_reason = reason;
  r.order_id = '';
  saveOrgReqs(list);
  closeOrgRejectModal();
  S.tab = 'org';
  pComm();
  toast('演示：已驳回');
}

function $(id) { return document.getElementById(id); }
function esc(s) { return String(s || '').replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function go(h) {
  var map = {
    login: 'login.html',
    apply: 'apply.html',
    forgot: 'forgot.html',
    status: 'status.html',
    promotion: 'promotion.html',
    customers: 'customers.html',
    commission: 'commission.html',
    profile: 'profile.html'
  };
  var target = map[h] || (h + '.html');
  var curPage = location.pathname.split('/').pop() || '';
  if (curPage === target) {
    if (typeof renderCurrentPage === 'function') renderCurrentPage();
  } else {
    location.href = target;
  }
}
function phoneOk(p) { return /^1[3-9]\d{9}$/.test(p); }
function pwdOk(v) { return v && v.length >= 8 && v.length <= 20 && /[A-Za-z]/.test(v) && /\d/.test(v); }
function err(id, msg) { var e = $(id); if (e) e.textContent = msg || ''; }
function nowStr() {
  var d = new Date(), z = function(n){ return (n < 10 ? '0' : '') + n; };
  return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' + z(d.getDate()) + ' ' + z(d.getHours()) + ':' + z(d.getMinutes());
}

function toast(msg) {
  var t = $('toast'), tx = $('toast-text');
  if (!t || !tx) return;
  tx.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2200);
}

function copy(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function(){
      toast((label || '内容') + ' 已复制到剪贴板！');
    }).catch(function(){
      toast('复制失败，请手动长按复制');
    });
  } else {
    toast('复制失败，请手动选择复制');
  }
}

function appOf(p) {
  return APP[p] || { name: '李明', org: '某某大学某某实验室', wx: '', time: '2026-11-01 10:30' };
}

// 当前账号实际生效的分成比例（由运营在审核通过/档案中配置，前端只读展示）
function rateOf(p) {
  var a = APP[p] || {};
  return { first: a.first != null ? a.first : 30, next: a.next != null ? a.next : 20 };
}

function allTags() {
  return TAGS.def.concat(TAGS.custom);
}

function tagBadge(tag) {
  if (tag === '核心') return 'bg-brand-500 text-white font-bold shadow-xs';
  if (tag === '重要') return 'bg-brand-50 text-brand-600 border border-brand-200 font-semibold';
  if (tag === '待召回') return 'bg-amber-50 text-amber-700 border border-amber-200 font-medium';
  return 'bg-surface-subtle text-slate-body border border-surface-border font-normal';
}

function sendCode(btnId, phoneId, errId) {
  var p = $(phoneId).value.trim();
  if (isOpsAccount(p)) { err(errId, '运营账号不支持短信验证码，请使用账号登录'); return; }
  if (!phoneOk(p)) { err(errId, '请输入有效的 11 位手机号'); return; }
  err(errId, '');
  var b = $(btnId), n = 60;
  b.disabled = true;
  toast('短信验证码已发送（演示：输入任意 6 位数字）');
  var timer = setInterval(function(){
    n--;
    if (!$(btnId)) { clearInterval(timer); return; }
    b.textContent = n + ' 秒后重发';
    if (n <= 0) {
      clearInterval(timer);
      b.disabled = false;
      b.textContent = '获取验证码';
    }
  }, 1000);
  b.textContent = '60 秒后重发';
}

function togglePwdVisibility(inputId, btn) {
  var input = $(inputId);
  if (!input) return;
  var isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  btn.innerHTML = isPass ? '<i data-lucide="eye-off" class="w-4 h-4 text-slate-muted"></i>' : '<i data-lucide="eye" class="w-4 h-4 text-slate-muted"></i>';
  renderIcons();
}

function logout() {
  S.user = null;
  toast('您已安全退出合伙人系统');
  go('login');
}

// ==================== 统一母版布局渲染器 (SHELL WRAPPERS) ====================

function renderAuthLayout(title, subtitle, contentHtml) {
  return [
    '<div class="min-h-screen bg-surface-canvas flex flex-col justify-between relative overflow-hidden">',
      '<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-brand-500/10 via-brand-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>',
      '<header class="w-full px-6 py-6 max-w-6xl mx-auto flex items-center justify-between z-10">',
        '<div class="flex items-center space-x-3 cursor-pointer" onclick="go(\x27login\x27)">',
          '<div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-sm shadow-brand-500/30">',
            '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>',
          '</div>',
          '<div>',
            '<div class="font-extrabold text-base tracking-tight text-slate-title flex items-center">',
              '立理 S1 合伙人',
              '<span class="ml-2 text-xs font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-100">分销平台</span>',
            '</div>',
            '<p class="text-xs text-slate-muted font-medium">连接科研需求，创造专业价值</p>',
          '</div>',
        '</div>',
        '<div class="text-xs text-slate-muted">',
          '<a href="https://s1.liliai.cn" target="_blank" class="hover:text-brand-600 transition-colors flex items-center">立理 S1 官网 <i data-lucide="external-link" class="w-3.5 h-3.5 ml-1"></i></a>',
        '</div>',
      '</header>',

      '<div class="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">',
        '<div class="w-full max-w-md bg-surface-card rounded-[24px] border border-surface-border p-6 sm:p-8 shadow-card-hover transition-all">',
          '<div class="text-center mb-6">',
            '<h2 class="text-xl sm:text-2xl font-bold tracking-tight text-slate-title">' + title + '</h2>',
            subtitle ? '<p class="text-xs sm:text-sm text-slate-body mt-1.5 leading-relaxed">' + subtitle + '</p>' : '',
          '</div>',
          contentHtml,
        '</div>',
      '</div>',

      '<footer class="w-full py-5 text-center text-xs text-slate-muted border-t border-surface-border-subtle z-10 leading-relaxed">',
        '<div>Copyright © 2026 LitLit AI</div>',
        '<div>湘ICP备20011610号-3</div>',
        '<div>湖南赤道银河科技有限公司</div>',
      '</footer>',
    '</div>'
  ].join('');
}

function renderDashboardLayout(cur, pageTitle, pageBadge, contentHtml) {
  var u = S.user || { phone: '13800000003' };
  var a = appOf(u.phone);

  var navItems = [
    { key: 'promotion', label: '推广中心', icon: 'share-2' },
    { key: 'customers', label: '我的客户', icon: 'users', count: CUST.length },
    { key: 'commission', label: '我的订单', icon: 'wallet' },
    { key: 'profile', label: '我的资料', icon: 'user-check' }
  ];

  var asideNavHtml = navItems.map(function(item) {
    var isActive = cur === item.key;
    if (isActive) {
      return [
        '<a href="' + item.key + '.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-full bg-brand-500 text-white font-semibold text-sm shadow-sm shadow-brand-500/25 transition-all">',
          '<div class="flex items-center space-x-3">',
            '<i data-lucide="' + item.icon + '" class="w-4 h-4"></i>',
            '<span>' + item.label + '</span>',
          '</div>',
          (item.count ? '<span class="px-2 py-0.5 text-xs font-bold rounded-full bg-white/20 text-white">' + item.count + '</span>' : ''),
          (item.badge ? '<span class="px-1.5 py-0.5 text-xs font-semibold rounded-full bg-white/20 text-white">' + item.badge + '</span>' : ''),
        '</a>'
      ].join('');
    } else {
      return [
        '<a href="' + item.key + '.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-full text-slate-body hover:text-slate-title hover:bg-surface-subtle font-medium text-sm transition-all group">',
          '<div class="flex items-center space-x-3">',
            '<i data-lucide="' + item.icon + '" class="w-4 h-4 text-slate-muted group-hover:text-slate-title transition-colors"></i>',
            '<span>' + item.label + '</span>',
          '</div>',
          (item.count ? '<span class="text-xs text-slate-muted">' + item.count + '</span>' : ''),
          (item.badge ? '<span class="px-1.5 py-0.5 text-xs font-semibold rounded-full bg-brand-50 text-brand-600">' + item.badge + '</span>' : ''),
        '</a>'
      ].join('');
    }
  }).join('');

  var mobileTabsHtml = navItems.map(function(item) {
    var isActive = cur === item.key;
    return [
      '<a href="' + item.key + '.html" class="flex flex-col items-center py-1.5 px-3 rounded-2xl transition-all ' + (isActive ? 'text-brand-600 font-bold' : 'text-slate-muted hover:text-slate-title') + '">',
        '<i data-lucide="' + item.icon + '" class="w-5 h-5 ' + (isActive ? 'text-brand-500 stroke-[2.5]' : '') + '"></i>',
        '<span class="text-xs mt-1">' + item.label + '</span>',
      '</a>'
    ].join('');
  }).join('');

  return [
    '<div class="min-h-screen flex w-full bg-surface-canvas text-slate-title">',
      '<aside class="w-64 bg-surface-card border-r border-surface-border flex-shrink-0 flex-col justify-between hidden md:flex sticky top-0 h-screen z-20">',
        '<div>',
          '<div class="h-16 px-6 flex items-center justify-between border-b border-surface-border-subtle">',
            '<div class="flex items-center space-x-3">',
              '<div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-sm shadow-brand-500/30">',
                '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>',
              '</div>',
              '<div>',
                '<h1 class="font-bold text-base tracking-tight text-slate-title leading-tight">立理 S1 合伙人</h1>',
                '<p class="text-xs text-slate-muted font-medium">Partner Studio v1.1</p>',
              '</div>',
            '</div>',
          '</div>',

          '<div class="px-4 py-5 space-y-6">',
            '<div>',
              '<div class="px-3 mb-2 text-xs font-bold text-slate-muted uppercase tracking-wider">主功能模块</div>',
              '<nav class="space-y-1">' + asideNavHtml + '</nav>',
            '</div>',
          '</div>',
        '</div>',

        '<div class="p-4 border-t border-surface-border-subtle">',
          '<div class="p-2.5 rounded-2xl bg-surface-subtle border border-surface-border flex items-center justify-between">',
            '<div class="flex items-center space-x-3 min-w-0">',
              '<div class="w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center ring-2 ring-brand-200 flex-shrink-0">',
                (a.name ? a.name.charAt(0) : '合'),
              '</div>',
              '<div class="truncate">',
                '<div class="font-bold text-xs text-slate-title leading-tight truncate">' + esc(a.name) + '</div>',
              '</div>',
            '</div>',
            '<button onclick="logout()" class="text-slate-muted hover:text-rose-600 p-1.5 rounded-lg hover:bg-white transition-all flex-shrink-0" title="退出登录">',
              '<i data-lucide="log-out" class="w-4 h-4"></i>',
            '</button>',
          '</div>',
        '</div>',
      '</aside>',

      '<main class="flex-1 flex flex-col min-w-0 pb-20 md:pb-8">',
        '<header class="h-16 bg-surface-card border-b border-surface-border px-4 sm:px-6 md:px-8 flex items-center justify-between sticky top-0 z-20">',
          '<div class="flex items-center space-x-3">',
            '<div class="flex items-center space-x-2">',
              '<span class="font-bold text-base md:text-lg text-slate-title">' + pageTitle + '</span>',
              (pageBadge ? '<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-600 border border-brand-100">' + pageBadge + '</span>' : ''),
            '</div>',
          '</div>',
        '</header>',

        '<div class="p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">' + contentHtml + '</div>',
      '</main>',

      '<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface-card/95 backdrop-blur border-t border-surface-border px-3 py-1 flex items-center justify-around z-30">' + mobileTabsHtml + '</nav>',
    '</div>'
  ].join('');
}

function handleGlobalSearch(val) {
  S.query = val.trim();
  if (location.hash !== '#customers') {
    go('customers');
  } else {
    pCust();
  }
}


function getOrgSum() {
  var pool = 0, settled = 0, due = 0;
  loadOrgReqs().forEach(function(r) {
    if (r.status !== 'APPROVED') return;
    var n = orgNums(r);
    pool = round2(pool + n.pool);
    settled = round2(settled + n.settled);
    due = round2(due + n.due);
  });
  return { pool: pool, settled: settled, due: due };
}

function setDim(t) { S.tab = t; S.sp = 1; pComm(); }
function setSettleKind(v) { S.sk = v; S.sp = 1; pComm(); }


// 多页面通用认证状态加载
function initAuth(requireApproved) {
  var saved = localStorage.getItem('lili_partner_user');
  if (saved) {
    try { S.user = JSON.parse(saved); } catch (e) {}
  }
  if (!S.user || !S.user.phone) {
    S.user = { phone: '13800000003', st: 'APPROVED' };
    localStorage.setItem('lili_partner_user', JSON.stringify(S.user));
  }
  if (requireApproved && S.user.st !== 'APPROVED') {
    go('status');
  }
}

function logout() {
  localStorage.removeItem('lili_partner_user');
  S.user = null;
  toast('已安全退出登录');
  setTimeout(function() { go('login'); }, 400);
}

hydrateOrgOrders();
