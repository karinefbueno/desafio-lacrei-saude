import {
  ButtonBuscar, ButtonOferecer, ContainerMain,
  TitleContainer, MainStyled, SectionUm, Div,
  SectionDois, MediumPinkDiv, SmallPinkDiv, LargePinkDiv, YellowDiv,
} from './styles';
import imgHero from '../../images/ImagemHero.png';

function Main() {
  return (
    <Div>
      <ContainerMain>
        <MediumPinkDiv />
        <MainStyled>
          <SectionUm>
            <YellowDiv />
            <TitleContainer className="title" >
              <h2>
                Junte-se à <br />
                nossa comunidade
              </h2>
              <span>___________________</span>
              <p>
                Encontre atendimento clínico de qualidade ou entre para
                o time de profissionais da Lacrei Saúde.
              </p>
            </TitleContainer>
            <SmallPinkDiv />
            <div className="button-container" >
              <a href="https://paciente.lacreisaude.com.br/"><ButtonBuscar>Buscar atendimento</ButtonBuscar></a>
              <a href="https://profissional.lacreisaude.com.br/"><ButtonOferecer>Oferecer atendimento</ButtonOferecer></a>
            </div>
            <YellowDiv />
          </SectionUm>
          <SectionDois />
          <img src={imgHero} alt="" />
        </MainStyled>
        <LargePinkDiv />
      </ContainerMain>
    </Div>
  );
}

export default Main;
