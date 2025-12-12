import { BrowserRouter } from 'react-router-dom'; 
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple div', () => {
  render(
    <BrowserRouter>
      <div>Teste</div>
    </BrowserRouter>
  );
  expect(screen.getByText('Teste')).toBeInTheDocument();
});