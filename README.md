# Archie

Archie is a Node.js CLI that reads your codebase, analyzes Git history, and auto-generates ARCHITECTURE.md with Gemini 2.5 Flash. It installs a post-commit hook so meaningful commits can update your architecture docs automatically without a manual workflow.

## Links

- Website: https://archie.abhishekdev.tech/
- npm package: https://www.npmjs.com/package/archie-ai
- GitHub: https://github.com/Abhishek-Sonje/Archie

## Install

```bash
npm install -g archie-ai
```

Initialize your first architecture doc:

```bash
archie init
```

Install the post-commit hook for automatic updates:

```bash
archie hook
```

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What Archie does

- Reads your source files and recent Git history
- Sends the context to Gemini 2.5 Flash for analysis
- Writes or updates ARCHITECTURE.md in a surgical, minimal way
- Keeps the workflow lightweight with a post-commit hook
