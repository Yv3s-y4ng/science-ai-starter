# AI4S 静态网站实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 构建《用 AI 做科研：非计算机课题组实用入门》GitHub Pages 静态网站，中英双语。

**Architecture:** 纯静态 HTML/CSS，无框架无构建工具。中文版为主（index.html），英文版独立（en/index.html），共享同一套 CSS。内容完全来自 DESIGN.md。

**Tech Stack:** HTML5, CSS3, GitHub Pages

---

## 验证方式

每个 Task 完成后，用浏览器打开本地文件验证：`open /Users/rei/yves/AI4S/AI4S/index.html`

---

## Task 1：搭建目录结构与 CSS 基础

**目标：** 创建所有文件骨架，完成样式系统

**Files:**
- Create: `assets/style.css`
- Create: `index.html`（骨架）
- Create: `en/index.html`（骨架）

**Step 1: 创建 assets/style.css**

完整样式，包含：
- CSS 变量（颜色、字体、间距）
- 正文排版（中文/英文字体栈）
- 响应式布局（max-width: 720px，居中）
- 标题层级、引用块、代码块、表格样式
- 语言切换链接（固定右上角）
- 场景卡片样式
- 移动端适配（max-width: 600px）

核心 CSS 变量：
```css
:root {
  --bg: #fafaf8;
  --text: #1a1a1a;
  --accent: #2563eb;
  --muted: #6b7280;
  --border: #e5e7eb;
  --code-bg: #f3f4f6;
  --quote-border: #d1d5db;
}
```

**Step 2: 创建 index.html 骨架**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>用 AI 做科研：非计算机课题组实用入门</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <nav class="lang-switch"><a href="en/">English</a></nav>
  <main>
    <!-- 内容填入 Task 2-8 -->
  </main>
</body>
</html>
```

**Step 3: 创建 en/index.html 骨架**

结构同上，lang="en"，链接回 `../`

**Step 4: 浏览器打开验证**

`open /Users/rei/yves/AI4S/AI4S/index.html` — 应看到空白页面，样式加载无报错

---

## Task 2：中文版 — 开篇引子 + 第一节

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §开篇引子、§第一节

**Step 1: 写入 header 区域**

```html
<header>
  <h1>用 AI 做科研：非计算机课题组实用入门</h1>
</header>
```

**Step 2: 写入开篇引子**

- `<blockquote>` 包裹"16个月。41倍。"段落
- 加粗"判断力"、"如何把你已有的专业判断力，接上 AI 的执行力"

**Step 3: 写入第一节**

标题 `<h2>你现在在用 AI 做什么</h2>`，正文 `<p>` 段落

**Step 4: 浏览器验证**

排版、引用块样式是否正确

---

## Task 3：中文版 — 第二节：差在哪里

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §第二节

**Step 1: 写入第二节**

- 标题 `<h2>差在哪里</h2>`
- 4 个痛点用 `<ul>` 列表
- 核心比喻单独 `<blockquote>`

**Step 2: 浏览器验证**

列表和引用块渲染是否美观

---

## Task 4：中文版 — 第三节：AI 终端智能体是什么

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §第三节

**Step 1: 写入第三节**

- 标题 `<h2>AI 终端智能体是什么</h2>`
- "之前 vs 现在"对比，用两段 `<p>` 或 `<div class="compare">`
- "审批者"角色说明

**Step 2: 浏览器验证**

---

## Task 5：中文版 — 第四节：工具选哪个

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §第四节

**Step 1: 写入工具对比表**

`<table>` 包含 Kimi Code / Cursor / Claude Code + Kimi API 三行

**Step 2: 写入推荐逻辑**

`<ol>` 有序列表，三条决策路径

**Step 3: 写入 Kimi 故事**

`<blockquote>` 包裹 Cursor + Kimi 新闻段落

**Step 4: 写入省钱操作代码块**

```html
<pre><code>export ANTHROPIC_BASE_URL="https://api.moonshot.cn/anthropic"
export ANTHROPIC_API_KEY="你的 Kimi API Key"</code></pre>
```

**Step 5: 浏览器验证**

表格、代码块样式是否清晰

---

## Task 6：中文版 — 第五节：课题组能用来做什么

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §第五节（5个场景）

**Step 1: 写入 5 个场景**

每个场景结构：
```html
<div class="scenario">
  <h3>场景一：批量处理数据文件</h3>
  <blockquote>对话示例...</blockquote>
</div>
```

**Step 2: 写入一句话总结**

`<p class="summary">` 加粗

**Step 3: 浏览器验证**

5 个场景卡片视觉区分是否清晰

---

## Task 7：中文版 — 第六节 + 第七节 + 结尾

**Files:**
- Modify: `index.html`

**内容来源：** DESIGN.md §第六节、§第七节、§结尾升华

**Step 1: 写入第六节 — Skills**

- `<h2>进一步扩展：Skill 与 MCP 生态</h2>`
- Skills 示例用 `<ul>`，每项 `<code>/投稿格式</code>` 等
- "为什么生态很重要" `<blockquote>`

**Step 2: 写入 MCP 表格**

`<table>` 包含 Notion/GitHub/邮件/文献数据库 4 行

**Step 3: 写入第七节延伸资源**

`<h2>延伸资源</h2>` + 分组链接列表

**Step 4: 写入结尾升华**

`<blockquote class="closing">` 包裹结尾三段

**Step 5: 写入 footer**

来源说明、致谢 HappyCapy

**Step 6: 浏览器验证整页**

从头到尾通读，检查排版、链接、引用块

---

## Task 8：英文版 en/index.html

**Files:**
- Modify: `en/index.html`

**说明：** 英文版不需要严格同步，内容更通用，去掉 Kimi-only 的部分，保留核心逻辑

**Step 1: 写入英文版完整内容**

按中文版结构翻译，调整：
- 标题：*Using AI for Research: A Practical Starter Guide*
- 去掉 MiniMax 故事（争议性），保留 Cursor+Kimi 故事
- 推荐工具顺序：Cursor → Claude Code → Claude Code + Kimi API（国内读者可选）
- 语言切换链接指向 `../`

**Step 2: 浏览器验证**

`open /Users/rei/yves/AI4S/AI4S/en/index.html`

---

## Task 9：细节打磨与 GitHub Pages 准备

**Files:**
- Create: `README.md`

**Step 1: 检查所有内部链接**

- `index.html` → `en/` 链接
- `en/index.html` → `../` 链接
- `assets/style.css` 路径（注意 en/ 子目录需要 `../assets/style.css`）

**Step 2: SEO meta 标签**

在两个 HTML 的 `<head>` 补充：
```html
<meta name="description" content="...">
<meta property="og:title" content="...">
```

**Step 3: 移动端测试**

浏览器开发者工具切换为手机视图，检查响应式布局

**Step 4: 写 README.md**

简短说明项目用途、如何部署到 GitHub Pages

---

## 执行顺序总结

```
Task 1 (CSS + 骨架) → Task 2-7 (中文内容，可顺序执行) → Task 8 (英文版) → Task 9 (收尾)
```

Tasks 2-7 按顺序执行（每个依赖上一个的 HTML 状态）。

---

**计划完成，保存至 `docs/plans/2026-03-24-ai4s-website.md`**

**两种执行选项：**

**1. Subagent 驱动（本 session）** — 每个 Task 派一个新 subagent，Task 间可 review，迭代快

**2. 独立 session** — 新开 session，使用 superpowers:executing-plans，批量执行带检查点

**选哪种？**
