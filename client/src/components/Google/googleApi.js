import React, { useRef, useState } from "react";
import {
  
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
    const [center] = useState({
        lat: -28.671828769881326,
      lng: 153.49115868416783
    });
  
  const refMap = useRef(null);
  
  return (
    <GoogleMap
      styles={{ border: '1px solid black' }}
      className="google-plus"
      ref={refMap}
      defaultZoom={11}
      defaultCenter={{
        lat: -28.67190407616887,
        lng: 153.49113722647039 }}
      title="my marker"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
