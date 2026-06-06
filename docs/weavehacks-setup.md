# WeaveHacks 4 setup

Source: participant logistics page from W&B.

## Quick facts
- Address: `400 Alabama Street`
- Doors open: `9:00 AM`
- Kickoff: `10:30 AM`
- Hacking starts: `11:15 AM`
- Saturday close: `9:00 PM`
- Submission deadline: `1:00 PM Sunday`
- Judging starts: `1:30 PM Sunday`
- Team size: up to `5`
- Wi‑Fi: `W&B Guest`
- Wi‑Fi password: `Gumption`
- Zoom share link: `https://share.zoom.us`

## Prize eligibility requirements
- Public GitHub repo
- Built during the hackathon
- Must use W&B Weave
- Must demo in person
- Need to be there at some point Saturday

## Free credits / resources
- Weave / OpenAI / Cursor credits form: https://forms.gle/nZKDXurfPtf2p2L29
- W&B inference credits form: https://forms.gle/zgNmSEAoZFV7bCDP6
- Discord: https://discord.gg/weights-biases-979771698612154459
- Weave docs: https://weave-docs.wandb.ai/
- Weave MCP docs: https://weave-docs.wandb.ai/guides/integrations/mcp/
- Example repo: https://github.com/altryne/mcp-otel

## Setup checklist
- [ ] Confirm the repo stays public
- [ ] Create / log into your W&B account
- [ ] Create a Weave project name
- [ ] Fill the credits form
- [ ] Claim credits from Alex or Anna onsite
- [ ] Join the Discord
- [ ] Install Zoom or confirm browser share works
- [ ] Pick stack + idea
- [ ] Add Weave tracing before building too much
- [ ] Prepare a <2 min screen recording on Sunday

## Suggested W&B project naming
Use something stable and easy to paste into your demo/submission:

- `bo-bi-beep/weavehacks4-<idea>`
- `weavehacks4-<idea>`

## Minimal Weave setup

### Python
```bash
python -m venv .venv
source .venv/bin/activate
pip install weave openai
```

```py
import weave

weave.init("your-wandb-entity/your-project")

@weave.op
def run_agent(user_input: str) -> str:
    return f"TODO: handle {user_input}"
```

### TypeScript
```bash
npm init -y
npm install weave openai
```

```ts
import * as weave from "weave";

await weave.init("your-wandb-entity/your-project");

const runAgent = weave.op(async function runAgent(userInput: string) {
  return `TODO: handle ${userInput}`;
});
```

## Submission notes to remember
Your final submission should include:
- Public GitHub repo
- Team member names
- 2–3 sentence summary
- What it does / why it matters
- How it is built
- Which sponsor tools and protocols you used
- Weave link
- Optional but recommended: short demo video

## Judging optimization
Judges care about:
- Creativity
- Utility
- Technical execution
- Sponsor usage
- Multi-agent harness sophistication

So if you are choosing between features, bias toward:
1. a crisp demo,
2. visible agent traces/evals,
3. one sponsor tool used clearly and meaningfully.

## One ambiguity to verify onsite
The logistics page mentions both Cerebral Valley and DevPost in different places. Plan for the Sunday submission link from organizers and verify the actual platform onsite.
