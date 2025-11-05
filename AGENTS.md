# Development Guidelines for Agents

## Commands
- Development: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Deploy: `pnpm deploy` (deploys to GitHub Pages)

## Code Style
- Use TypeScript with strict mode and explicit type definitions
- Write functional React components using arrow function syntax
- Define prop interfaces explicitly at the bottom of files
- Use CSS modules for styling
- Destructure props in component parameters
- Place utility functions below component definitions
- Use trailing commas in multi-line constructs
- Organize components in separate files for maintainability
- Follow ESLint rules which enforce React hooks best practices

## File Organization
- Components: `src/components/[ComponentName]/`
- Component structure: Main component + subcomponents in same directory
- Data files: `src/data/`
- Global styles: `src/styles/`

## Core Principles
- KISS (Keep It Simple, Stupid) - Prefer simple, readable solutions over clever complexity
- YAGNI (You Aren't Gonna Need It) - Only implement what is needed now
- Functional Programming - Use pure functions, immutability, and composition where possible

## Build Configuration
- TypeScript targeting ES2020 with modern module resolution
- Vite for development and production builds
- Strict type checking with noUnusedLocals and noUnusedParameters enabled