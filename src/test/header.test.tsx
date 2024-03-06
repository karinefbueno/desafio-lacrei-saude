import { screen, render } from '@testing-library/react';
import Header from '../components/Header';

describe('Testes - Componente Header', () => {
  it('Verifica presença dos botões no header', () => {
    render(<Header />);
    const entrar = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(entrar).toBeInTheDocument();
  });
});
