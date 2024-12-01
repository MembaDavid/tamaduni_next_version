// /auth/useAuth.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate login with dummy data
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate an API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (email === "test@user.com" && password === "password123") {
        const token = "dummy-auth-token";
        Cookies.set("authToken", token, { secure: true });
        setUser({ email, token });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Log out the user and clear the token
  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
  };

  // Check if the user is logged in by verifying the token
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setUser({ email: "test@user.com", token });
    }
  }, []);

  return { user, login, logout, loading, error };
};

export default useAuth;
