# AI Story Prompt Generator CLI Walkthrough

The AI Story Prompt Generator is a CLI tool that collects creative inputs from the user and uses Ollama to generate a short story or scene.

## Key Features

- **Interactive CLI**: Collects Genre, Character, Setting, and an optional Plot Twist using `inquirer`.
- **Ollama Integration**: Sends requests to local Ollama instance (`/api/generate`) and streams the response back to the terminal.
- **Styled Output**: Uses `chalk` for clear and attractive terminal messages.

## Project Structure

- [src/index.ts](file:///c:/development/projects/story-typescript/src/index.ts): Contains the main logic, prompt building, and API interaction.
- [tsconfig.json](file:///c:/development/projects/story-typescript/tsconfig.json): Configured for TypeScript in a CommonJS environment.
- [package.json](file:///c:/development/projects/story-typescript/package.json): Includes scripts for starting, building, and serving the app.

## How to Run

1.  **Ensure Ollama is running**: Make sure you have Ollama installed and running at `http://localhost:11434`.
2.  **Pull the model**: Ensure you have the `llama3` model (or update the model name in [src/index.ts](file:///c:/development/projects/story-typescript/src/index.ts)).
    ```bash
    ollama pull llama3
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the app**:
    ```bash
    npm start
    ```

## Example Usage

When prompted, provide your story ideas:
- **Genre**: Fantasy
- **Character**: Elara, a wise mage
- **Setting**: A floating island in a storm
- **Plot Twist**: The island is actually a giant sleeping beast

The tool will then stream the generated story directly to your terminal.
