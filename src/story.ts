import chalk from 'chalk';
import axios from 'axios';

export async function generateStory(prompt: string) {
  const model = 'llama3'; // Defaulting to llama3, but could be made configurable.

  const response = await axios.post('http://localhost:11434/api/generate', {
    model: model,
    prompt: prompt,
    stream: true
  }, {
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    response.data.on('data', (chunk: Buffer) => {
      const chunkStr = chunk.toString();
      const lines = chunkStr.split('\n');
      
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const json = JSON.parse(line);
          if (json.response) {
            process.stdout.write(json.response);
          }
          if (json.done) {
            console.log('\n\n' + chalk.green.bold('--- Generation complete ---'));
            resolve(true);
          }
        } catch (e) {
          // Chunk might be incomplete, ignore parse errors for now
        }
      }
    });

    response.data.on('error', reject);
  });
}