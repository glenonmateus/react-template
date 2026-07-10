import { legacy_createStore } from "redux";

const initialState = { botaoClicado: false };

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "BOTAO_CLICADO": {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
