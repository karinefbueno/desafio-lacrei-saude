import styled from 'styled-components';

export const MainStyled = styled.main`
height: auto;
display: flex;
background-color: white;

@media (max-width: 1100px) {
  flex-direction: column;

  img {
    width: auto;
    height: auto;
  }
}`;

export const Div = styled.div`
min-width: 430px;
display: flex;
justify-content: center;
`;

export const ContainerMain = styled.div`
background-color: white;
display: flex;
flex-direction: column;
width: 85%;
justify-content: center;
`;

export const SectionUm = styled.section`
/* margin-top: 50px; */
flex-grow: 2;
display: flex;
flex-direction: column;
 width: auto;

h2{
color:rgba(19, 19, 19, 1);
font-weight: 700;
margin-top: 0px;
font-size: 48px;
text-align: start;
} 

span {
color: rgba(1, 135, 98, 1);
height: 6px;
};

p {
margin-top:16px ;
color:rgba(45, 45, 45, 1);
font-weight: 400;
max-width: 430px;
font-size: 24px;
text-align: start;
}

@media (max-width: 590px) {

   .title {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }  


  .button-container {
    display: flex;
    flex-direction: column;
    margin: 8px;
    gap: 16px;
    /* justify-content: center; */
    align-items: center;
  }

    h2 {
    font-size: 24px;
      text-align: start;
  }

  p {
    font-size: 16px;
      text-align: start;
  }
}`;

export const BlueDiv = styled.div`

@media (min-width: 1100px) {

background: rgba(143, 0, 255, 0.15);
margin-bottom: 40px;
margin-left: 512px;
width: 173px;
height:491px;
position: absolute;
}`;

export const MediumPinkDiv = styled.div`
height: 48px;
width: 100%;
background-color: rgba(255, 0, 0, 0.1);
`;

export const SmallPinkDiv = styled.div`
height: 32px;
width: auto;
background-color: rgba(255, 0, 0, 0.1);
`;

export const LargePinkDiv = styled.div`
height: 64px;
width: auto;
background-color: rgba(255, 0, 0, 0.1);
`;

export const YellowDiv = styled.div`
height: 80px;
width: auto;
background-color: rgba(255, 214, 0, 0.1);
`;

export const TitleContainer = styled.div`
margin-left: 24px;
height: 251px;
width: auto;
`;

export const ButtonBuscar = styled.button`
  color: white;
  background-color: rgba(1, 135, 98, 1);
  border: none;
  margin-right: 24px;
  margin-left: 24px;
`;

export const ButtonOferecer = styled.button`
  border: 2px solid rgba(1, 135, 98, 1);
  color: rgba(1, 135, 98, 1);
  background-color: white;
`;
