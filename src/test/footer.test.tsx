import { screen, render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Testes - Componente Footer', () => {
  it('Verifica presença do h2', () => {
    render(<Footer />);
    const lacreiSaude = screen.getByRole('heading', { name: /lacrei saúde/i });
    expect(lacreiSaude).toBeInTheDocument();

    const seguranca = screen.getByRole('heading', { name: /segurança e privacidade/i });
    expect(seguranca).toBeInTheDocument();
  });
});
