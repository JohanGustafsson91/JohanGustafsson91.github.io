# Personal CV Website

A modern, responsive CV website built with React, TypeScript, and Vite. View it live at [johangustafsson91.github.io](https://johangustafsson91.github.io/).

## Technology Stack

- React with TypeScript
- Vite for build tooling
- CSS Modules for styling
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Development

### Prerequisites

- Node.js (v20 or later)
- pnpm (v8 or later)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/JohanGustafsson91/JohanGustafsson91.github.io.git
cd JohanGustafsson91.github.io
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

## Testing

The project uses Vitest and React Testing Library for testing. Tests are automatically run in GitHub Actions before deployment.

### Writing Tests

- Test files are located next to their components
- Snapshot tests capture UI changes
- Use React Testing Library for component testing
- Coverage reports are generated but not committed

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Runs linting and tests
2. Creates a production build
3. Deploys to GitHub Pages

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── data/          # CV data in JSON format
│   ├── styles/        # Global styles
│   └── test/          # Test setup and utilities
├── .github/
│   └── workflows/     # GitHub Actions configuration
└── public/           # Static assets
```

## Architecture Decisions

- CV data is stored in JSON for easy updates
- Component-based architecture for maintainability
- CSS Modules for scoped styling
- Automated deployment with GitHub Actions
- Strong type safety with TypeScript

## License

MIT License - feel free to use this as a template for your own CV!

