# App Components

This directory contains the main application components.

## Components

### App
The main application component that renders the CV.

#### Props
The App component accepts the CV data structure as props:
```typescript
interface CvData {
  name: string;
  surname: string;
  profile: {
    role: string;
    description: string;
  };
  contact: Array<{
    type: string;
    link: string;
    text: string;
  }>;
  experience: Array<{
    company: string;
    period: {
      start: string;
      end: string;
    };
    role: string;
    description: string;
    technologies: Array<{
      name: string;
      hideFromSkills?: boolean;
    }>;
  }>;
  // ... other CV sections
}
```

### ResumeItem
A reusable component for rendering CV sections like experience, education, etc.

### Section
A layout component for rendering CV sections with consistent styling.

## Styling
Components use CSS Modules for scoped styling. All styles are located in the same directory as their components.