import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';  
import '@testing-library/jest-dom';

import CadastroForm from './CadastroForm';

describe('CadastroForm', () => {
  test('deve renderizar os campos de nome, email, senha e botão de cadastro', () => {
    render(
      <MemoryRouter>
        <CadastroForm onSubmit={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  test('deve submeter o formulário com os dados corretos', async () => {
    const mockOnSubmit = jest.fn();

    render(
      <MemoryRouter>
        <CadastroForm onSubmit={mockOnSubmit} />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByLabelText(/Nome:/i), 'João');
    await userEvent.type(screen.getByLabelText(/Email:/i), 'joao@example.com');
    await userEvent.type(screen.getByLabelText(/Senha:/i), 'senha123');

    await userEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      nome: 'João',
      email: 'joao@example.com',
      senha: 'senha123',
    });
  });

  test('deve limpar os campos após a submissão bem-sucedida', async () => {
    const mockOnSubmit = jest.fn();

    render(
      <MemoryRouter>
        <CadastroForm onSubmit={mockOnSubmit} />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByLabelText(/Nome:/i), 'Maria');
    await userEvent.type(screen.getByLabelText(/Email:/i), 'maria@example.com');
    await userEvent.type(screen.getByLabelText(/Senha:/i), 'abc456');

    await userEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    expect(screen.getByLabelText(/Nome:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Email:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Senha:/i)).toHaveValue('');
  });
});
