import styled from 'styled-components';

export const Div = styled.div`
display: flex;
justify-content:center;
min-width: 430px;
`;

export const FooterStyled = styled.footer`
background-color: white;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding-top:30px;
width: 85%;
`;

export const ImagemLogo = styled.footer`

@media (max-width: 950px) {

  img {
    display: none;
  }

  a img {
    display: block;
  }
}
margin-top: 24px;
display: flex;
flex-direction: column;
gap: 30px;
justify-content: flex-start;

div a img {
  width: 48px;
  height: 48px;
  padding: 8px;
}

img{
  width: 169px;
  height: 48px;
}`;

export const ContainerFooter = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid rgba(178, 223, 208, 1);
color: rgba(81, 81, 81, 1);
width: 100%;
padding: 48px 24px;

 span {
  display: none;
 }

h2 {
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 18px;
  color: rgba(19, 19, 19, 1);
}

li {
  list-style: none;
  font-size: 16px;
  color: rgba(45, 45, 45, 1);
  padding-bottom: 16px;
}

a {
  text-decoration: none;
  color: rgba(81, 81, 81, 1);
}

.button-initial {
  margin-left: 60px;  
} 

p{
  font-size: 14px;
  padding-bottom: 16px;
}
@media (max-width: 440px) {
 justify-content: flex-start;

}

@media (max-width: 950px) {
  display: flex;
  flex-wrap: wrap;

  .container-paragraph {
    display: none;
  }

  div{
    display: flex;
    justify-content: center;
  };

   span {
  display: block;
 }
}`;
