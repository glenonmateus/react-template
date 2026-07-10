import { legacy_createStore } from "redux";
import rootReducer from "store/modules/rootReducer";

const store = legacy_createStore(rootReducer);

export default store;
