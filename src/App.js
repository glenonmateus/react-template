import Header from "components/Header";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import AppRoutes from "routes";
import GlobalStyle from "styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <ToastContainer
        className="toastify-container"
        autoClose={3000}
      ></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
