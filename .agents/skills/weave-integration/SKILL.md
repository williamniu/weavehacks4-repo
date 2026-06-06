---
name: weave-integration
description: Add or preserve W&B Weave instrumentation in this repo. Use when wiring model calls, traces, evals, or hackathon demo flows in weavehacks4-repo.
---

# Weave integration

## Quick start
1. Read `src/lib/weave.ts`.
2. Keep `WANDB_API_KEY`, `WANDB_ENTITY`, and `WANDB_PROJECT` in sync with `.env.example`.
3. Initialize Weave before model calls.
4. Prefer traced clients or `weave.op` for demo-critical paths.

## Repo workflow
- Use `npm run weave:smoke -- "idea"` for a quick trace sanity check.
- Use `npm run dev -- "problem statement"` for the OpenAI-backed example path.
- Put future datasets and scorers under `evals/`.
- Keep sponsor usage explicit in `README.md` and submission docs.

## What good looks like
- The main user flow shows up clearly in Weave.
- At least one path is easy to demo live in under 3 minutes.
- Eval or scoring hooks exist before the last hour of the hackathon.
