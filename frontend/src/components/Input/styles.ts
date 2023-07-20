import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const InputStyled = styled.input`
  border: none;
  background-color: ${(props) => props.theme.background};
  height: 56px;
  font-size: 24px;
  padding: 8px;
  border-radius: 8px;

  margin-top: 8px;
`;

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.label};
`;