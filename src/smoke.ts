import "dotenv/config";

import { getWeaveProjectName, initWeave, weave } from "./lib/weave.js";

const scoreIdea = weave.op(function scoreIdea(idea: string) {
  const normalized = idea.toLowerCase();

  return {
    idea,
    sponsorVisibility: normalized.includes("trace") || normalized.includes("eval") || normalized.includes("weave"),
    likelyDemoableThisWeekend: idea.length < 180,
    note: "If this runs and appears in Weave, your basic instrumentation path is working.",
  };
});

const idea = process.argv.slice(2).join(" ").trim() || "An agent with visible traces and a crisp demo loop.";

await initWeave();

console.log(`Tracing to W&B Weave project: ${getWeaveProjectName()}`);
console.log();
console.log(JSON.stringify(scoreIdea(idea), null, 2));
