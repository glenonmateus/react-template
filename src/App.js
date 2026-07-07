import Header from "components/Header";
import { BrowserRouter } from "react-router";
import AppRoutes from "routes";
import GlobalStyle from "styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
