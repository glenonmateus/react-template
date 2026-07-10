import Header from "components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import AppRoutes from "routes";
import store from "store";
import GlobalStyle from "styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <AppRoutes></AppRoutes>
        <ToastContainer
          className="toastify-container"
          autoClose={3000}
        ></ToastContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
