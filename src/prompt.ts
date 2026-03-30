import { StoryInputs } from "./index";

export function buildPrompt(inputs: StoryInputs): string {
  let prompt = `Write a creative short story or scene.
Genre: ${inputs.genre}
Main character: ${inputs.character}
Setting: ${inputs.setting}`;

  if (inputs.plotTwist) {
    prompt += `\nPlot twist: ${inputs.plotTwist}`;
  }

  prompt += `\n\nStory:`;
  return prompt;
}