import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renderiza o Header e a rota inicial / (GeoquizPage)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/header/i)).toBeInTheDocument(); 

    expect(screen.getByText(/geoquiz/i)).toBeInTheDocument(); 

  });

  test('renderiza página de login na rota /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument(); // ajuste conforme seu LoginPage
  });

  test('renderiza formulário de cadastro na rota /cadastro', () => {
    render(
      <MemoryRouter initialEntries={['/cadastro']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });
});
