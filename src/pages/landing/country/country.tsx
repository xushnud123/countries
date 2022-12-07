import { useCountry } from "modules/country/useCountry";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface CountryProps {}

const Country: FC<CountryProps> = () => {
  const { name = "Republic of Uzbekistan" } = useParams();

  const { data, isLoading } = useCountry({ nameID: name });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <h3>{data?.name?.official}</h3>;
};

export default Country;
