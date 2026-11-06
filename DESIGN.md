---
name: Lili Partner Distribution System (立理合伙人分销系统)
description: Warm Kinetic Precision — 现代温暖高质感数据与业务协作设计系统
colors:
  primary: "#FF5C28"
  primary-hover: "#E04816"
  primary-light: "#FFF3ED"
  primary-surface: "#FFFAF6"
  neutral-bg: "#F6F7FA"
  neutral-surface: "#FFFFFF"
  neutral-surface-subtle: "#FAFAFC"
  neutral-border: "#E8ECF2"
  neutral-border-subtle: "#F1F3F7"
  text-primary: "#111827"
  text-secondary: "#4B5563"
  text-muted: "#94A3B8"
  success: "#10B981"
  success-light: "#ECFDF5"
  warning: "#F59E0B"
  warning-light: "#FFFBEB"
  danger: "#EF4444"
  danger-light: "#FEF2F2"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  card-stat:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.xl}"
    padding: "20px"
  card-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.xl}"
    padding: "20px"
---

# Design System: 立理合伙人分销系统 (Warm Kinetic Precision)

## Overview

**Creative North Star: "Warm Kinetic Precision"（暖意活力与精密协作）**

本系统提炼自两套前沿高水准 SaaS 仪表盘设计范式（Salesify 与 ConstructHub），融合了**高饱和日光橙（Electric Tangerine）**的充沛活力与**瑞士网格体系的精密克制**。它专为“立理 S1 合伙人分销与管理体系”量身定制，解决传统企业管理后台“冰冷沉闷、表格堆叠、无呼吸感”的痛点，为合伙人工作台、业绩转化看板、佣金结算流以及客户生命周期分析赋予极高质感的现代 SaaS 体验。

系统的视觉哲学建立在“**大面积纯白微温层叠，辅以高能量点状锚定**”的基础之上。底色采用微妙的冷暖中性灰（`#F6F7FA`），卡片与容器保持纯白高透光感（`#FFFFFF`），并运用大圆角（`16px`~`20px`）与柔和胶囊形态（Pill-shape），让复杂密集的业务数据具备自然的阅读韵律。主品牌橙色（`#FF5C28`）恪守“10% 稀缺性法则”，仅作用于主动作、选中态、极具里程碑意义的 Hero 卡片及核心转化拐点，杜绝大面积视觉疲劳。

**Key Characteristics:**
- **柔和层级（Soft Layering）**：依托 `1px` 微细描边（`#E8ECF2`）与超扩散氛围浅阴影（`0 4px 20px -2px rgba(17,24,39,0.04)`）建立三维浮空层次，绝无脏黑投影。
- **微纹理质感（Micro-Textures & Watermarks）**：在核心 Highlight 卡片中融入同色系低透明度矢量纹样（有机几何花瓣/射线），并在图表进度中使用斜条纹（Hatched Pattern）与矩阵圆珠（Dot Matrix Beads），极大提升数据可视化精致度。
- **胶囊化交互（Pill Geometry）**：从全局搜索、主操作按钮、标签 Badge 到导航激活态，统一贯彻全胶囊形态（`rounded-full`），视觉亲和力与触控舒适度兼备。
- **高密度扫描效率（Operate Efficiency）**：紧凑而规律的间距节奏，数字排版强化等宽排布（`tabular-nums`），使分润收益、订单转化、客户层级一目了然。

---

## Colors

调色板兼具**充沛阳光般的激励感**与**金融业务所需的严谨安定感**。

### Primary
- **Electric Tangerine** (`#FF5C28`): 品牌灵魂色。用于全局高亮卡片背景、主操作按钮（CTA）、选中的导航胶囊与图表关键数据锚点。
- **Tangerine Deep / Hover** (`#E04816`): 按钮悬浮及深层激活态。
- **Tangerine Light** (`#FFF3ED`): 浅橙背景填充，用于次级高亮徽章、图表渐变过渡或浅色标签。
- **Tangerine Soft Surface** (`#FFFAF6`): 极淡的橙暖底色，用于关键提示容器。

### Neutral
- **App Canvas** (`#F6F7FA`): 页面总底色，轻微冷灰中泛出柔和质感，衬托纯白卡片。
- **Card Surface** (`#FFFFFF`): 纯白工作台卡片与侧边栏、顶栏承载面。
- **Subtle Surface** (`#FAFAFC` / `#F1F3F7`): 嵌套模块底色、输入框背景、表格斑马纹与悬浮态。
- **Slate Heavy (Text Primary)** (`#111827`): 页面标题、主指标大数字，极具沉稳力量感。
- **Slate Medium (Text Secondary)** (`#4B5563`): 次级标题、正文与列表字段值。
- **Slate Light (Text Muted)** (`#94A3B8`): 辅助说明、占位符、图表轴刻度与非活动状态图标。
- **Border Default** (`#E8ECF2`): 卡片边框与通用分割线。

