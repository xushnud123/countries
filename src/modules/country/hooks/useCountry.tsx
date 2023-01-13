import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

import { Country } from "../mappers";
import type * as Types from "../types";

interface CountryData {
  nameID: string;
}

export const useCountry = ({ nameID: name }: CountryData) => {
  const fetchCountry = async (name: string) => {
    const data = await axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.data);

    const countries = Country(data[0]);

    return countries;
  };

  const queryClient = useQueryClient();
  const hero = queryClient.getQueriesData(["countries"]);

  const { data, isLoading, isError, error } = useQuery<
    Types.CountryData.County,
    any,
    Types.CountryData.County
  >(["country", name], () => fetchCountry(name), {
    // @ts-ignore
    // eslint-disable-next-line consistent-return
    initialData: () => {
      if (hero.length > 1) {
        // @ts-ignore
        const heroData = hero[0][1].find(
          (item: any) => item?.name?.official === name
        );

        if (heroData) {
          return heroData;
        } return undefined;
      } if (hero.length < 1) {
        return () => fetchCountry(name);
      }
    },
    cacheTime: 3000,
  });

  if (isError) {
    console.error(error);
  }

  const value = {
    data,
    isLoading,
  };

  return value;
};
