import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '../components/layout/Header';
import { AppProviders } from '../providers/AppProviders';

describe('Header Navigation Component', () => {
  it('renders logo and navigation links correctly', () => {
    render(
      <AppProviders>
        <Header />
      </AppProviders>
    );

    expect(screen.getByText(/Siddhi Raj/i)).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();
  });
});
