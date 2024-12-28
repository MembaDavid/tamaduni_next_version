// /auth/useAuth.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios"; // Import axios for API requests
import { base_url } from "@/hooks/urls";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Login function with actual API call
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${base_url}user/login`, {
        email,
        password,
      });

      const { token } = response.data; // Extract token from the response

      // Store the token in a cookie
      Cookies.set("authToken", token, { secure: true });

      setUser({ email, token });

      // router.push("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed");
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
      // Optionally, decode token or fetch user info from the server
      setUser({ email: "retrieved_email@example.com", token });
    }
  }, []);

  return { user, login, logout, loading, error };
};

export default useAuth;
