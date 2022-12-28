import React from "react";

import { useAuth } from "../../Context/AuthProvider/useAuth";
import Login from "../../Pages/Login";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <Login />;
  }
  return children;
};
