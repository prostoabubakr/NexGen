import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

const mapState = {
  center: [38.563819, 68.759009], // Coordinates from the Yandex Maps URL
  zoom: 19, // Zoom level to match the URL's zoom level
};

const Ymap = () => {
  return (
    <div style={{height:"100px",position:'relative',zIndex:'1'}}>
      <YMaps>
        <Map defaultState={mapState} width="100%" height="660px">
          <Placemark geometry={[38.563819, 68.759009]} />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default Ymap;