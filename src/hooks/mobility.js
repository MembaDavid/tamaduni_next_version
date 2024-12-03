import useSWR from "swr";
import axios from "axios";

const base_url = "http://api.dev.tamaduni.africa:3100/";

// Define the fetcher function using axios
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// Custom hook to fetch mobility data
const useMobilityData = () => {
  const { data, error, isLoading } = useSWR(
    `${base_url}mobility/search`,
    fetcher
  );

  return {
    drivers: data?.drivers || [],
    groups: data?.groups || [],
    isLoading,
    isError: !!error,
    error,
  };
};

export default useMobilityData;
