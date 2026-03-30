import inquirer from 'inquirer';
import { StoryInputs } from './index';

export async function inputs(){
        const answers = await inquirer.prompt<StoryInputs>([
      { 
        type: 'input',
        name: 'genre',
        message: 'Enter the genre (e.g., fantasy, sci-fi, horror):',
        default: 'sci-fi'
      },
      {
        type: 'input',
        name: 'character',
        message: 'Enter the main character name & trait (e.g., Aria, a bold engineer):',
        default: 'Aria, a bold engineer'
      },
      {
        type: 'input',
        name: 'setting',
        message: 'Enter the setting (e.g., an underwater city in 2150):',
        default: 'an underwater city in 2150'
      },
      {
        type: 'input',
        name: 'plotTwist',
        message: 'Enter a plot twist (optional):'
      }
    ]);
    return answers;
}