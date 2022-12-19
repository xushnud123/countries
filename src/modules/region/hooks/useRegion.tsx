import axios from "axios";
import { useQuery } from "react-query";

export const useRegion = (regionName: string) => {
  function fetchRegion(regionName: string) {
    return axios
      .get(`https://restcountries.com/v3.1/region/${regionName}`)
      .then((res) => res.data);
  }

  return useQuery(["region", regionName], () => fetchRegion(regionName), {
    enabled: !!regionName,
  });
};
