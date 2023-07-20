import { 
    HeaderContainer, 
    LogoContainer,
    ImagesContainer,
    Marker, 
    PurpleCircle, 
    WhiteCircle, 
    Title, 
    LinkContainer,
    Back
} from "./styles";
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Header() {
    return (
        <HeaderContainer>
          <LogoContainer>
            <ImagesContainer>
              <Marker />
              <PurpleCircle />
              <WhiteCircle />
            </ImagesContainer>
            <Title>LocalMaps</Title>
          </LogoContainer>
          
          <LinkContainer>
            <Link to="/">
              <AiOutlineArrowLeft />
              <Back>Voltar para a home</Back>
            </Link>
          </LinkContainer>
        </HeaderContainer>
    );
}