import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "50vh",
  overflow: "hidden",
};
export const YandexMaps = ({ location }) => {
  return (
    <YMaps
      query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "en_US" }}
    >
      <Map
        style={mapStyle}
        state={{
          center: [location?.latitude, location?.longitude],
          zoom: 10,
        }}
      >
        <Placemark geometry={[location?.latitude, location?.longitude]} />
      </Map>
    </YMaps>
  );
};

export default YandexMaps;
