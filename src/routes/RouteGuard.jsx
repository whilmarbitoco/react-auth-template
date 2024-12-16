import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";

const RouteGuard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useAuth();

  // Implement robust auth here

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <Outlet />;
};

export default RouteGuard;
