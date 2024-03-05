import styled from 'styled-components';

export const ContainerHeader = styled.div`
display: flex;
justify-content:center;
align-items: center;
`;

export const HeaderStyled = styled.header`
font-weight: 700;
font-family: "Nunito";
width: 85%;
display: flex;
align-items: center;
justify-content: space-between;
background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
height: 96px;
min-width: 360px;

@media (max-width: 771px) {
    .login-button {
    display: none;
  }

   header {
    width: auto;
  }
}

img {
padding-left: 24px;
}

a {
margin-right: 24px;
text-decoration: none;
color:#018762;
font-size: 18px;
}

button {
width: 117px;
background-color: #018762;
color:white;
gap: 8px;
padding: 10px, 32px, 10px, 32px;
margin: 0 24px;
border: none;
}`;

export const LoginMobile = styled.div`
min-width: 200px;
@media (min-width: 772px) {

  a {
    display: none;
  }

  button{
  display: none;
  }
}

@media (max-width: 771px) {

  img {
    width: 124px;
    height: 16px;
  }  
    button {
  max-width: 56px;
  max-height: 56px;
}
svg{ 
  width: 24px;
  height: 24px;
}
}`;

export const Login = styled.div`

@media (max-width: 771px) {
  
   button {
    display: none;
  }
  a {
    display: none;
  }
}`;
