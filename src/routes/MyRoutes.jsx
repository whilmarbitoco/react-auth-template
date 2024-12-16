import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import HomePage from "../components/pages/HomePage";
import RouteGuard from "./RouteGuard";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />

      <Route element={<RouteGuard />}>
        <Route element={<HomePage />} path="/home" />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
