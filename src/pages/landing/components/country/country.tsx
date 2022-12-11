import { useCountry } from "modules/country/hooks/useCountry";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface CountryProps {}

const Country: FC<CountryProps> = () => {
  const { name = "Republic of Uzbekistan" } = useParams();

  const { data, isLoading } = useCountry({ nameID: name });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(
    Object.keys(data?.currencies || {}).map((key) => [
      key,
      // @ts-ignore
      data?.currencies[key],
    ])
  );
  return <h3>{data?.name?.official}</h3>;
};

export default Country;
