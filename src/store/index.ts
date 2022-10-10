import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authStateReducer from "./modules/Auth.store";

const rootReducers = combineReducers({
  authState: authStateReducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
