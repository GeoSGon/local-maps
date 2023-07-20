import { Container, InputStyled, LabelStyled } from "./styles";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: Function;
}

export default function Input(props: InputProps) {
  return (
    <Container>
      <LabelStyled>{props.label}</LabelStyled>
      <InputStyled
        required
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange((prev) => ({
            ...prev,
            [props.name]: e.target.value,
          }));
        }}
      />
    </Container>
  );
}