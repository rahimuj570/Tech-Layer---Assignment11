import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.int";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading";
import Verify from "./Verify";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  // ======= Loading ========
  if (loading) return <Loading />;

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ======= Verify =======
  if (!user?.emailVerified) {
    return <Verify />;
  }

  return children;
};

export default RequireAuth;
