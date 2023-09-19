import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { setLocalStorage } from "../utils/localStorage";

import rootReducer from "./reducers/favoriteReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(applyMiddleware(thunk)),
});

store.subscribe(() => {
  setLocalStorage("store", store.getState());
});

export default store;
