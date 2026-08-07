import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Root Integration', () => {
  it('renders application title without throwing errors', () => {
    render(<App />);
    expect(screen.getByText(/Siddhi Raj Portfolio 2026/i)).toBeInTheDocument();
  });
});
