import * as weave from "weave";

export function getWeaveProjectName(): string {
  const project = process.env.WANDB_PROJECT?.trim() || "weavehacks4-your-idea";
  const entity = process.env.WANDB_ENTITY?.trim();
  return entity ? `${entity}/${project}` : project;
}

export function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getOpenAIModel(): string {
  return process.env.OPENAI_MODEL?.trim() || "gpt-4.1-mini";
}

let initialized = false;

export async function initWeave(): Promise<void> {
  if (initialized) {
    return;
  }

  requireEnv("WANDB_API_KEY");
  await weave.init(getWeaveProjectName());
  initialized = true;
}

export { weave };
