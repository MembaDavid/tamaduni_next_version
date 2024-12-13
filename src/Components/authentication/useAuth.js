// /auth/useAuth.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const BASE_URL = "http://api.dev.tamaduni.africa:3100/";
const USER_URL = "user/";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Login Function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${BASE_URL}${USER_URL}login`, {
        email,
        password,
      });

      const { token, user } = response.data; // Adjust based on API response
      Cookies.set("authToken", token, { secure: true });
      setUser(user);
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Logout Function
  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
  };

  // Generic POST Request Function
  const postRequest = async (endpoint, data) => {
    setLoading(true);
    setError(null);
    try {
      const token = Cookies.get("authToken"); // Include auth token if available
      const response = await axios.post(`${BASE_URL}${USER_URL}${endpoint}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });
      return response.data; // Return the API response
    } catch (err) {
      console.error(`POST request to ${endpoint} failed:`, err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
      throw err; // Optionally rethrow for further handling
    } finally {
      setLoading(false);
    }
  };

  // Validate token and retrieve user info on component mount
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      axios
        .get(`${BASE_URL}${USER_URL}validate-token`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data.user))
        .catch(() => {
          Cookies.remove("authToken");
          setUser(null);
        });
    }
  }, []);

  return { user, login, logout, postRequest, loading, error };
};

export default useAuth;
