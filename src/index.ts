import chalk from 'chalk';
import { generateStory } from './story';
import { buildPrompt } from './prompt';
import { inputs } from './inputs';

export interface StoryInputs {
  genre: string;
  character: string;
  setting: string;
  plotTwist?: string;
}

async function main() {
  console.log(chalk.blue.bold('\n--- AI Story Prompt Generator ---\n'));

  try {
    const answers = await inputs(); 
    const prompt = buildPrompt(answers);
    console.log(chalk.green('\nConnecting to Ollama and generating your story...\n'));

    await generateStory(prompt);
  } catch (error: any) {
    if (error.code === 'ECONNREFUSED') {
      console.error(chalk.red('\nError: Could not connect to Ollama. Please ensure Ollama is running at http://localhost:11434'));
    } else {
      console.error(chalk.red('\nAn unexpected error occurred:'), error.message);
    }
  }
}

main();
