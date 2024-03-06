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

export const Border = styled.div`
width: 160px;
border: 1px solid rgba(1, 135, 98, 1);
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

export const PinkBox = styled.div`
width: auto;
background-color:  rgba(255, 0, 0, 0.1);
`;
export const MediumPinkDiv = styled(PinkBox)`
height: 48px;
`;

export const SmallPinkDiv = styled(PinkBox)`
height: 32px;
`;

export const LargePinkDiv = styled(PinkBox)`
height: 64px;
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

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  height:48px;
  background-color: ${(props) => props.color ? props.color : 'rgba(1, 135, 98, 1)'};
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
`

export const ButtonBuscar = styled(Button)`
color: white;
border: none;
margin-right: 24px;
margin-left: 24px;
`;

export const ButtonOferecer = styled(Button)`
border: 2px solid rgba(1, 135, 98, 1);
color: rgba(1, 135, 98, 1);
background-color: white;
`;
