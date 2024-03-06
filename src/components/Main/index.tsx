import {
  ButtonBuscar, ButtonOferecer, ContainerMain,
  TitleContainer, MainStyled, SectionUm, Div,
  BlueDiv, MediumPinkDiv, SmallPinkDiv, LargePinkDiv, YellowDiv, Border,
} from './styles';
import imgHero from '../../images/ImagemHero.png';
import { buscar, oferecer } from '../../utils/links';

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
                Junte-se à
                <br />
                nossa comunidade
              </h2>
              <Border />
              <p>
                Encontre atendimento clínico de qualidade ou entre para
                o time de profissionais da Lacrei Saúde.
              </p>
            </TitleContainer>
            <SmallPinkDiv />
            <div className="button-container" >
              <a href={buscar}>
                <ButtonBuscar>Buscar atendimento</ButtonBuscar>
              </a>
              <a href={oferecer}>
                <ButtonOferecer>Oferecer atendimento</ButtonOferecer>
              </a>
            </div>
            <YellowDiv />
          </SectionUm>
          <BlueDiv />
          <img src={imgHero} alt="" />
        </MainStyled>
        <LargePinkDiv />
      </ContainerMain>
    </Div>
  );
}

export default Main;
