import axios from "../Api";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState([]);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("/auth/loggedIn", { withCredentials: true });
    setLoggedIn(loggedInRes.data.auth);
    setUser(loggedInRes.data.user);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
