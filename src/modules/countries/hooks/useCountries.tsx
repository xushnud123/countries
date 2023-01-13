import axios from "axios";
import { useQuery } from "react-query";

import { Countries } from "../mappers";
import type * as Types from "../types";

const useCountries = () => {
  const fetchCountries = async () => {
    const data = await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data);

    const countries = Countries(data);

    return countries;
  };

  return useQuery<any, any, Types.CountriesData.Countries[]>(
    ["countries", "list"],
    fetchCountries,
    {
    }
  );
};

export default useCountries;
