import {
  ContainerFooter, FooterStyled, Div,
  InitialLink, BorderFooter, IconsMedias
} from './styles';
import logo from '../../images/log.png';
import face from '../../images/facebook.png';
import link from '../../images/linkdIn.png';
import insta from '../../images/instagram.png';
import emailIcon from '../../images/email.png';
import button from '../../images/button.png';
import {
  facebook, instagram, linkdIn, email,
  quemSomos, missao, proposito, acessibilidade,
  termos, privacidade, direitos, buscar, oferecer,
} from '../../utils/links';

function Footer() {

  return (
    <Div>
      <FooterStyled>
        <ContainerFooter>
          <IconsMedias>
            <img src={logo} alt="Logo" />
            <div>
              <a href={facebook} target="blank">
                <img src={face} alt="Facebook" />
              </a>
              <a href={instagram} target="blank">
                <img src={insta} alt="Instagram" />
              </a>
              <a href={linkdIn} target="blank">
                <img src={link} alt="LinkdIn" />
              </a>
              <a href={email} target="blank">
                <img src={emailIcon} alt="E-mail" />
              </a>
            </div>
          </IconsMedias>
          <ul>
            <h2>Lacrei Saúde</h2>
            <a href={quemSomos}><li>Quem Somos</li></a>
            <a href={proposito}><li>Nosso Propósito</li></a>
            <a href={missao}>
              <li>Missão, Visão e Valores</li>
            </a>
            <a href={acessibilidade}><li>Acessibilidade</li></a>
          </ul>
          <ul>
            <h2>Saúde</h2>
            <a href={buscar}><li>Buscar atendimento</li></a>
            <a href={oferecer}><li>Oferecer atendimento</li></a>
          </ul>
          <ul>
            <h2>Segurança e Privacidade</h2>
            <a href={privacidade}><li>Política de Provacidade</li></a>
            <a href={termos}><li>Termos de Uso</li></a>
            <a href={direitos}><li>Direitos de Titular</li></a>
          </ul>
        </ContainerFooter>
        <BorderFooter />
        <ContainerFooter>
          <div className="container-paragraph">
            <p>
              A Lacrei não oferece tratamento médico emergencial.
              Em caso de emergência procure o hospital mais próximo.
            </p>
            <p>
              Em caso de problemas psicológicos,
              ligue para 188 (CVV) ou acesse o site
              <a href="https://lacreisaude.com.br/www.cvv.org.br">
                www.cvv.org.br
              </a>
            </p>
            <p>
              Copyright © 2021 Lacrei.
              Todos os direitos reservados. CNPJ: 51.265.351/0001-65
            </p>
          </div>
          <div>
            <span>CNPJ: 51.265.351/0001-65</span>
            <InitialLink>
              <a href='#inicio'>
                <img className="button-initial" src={button}
                  alt="Navega para o início da página" />
              </a>
            </InitialLink>
          </div>
        </ContainerFooter>
      </FooterStyled>
    </Div>
  );
}

export default Footer;
