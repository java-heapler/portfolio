import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

// A component that throws an error
const ProblemChild = () => {
  throw new Error('Test error');
};

// Test to verify that ErrorBoundary catches error and displays fallback UI
test('ErrorBoundary displays fallback UI when a child throws', () => {
  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  const fallbackMessage = screen.getByText(/something went wrong/i);
  expect(fallbackMessage).toBeInTheDocument();
}); 