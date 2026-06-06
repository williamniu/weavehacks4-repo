# Claude Code instructions

Read `AGENTS.md` first.

## Repo defaults
- TypeScript/Node starter
- Weave init lives in `src/lib/weave.ts`
- Project MCP config lives in `.mcp.json`
- Repo skill lives in `.claude/skills/weave-integration/SKILL.md`

## Commands
- `npm run typecheck`
- `npm run weave:smoke -- "your idea here"`
- `npm run dev -- "your prompt here"`

## Expectations
- Keep sponsor usage visible in code and docs.
- Prefer edits that make traces, evals, or demo flows easier to inspect.
- If you change setup, update `README.md` and `docs/agent-setup.md`.
