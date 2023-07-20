import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-top: 31px;
  margin-left: 63px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Marker = styled.img.attrs(() => ({
    src: "marker.svg",
}))`
  width: 43px;
  height: 54px;
`;

export const PurpleCircle = styled.img.attrs(() => ({
    src: "purple-circle.svg",
}))`
  width: 12px;
  height: 11px;
  margin-top: 6px;
`;

export const WhiteCircle = styled.img.attrs(() => ({
    src: "white-circle.svg",
}))`
  width: 15px;
  height: 15px;

  transform: translateY(-56px);
`;

export const Title = styled.h1`
  font-family: Ubuntu;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;

  margin-left: 19px;
  margin-bottom: 14px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 160px;
`;

export const Back = styled.a`
  color: ${(props) => props.theme.primary};
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;

  margin-left: 12px;
`;