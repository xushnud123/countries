import axios from "axios";
import { useQuery } from "react-query";

export const useRegion = (name: string) => {
  function fetchRegion(name: string) {
    return axios
      .get(`https://restcountries.com/v3.1/region/${name}`)
      .then((res) => res.data);
  }

  return useQuery(["region"], () => fetchRegion(name), {
    enabled: false,
  });
};
