import get from "lodash/get";

import type * as Types from "./types";

export const Countries = (data: any[]): Types.CountriesData.Countries[] => {
  const counts = data.map((item) => ({
    altSpellings: get(item, "altSpellings"),
    area: get(item, "area"),
    borders: get(item, "borders"),
    capital: get(item, "capital"),
    capitalInfo: get(item, "capitalInfo"),
    car: get(item, "car"),
    cca2: get(item, "cca2"),
    cca3: get(item, "cca3"),
    ccn3: get(item, "ccn3"),
    cioc: get(item, "cioc"),
    coatOfArms: get(item, "coatOfArms"),
    continents: get(item, "continents"),
    currencies: get(item, "currencies"),
    demonyms: get(item, "demonyms"),
    fifa: get(item, "fifa"),
    flag: get(item, "flag"),
    flags: get(item, "flags"),
    gini: get(item, "gini"),
    idd: get(item, "idd"),
    independent: get(item, "independent"),
    landlocked: get(item, "landlocked"),
    language: get(item, "language"),
    latlng: get(item, "latlng"),
    maps: get(item, "maps"),
    name: get(item, "name"),
    population: get(item, "population"),
    startOfWeek: get(item, "startOfWeek"),
    status: get(item, "status"),
    subregion: get(item, "subregion"),
    tld: get(item, "tld"),
    translations: get(item, "translations"),
    unMember: get(item, "unMember"),
  }));

  return counts;
};
