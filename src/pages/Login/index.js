import { Container } from "styles/GlobalStyles";
import { Paragraph, Title } from "./styled";

const Login = () => {
  return (
    <Container>
      <Title>
        Login
        <small>System</small>
      </Title>
      <Paragraph>Esse é um paragrafo</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
};

export default Login;
