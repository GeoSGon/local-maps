import styled from 'styled-components';

export const Container = styled.div`
  background: url("./home-background.svg") no-repeat 100% bottom;
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 54px;
  font-family: Ubuntu;
  font-weight: 700;
  line-height: 64px;
  margin-bottom: 24px;

  max-width: 500px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.text};

  display: flex;
  width: 448px;

  font-size: 24px;
  font-family: Roboto;
  line-height: 38px;
  margin-bottom: 40px;

  max-width: 500px;
`;

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  width: 72px;
  height: 72px;

  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  text-align: right;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 700;

  width: 360px;
  height: 72px;
  border-radius: 8px;
  border: none;

  position: relative;
  padding: 24px 36px;

  &:hover {
    filter: opacity(0.8);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding-left: 160px;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 50%;
`;