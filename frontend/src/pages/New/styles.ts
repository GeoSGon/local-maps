import styled from 'styled-components';
import { MapContainer as MapContainerLeaflet } from 'react-leaflet';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.background};
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.white};
  width: 40vw;
  padding: 76px;
  margin-top: 36px;
  margin-bottom: 725px;
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    width: 60vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  
  display: flex;
  width: 586px;
  height: 87px;
  flex-direction: column;

  font-size: 36px;
  font-weight: 700;
  padding-bottom: 3rem;
  line-height: 46px;
`;

export const MapContainerStyled = styled(MapContainerLeaflet)`
  height: 50vh;
  margin-top: 45px;
  margin-bottom: 52px;
`;

export const Section = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 2rem;
  
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.background};

  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.background}` : "none"};

  border-radius: 8px;
  width: 192px;
  height: 184px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 16px;

  &:hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;

export const CategoryImage = styled.img`
  width: 45px;
  height: 45px;
  padding-bottom: 1rem
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 35px;

  display: flex;
  justify-content: end;

  margin-right: 76px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  width: 266px;
  height: 56px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    filter: opacity(0.8);
  }
`;
