import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const authToken = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          Cookies.remove("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Token decoding failed:", error);
        Cookies.remove("token");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [authToken, navigate]);

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
