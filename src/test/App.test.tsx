import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../components/App/App';
import cvData from '../data/cv.json';

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(<App {...cvData} />);
    expect(container).toMatchSnapshot();
  });

  it('contains the name Johan Gustafsson', () => {
    render(<App {...cvData} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Johan');
    expect(heading).toHaveTextContent('Gustafsson');
  });
});