### Functional
- **Growth Emerald** (`#10B981` / 背景 `#ECFDF5`): 增长指标（如“+9.97% 较上月”）、有效状态、佣金到账。
- **Decline Rose** (`#EF4444` / 背景 `#FEF2F2`): 下跌指标、驳回状态、异常告警。
- **Pending Amber** (`#F59E0B` / 背景 `#FFFBEB`): 审核中、进行中（结合斜纹 Hatch 纹理表达）。

### Named Rules
**The 10% Tangerine Rule (橙色克制原则):**
橙色在整屏像素面积中严禁超过 10%~15%。它必须是视觉焦点的“磁铁”，而非铺天盖地的底色；除每页至多 1 个“Hero 汇总卡片”（如“本月总佣金收益”）可使用纯橙背景外，其余所有卡片必须为纯白底色，仅以文字、徽章或图表折线点缀橙色。

---

## Typography

**Display / Header Font:** `Plus Jakarta Sans` / `Inter`，备选系统 `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`
**Chinese Body Font:** `PingFang SC`, `Hiragino Sans GB`, `Microsoft YaHei`, `sans-serif`
**Numerical Font:** 强制应用 CSS `font-variant-numeric: tabular-nums`，确保仪表盘金融数据对齐。

### Hierarchy
- **Display 1 (Hero Metric)**: `32px` / `36px`, `Font-Weight: 700`, `letter-spacing: -0.02em`。专用于工作台核心指标（例如 `¥842,450` 或 `11,000 pts`）。
- **Headline (Page / Section Title)**: `20px` / `24px`, `Font-Weight: 700`, `letter-spacing: -0.01em`。用于“合伙人工作台概览”、“客户列表”、“推广中心”。
- **Title (Card Title)**: `15px` / `16px`, `Font-Weight: 600`。用于卡片标题（如“推广收益趋势”、“待结算佣金”）。
- **Body (Content / Table)**: `14px`, `Font-Weight: 400`, `line-height: 1.5`。正文说明、列表行内容。
- **Caption / Label**: `12px`, `Font-Weight: 600`, `letter-spacing: 0.02em`。用于指标说明副标题、表格表头（大写或中灰）、Tag 徽章。

---

## Layout

- **网格系统**：12 栅格响应式流式布局，主工作区推荐最大宽度 `1440px`，居中或弹性流体拉伸。
- **侧边栏结构 (Sidebar)**：固定宽度 `240px`（折叠状态 `72px`），包含品牌 Logo、分组导航菜单、底部用户与设置入口。
- **顶栏结构 (Header)**：高度 `64px`，左侧放置面包屑/日期信息，中间可放置居中药丸搜索栏（带 `⌘ F` 快捷键小贴片），右侧放置协作头像栈、消息通知铃铛与主操作按钮（CTA）。
- **看板间距节奏**：
  - 卡片外间距（Grid Gap）：标准 `20px`（PC 端）或 `12px`（移动端）。
  - 卡片内边距（Padding）：主要卡片统一采用 `20px` 或 `24px`，紧凑子卡片采用 `16px`。

---

## Elevation & Depth

以**高质感纯净平面**为主，辅以**极轻柔扩散环境光**：
- **Level 0 (Flat)**: 底色 `#F6F7FA`。
- **Level 1 (Card Default)**: 纯白 `#FFFFFF`，边框 `1px solid #E8ECF2`，投影 `box-shadow: 0 4px 20px -2px rgba(17, 24, 39, 0.03)`。
- **Level 2 (Hover / Active)**: `box-shadow: 0 10px 25px -4px rgba(17, 24, 39, 0.06), 0 4px 6px -2px rgba(17, 24, 39, 0.02)`，微幅上移 `transform: translateY(-2px)`。
- **Level 3 (Hero Orange Card)**: 专属暖橙扩散阴影：`box-shadow: 0 12px 28px -6px rgba(255, 92, 40, 0.28)`。
- **Level 4 (Floating Popover / Tooltip)**: 深色或纯白悬浮窗：`box-shadow: 0 20px 30px -8px rgba(0, 0, 0, 0.15)`。

---

## Shapes

- **全胶囊 (Pill / Full-Rounded)**: `border-radius: 9999px`。应用对象：
  - 按钮（Primary / Secondary / Ghost CTA）
  - 搜索框（Search Bar）
  - 趋势增跌标签（Percentage Badges，如 `+9.97%`）
  - 状态分类 Tab（Segmented Tabs）
  - 侧边栏当前激活项选中胶囊
- **容器大圆角 (Squircle / Card Radius)**:
  - 工作台主卡片：`20px`
  - 嵌套子容器、弹窗：`16px`
  - 小型输入框、下拉菜单：`10px`~`12px`
- **微纹理造型 (Hatched & Bead Patterns)**:
  - **斜纹进度条（Hatched Stripe）**：在进度条未完成/进行中部分采用 `45°` 浅橙/白交替斜纹（`repeating-linear-gradient`），展现建造/工程/动态进行中的质感。
  - **点阵气泡图（Dot Matrix Bead Chart）**：离散柱状图采用竖向串珠（Stacked Beads）代替生硬实心矩形，圆润且富有趣味性。
  - **暗纹水印（Organic Petal Watermark）**：Hero 橙色卡片右下角隐现 10% 透明度的放射花瓣线稿或同心几何弧，打破大块平涂的单调感。

