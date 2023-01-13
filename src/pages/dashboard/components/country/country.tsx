import { FC } from "react";
import { useParams } from "react-router-dom";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { useCountry } from "modules/country/hooks/useCountry";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import cls from "./country.module.scss";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface CountryProps {}

const Country: FC<CountryProps> = () => {
  const { name = "Republic of Uzbekistan" } = useParams();

  const { data, isLoading } = useCountry({ nameID: name });
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.cards}>
          <div className={cls.images}>
            <img src={data?.flags.svg} alt='img not found' />
          </div>
          <div className={cls.informations}>
            <div className={cls.tilt}>
              <h1 className={cls.title}>Informations</h1>
            </div>
            <div className={cls.name}>
              <span>Official name:</span> {data?.name.official}
            </div>
            <div className={cls.name}>
              <span>Common:</span> {data?.name.common}
            </div>
            <div className={cls.name}>
              <span>Capital:</span> {data?.capital}
            </div>
            <div className={cls.name}>
              <span>Region:</span> {data?.region}
            </div>
            <div className={cls.name}>
              <span>Subregion:</span> {data?.subregion}
            </div>
            <div className={cls.name}>
              <span>Area:</span> {data?.area}
            </div>
            <div className={cls.name}>
              <span>Population:</span> {data?.population}
            </div>
          </div>
        </div>
        <div className={cls.mapty}>
          {data?.latlng && (
            <MapContainer
              // @ts-ignore
              center={[...data?.latlng]}
              zoom={4.5}
              className={cls.leaflet}>
              <TileLayer
                url='https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=VInkmqaaYHcUy8SN2ii4'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

              <Marker
                // @ts-ignore
                position={[...data?.latlng]}>
                <Popup keepInView autoPan={true}>
                  <div>
                    {`${data?.name.official}
                    ${data?.flag}`}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Country;
