import { useContext } from "react";
import { AuthContext } from "../context/Context";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an Provider");
  }

  return [context.token, context.setToken];
};

export default useAuth;
