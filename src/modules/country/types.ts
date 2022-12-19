export namespace CountryData {
  export interface County {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: {
      latlng: number[];
    };
    car: {
      signs: string[];
      side: string;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: {
      png: string;
      svg: string;
    };
    continents: string[];
    currencies: {};
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
      fra: {
        f: string;
        m: string;
      };
    };
    fifa: string;
    flag: string;
    flags: {
      png: string;
      svg: string;
    };
    gini: any;
    idd: {
      root: string;
      suffixes: string[];
    };
    independent: boolean;
    landlocked: boolean;
    language: any;
    latlng: number[];
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: string;
    };
    population: number;
    startOfWeek: string;
    status: string;
    region: string;
    subregion: string;
    tld: string[];
    translations: any;
    unMember: boolean;
  }
}
