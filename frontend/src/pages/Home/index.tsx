import {
    Container,
    Title,
    Button,
    Image,
    LeftContainer,
    RightContainer,
    SubTitle,
    ButtonBox,
  } from './styles';
  import { Link } from 'react-router-dom';
  import { BiDownload } from 'react-icons/bi';

  
  export default function Home() {
    return (
      <Container>
        <LeftContainer>
          <Title>O mapa local de sua cidade</Title>
          <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>
  
          <Link to="/new">
            <Button>
              <ButtonBox>
              <BiDownload size={24} style={{ transform: 'rotate(270deg)' }}/>
              </ButtonBox>
              Cadastre um ponto comercial
            </Button>
          </Link>
        </LeftContainer>
  
        <RightContainer>
          <Image />
        </RightContainer>
      </Container>
    );
  }