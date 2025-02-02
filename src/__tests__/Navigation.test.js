import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

// Test to check if Navigation is rendered with the correct aria-label
it('renders Navigation component with main navigation aria-label', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const navElement = screen.getByRole('navigation', { name: /main navigation/i });
  expect(navElement).toBeInTheDocument();
}); 