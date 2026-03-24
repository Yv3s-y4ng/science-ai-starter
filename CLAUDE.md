# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static documentation website project: **《用 AI 做科研：非计算机课题组实用入门》** (Using AI for Scientific Research: A Practical Introduction for Non-CS Research Groups).

- **Target audience**: Science/engineering researchers who use Origin for data analysis and know basic Python/R but haven't gone deep
- **Goal**: "Seed interest + onboard": readers finish and immediately want to try, knowing their first step
- **Output**: GitHub Pages static site, Chinese/English bilingual (two independent pages, ~1800–2200 characters of body text)
- **Structure approach**: Problem-driven (entering from reader pain points)

## Planned File Structure

```
/
├── index.html          # Chinese main version
├── en/
│   └── index.html      # English version (may lag behind Chinese)
├── assets/
│   ├── style.css
│   └── screenshots/    # Accompanying images
└── README.md
```

## i18n Approach

No i18n framework. Two independent HTML pages:
- Chinese version is primary; includes more coverage of domestic tools (Kimi)
- English version is more general; does not need to stay in strict sync with Chinese
- Language toggle link in the top-right corner of each page

## Content Structure (from DESIGN.md)

The guide has 7 sections:
1. **Opening hook** — "16 months, 41x" productivity stat; the key thesis: AI gives execution, you bring judgment
2. **How you currently use AI** — copy-paste loop, "you're doing AI's labor"
3. **What's missing** — AI can't access your files, can't truly run code, loses memory each session
4. **What an AI terminal agent is** — it operates your computer directly; you become approver not executor
5. **Which tools to use** — Kimi Code / Cursor / Claude Code + Kimi API; decision logic and cost comparison
6. **What your research group can use it for** — 5 concrete scenarios: batch data processing, chart generation, literature-assisted method design, journal submission formatting, inheriting legacy code
7. **Skills & MCP ecosystem** — reusable skill packs, MCP integrations (Notion, GitHub, email, literature DBs)

## Key Tool Recommendation (in the guide)

The guide recommends Claude Code with Kimi API as cost-effective setup:
```bash
export ANTHROPIC_BASE_URL="https://api.moonshot.cn/anthropic"
export ANTHROPIC_API_KEY="<Kimi API Key>"
```

## Reference Materials in Repo

- `DESIGN.md` — Full content design spec (Chinese); the authoritative source for all page content
- `一些资源推荐.txt` — Brief resource notes (superpowers, k-dense libraries, happycapy platform)
- `happycapy-docs-main.zip` — HappyCapy platform documentation (acknowledge prominently in credits)
- `How-Anthropic-teams-use-Claude-Code_v2.pdf` — Reference material on Anthropic's internal Claude Code usage
