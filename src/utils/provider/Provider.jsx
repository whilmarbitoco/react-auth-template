import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "../context/Context";
import PropTypes from "prop-types";

const Provider = ({ children }) => {
  const [token, _setToken] = useState(() => localStorage.getItem("app-token"));

  const setToken = useCallback((newToken) => {
    localStorage.setItem("app-token", newToken);
    _setToken(newToken);
    console.log("i am calledd");
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
