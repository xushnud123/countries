import axios from "axios";
import { useQuery } from "react-query";

import { NameSeparation } from "helpers/helpers";

export const useRegion = (regionName: string) => {
  const [filterRegion, region] = NameSeparation(regionName);

  function fetchRegion() {
    return axios
      .get(`https://restcountries.com/v3.1/${filterRegion.trim()}/${region.trim()}`)
      .then((res) => res.data);
  }

  return useQuery(["region", regionName], () => fetchRegion(), {
    enabled: !!regionName,
  });
};
