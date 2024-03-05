import { BsPerson } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import logo from '../../images/logo_header.png';
import { HeaderStyled, ContainerHeader, LoginMobile, Login } from './styles';

const ajuda = "https://lacreisaude.com.br/ajuda/";
const quemSomos = "https://lacreisaude.com.br/quem-somos/";
const entrar = "https://lacreisaude.com.br/selecionar-pessoa/";

function Header() {
  return (
    <ContainerHeader>
      <HeaderStyled id="inicio">
        <img src={logo} alt="Logo Lacrei Saúde" />
        <div>
          <LoginMobile>
            <a href={ajuda}><AiOutlineQuestionCircle /></a>
            <a href={entrar}>
              <button><BsPerson /></button>
            </a>
          </LoginMobile>
          <Login>
            <a href={quemSomos}>Quem somos</a>
            <a href={ajuda}>Ajuda</a>
            <a href={entrar}>
              <button>Entrar</button>
            </a>
          </Login>
        </div>
      </HeaderStyled>
    </ContainerHeader>
  );
}

export default Header;
