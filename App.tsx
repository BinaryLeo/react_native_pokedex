import React from "react";
import {Router} from "./src/routes";
import { Provider as ReduxProvider } from "react-redux";
import Store from "./src/store/";
export function App() {
return(
  <ReduxProvider store={Store}>
  <Router/>
</ReduxProvider>
)
}
