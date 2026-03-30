"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStory = generateStory;
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
async function generateStory(prompt) {
    const model = 'llama3'; // Defaulting to llama3, but could be made configurable.
    const response = await axios_1.default.post('http://localhost:11434/api/generate', {
        model: model,
        prompt: prompt,
        stream: true
    }, {
        responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
        response.data.on('data', (chunk) => {
            const chunkStr = chunk.toString();
            const lines = chunkStr.split('\n');
            for (const line of lines) {
                if (!line.trim())
                    continue;
                try {
                    const json = JSON.parse(line);
                    if (json.response) {
                        process.stdout.write(json.response);
                    }
                    if (json.done) {
                        console.log('\n\n' + chalk_1.default.green.bold('--- Generation complete ---'));
                        resolve(true);
                    }
                }
                catch (e) {
                    // Chunk might be incomplete, ignore parse errors for now
                }
            }
        });
        response.data.on('error', reject);
    });
}
