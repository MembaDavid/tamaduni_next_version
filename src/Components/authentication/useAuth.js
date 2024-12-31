// /auth/useAuth.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
<<<<<<< HEAD
import axios from "axios";

const BASE_URL = "http://api.dev.tamaduni.africa:3100/";
const USER_URL = "user/";
=======
import axios from "axios"; // Import axios for API requests
import { base_url } from "@/hooks/urls";
import { useRouter } from "next/navigation";
>>>>>>> tamaduni

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

<<<<<<< HEAD
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
=======
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
>>>>>>> tamaduni
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
<<<<<<< HEAD
      axios
        .get(`${BASE_URL}${USER_URL}validate-token`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data.user))
        .catch(() => {
          Cookies.remove("authToken");
          setUser(null);
        });
=======
      // Optionally, decode token or fetch user info from the server
      setUser({ email: "retrieved_email@example.com", token });
>>>>>>> tamaduni
    }
  }, []);

  return { user, login, logout, postRequest, loading, error };
};

export default useAuth;
