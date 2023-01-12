import axios from "axios";
import { NameSeparation } from "helpers/helpers";
import { useQuery } from "react-query";

export const useRegion = (regionName: string) => {
  const [filterRegion, region] = NameSeparation(regionName);
  function fetchRegion() {
    return axios
      .get(`https://restcountries.com/v3.1/${filterRegion}/${region}`)
      .then((res) => res.data);
  }

  return useQuery(["region", regionName], () => fetchRegion(), {
    enabled: !!regionName,
  });
};
