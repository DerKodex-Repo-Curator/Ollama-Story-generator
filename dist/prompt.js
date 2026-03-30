"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPrompt = buildPrompt;
function buildPrompt(inputs) {
    let prompt = `Write a creative short story or scene in german in level b1.
Genre: ${inputs.genre}
Main character: ${inputs.character}
Setting: ${inputs.setting}`;
    if (inputs.plotTwist) {
        prompt += `\nPlot twist: ${inputs.plotTwist}`;
    }
    prompt += `\n\nStory:`;
    return prompt;
}
