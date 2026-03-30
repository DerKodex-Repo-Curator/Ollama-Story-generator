"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const story_1 = require("./story");
const prompt_1 = require("./prompt");
async function main() {
    console.log(chalk_1.default.blue.bold('\n--- AI Story Prompt Generator ---\n'));
    try {
        const answers = await inquirer_1.default.prompt([
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
        const prompt = (0, prompt_1.buildPrompt)(answers);
        console.log(chalk_1.default.green('\nConnecting to Ollama and generating your story...\n'));
        await (0, story_1.generateStory)(prompt);
    }
    catch (error) {
        if (error.code === 'ECONNREFUSED') {
            console.error(chalk_1.default.red('\nError: Could not connect to Ollama. Please ensure Ollama is running at http://localhost:11434'));
        }
        else {
            console.error(chalk_1.default.red('\nAn unexpected error occurred:'), error.message);
        }
    }
}
main();
