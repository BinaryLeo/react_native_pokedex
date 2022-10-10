import { AppRoute } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";
import { useSelector } from "react-redux";
import { IAuthState } from "../types/authState";
export function Router() {
  const { authenticated } = useSelector((state: IAuthState) => state.authState);
  return <>{authenticated ? <AppRoute /> : <AuthRoutes />}</>;
}
