import axios from "axios";
import { useQuery } from "react-query";

const useRestApi = () => {
  const fetchRestApi = () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data);
  };
  return useQuery("countries", fetchRestApi);
};

export default useRestApi;