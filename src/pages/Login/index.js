import { toast } from "react-toastify";
import { Container } from "styles/GlobalStyles";
import { Paragraph, Title } from "./styled";

const Login = () => {
  const displayMessage = () => {
    toast("Login efetuado com sucesso");
  };

  return (
    <Container>
      <Title>
        Login
        <small>System</small>
      </Title>
      <Paragraph>Esse é um paragrafo</Paragraph>
      <button type="button" onClick={displayMessage}>
        Enviar
      </button>
    </Container>
  );
};

export default Login;
