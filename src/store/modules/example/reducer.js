import * as types from "store/modules/types";

const initialState = { botaoClicado: false };

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.BOTAO_CLICADO: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
