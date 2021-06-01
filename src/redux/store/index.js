import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";


function configureStore(preloadedState) {
   const store = createStore(reducers, preloadedState);

  return store;
}

const store = configureStore();

export default store;