---

## Components

### 1. 核心指标卡 (Metric KPI Card)
- **Hero Variant (主推橙底)**：
  - 背景：`#FF5C28`
  - 右下角：叠加透明度 `0.12` 的同心花瓣/几何水印 SVG
  - 数字：纯白大号 `32px` Bold
  - 标签 Badge：白色半透明胶囊底（`rgba(255, 255, 255, 0.22)`），白色文本
- **Standard Variant (通用白底)**：
  - 背景：`#FFFFFF`，边框 `1px solid #E8ECF2`
  - 标题图标：右上角或左上角带柔和中性浅底圆角图标
  - 数字：黑灰 `#111827` `32px` Bold
  - 标签 Badge：浅绿胶囊底 `#ECFDF5`，深绿字体 `#10B981`，带向上箭头 `↑ 9.97% vs last month`

### 2. 侧边栏与导航菜单 (Navigation Bar)
- 背景采用纯白或同层透光底色。
- 分组小标题使用全大写或 `12px` 浅灰粗体（`#94A3B8`）。
- 菜单项：高度 `44px`，圆角 `9999px` 或 `12px`。
- **激活态**：整块实心填充 `#FF5C28`，图标与文字反白纯白 `#FFFFFF`，右侧带白色半透明计数徽标；或极简浅橙底色（`#FFF3ED`）+ 橙色字体。
- **普通悬浮态**：浅灰微底 `#F4F5F7`，文字转黑 `#111827`。

### 3. 图表与数据可视化 (Data Visualization)
- **平滑面积折线图（Curved Spline Area）**：线宽 `2.5px`，实线颜色 `#FF5C28`，下方填充从 `rgba(255, 92, 40, 0.2)` 渐变褪色至 `rgba(255, 92, 40, 0)`。数据点使用带白描边的实心橙圆。
- **柱状图（Rounded Bar Chart）**：柱体拥有全圆角顶角（`border-radius: 9999px`），默认状态淡米橙灰（`#FDEEE7`），高亮当前周期柱体为高亮纯橙（`#FF5C28`）。
- **斜纹时间轴进度条（Segmented Hatched Timeline）**：实心橙色代表“已完成阶段”，紧邻的 `45°` 倾斜线纹段代表“预测/进行中阶段”。
- **深色交互浮层（Dark Tooltip Pill）**：黑色圆角胶囊（`#1F2937`），内含白字与微型色块图例（`Completed 85% / In Progress 15%`）。

### 4. 药丸输入与全局搜索 (Search & Pill Action Bar)
- 搜索框呈胶囊状（`height: 42px`, `rounded-full`），背景 `#FFFFFF` 或 `#F6F7FA`，左侧放大镜浅灰图标，右侧带快捷键提示徽章（`kbd` 标签，内容 `⌘ F`）。
- 主操作按钮（CTA）：全胶囊形状，`#FF5C28` 实体填充，内边距 `10px 24px`，白字加粗，右侧或左侧带微型功能图标。

### 5. 客户列表与表格 (Client / Commission Table)
- 表头：简洁浅底，`12px` 浅灰文本，左对齐。
- 表格行：悬浮时高亮为浅米白 `#FAFAFC`。
- 头像：`36px` 圆形头像，带客户名（黑粗体）与职位/角色标签（中灰小字）。
- 状态标签：采用胶囊 Pill，如“已结算 / 审核中 / 待返佣”。

---

## Do's and Don'ts

### Do:
- **Do 保持圆角的和谐一致**：外部卡片 `20px`，内部按钮与标签一律使用 `9999px` 胶囊，形成亲和现代的几何秩序。
- **Do 在数据图表中使用微纹理**：将单调的平涂改为斜条纹（Hatch）、平滑渐变（Spline Gradient）与矩阵串珠（Beads）。
- **Do 保持背景的洁净与对比**：浅灰底色（`#F6F7FA`）与纯白卡片（`#FFFFFF`）构成宁静的阅读场域。
- **Do 在关键指标卡片中采用等宽数字**：使用 `font-variant-numeric: tabular-nums`，确保统计数字不会因字符宽度差异而抖动。

### Don't:
- **Don't 滥用主品牌橙色**：不要将整个页面铺满橙色或给每个卡片都上彩色描边。橙色是“聚光灯”，不是“墙纸”。
- **Don't 使用生硬黑色的投影**：严禁使用 `rgba(0,0,0,0.25)` 这种沉重陈旧的阴影，必须使用扩散范围大、Alpha 低于 `0.05` 的柔光氛围投影。
- **Don't 混用尖角与直角**：除极少数细微指示箭头外，严禁出现 `0px` 直角边框或锐角卡片。
- **Don't 在管理后台使用花哨的华丽动画**：所有状态切换过渡时间控制在 `150ms`~`200ms`，禁止让合伙人和管理员等待冗长花哨的加载编排。
