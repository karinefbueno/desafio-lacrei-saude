import { screen, render } from '@testing-library/react';
import Main from '../components/Main';

describe('Testes - Componente Main', () => {
  it('Verifica presença do title', () => {
    render(<Main />);
    const title = screen.getByRole('heading', { name: /junte-se à nossa comunidade/i });
    expect(title).toBeInTheDocument();
  });
});
