// /hooks/useCraftProjects.js

import useSWR from "swr";
import axios from "axios";
import { base_url } from "./urls";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useCraftProjects = () => {
  const { data, error, isLoading } = useSWR(
    base_url + "/afrocelebration/CraftProjectsandCreations",
    fetcher
  );

  return {
    craftProjects: data, // The fetched data
    isLoading, // Indicates if the fetch is in progress
    error, // Error encountered during the fetch
  };
};

export default useCraftProjects;
