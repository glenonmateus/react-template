import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container } from "styles/GlobalStyles";
import { Paragraph, Title } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const botaoClicado = useSelector((state) => state.botaoClicado);

  const displayMessage = () => {
    dispatch({ type: "BOTAO_CLICADO" });
    toast(botaoClicado ? "Botão clicado" : "Botão não clicado");
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

export default Home;
