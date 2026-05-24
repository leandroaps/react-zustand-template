# React + TypeScript + Vite + Zustand + Tailwind

A modern, minimal starter template for building React applications with type safety, fast refresh, and state management.

## Features

- **React 19** - Latest version of React with concurrent rendering
- **TypeScript** - Static typing for better developer experience and code reliability
- **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **Zustand** - Lightweight state management with built-in persistence to `sessionStorage`
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code linting to maintain code quality standards
- **Vitest** - Fast unit testing framework with React Testing Library integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` with HMR enabled.

### Build

Create a production build:

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── api/              # API integration and services
├── app/              # Main App component
├── assets/           # Static assets
├── configuration/    # App configuration
├── pages/            # Page components
├── routes/           # Routing setup
├── shared/
│   ├── components/   # Reusable components
│   ├── css/          # Global styles
│   ├── hooks/        # Custom React hooks
├── store/            # Zustand store configuration
├── tests/            # Test files
└── main.tsx          # Application entry point
```

## State Management

This template uses **Zustand** for state management with automatic persistence to `sessionStorage`. The store is configured in `src/store/store.tsx`.

### Example Usage

```typescript
import { useStore } from "./store/store";

export function MyComponent() {
  const { count, inc } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
```

State is automatically persisted and restored across page refreshes within the same session.

## Styling

Tailwind CSS is configured for utility-first styling. Global styles are in `src/shared/css/tailwind.css`. Customize your theme in `tailwind.config.js` if needed.

## Deployment

Build the project and deploy the `dist` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
