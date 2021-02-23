import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  Marker
} from "@react-google-maps/api";

const exampleMapStyles = [
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "black",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e",
            },
        ],
    },
];

const center = {
  lat: -28.671828769881326,
  lng: 153.49115868416783
};

function MyComponent() {
  const [isOpened, setOpened] = useState(false);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDClsZrp7BOREKiMZvP3P8lZhdh3UCFkqE"
>
        <GoogleMap
        center={center}
        defaultOptions={{
                styles: exampleMapStyles,
            }}
        mapContainerStyle={{
            height: `120vh`, marginLeft: '60px',
                  marginRight: '60px',
                  marginTop: '60px', marginBottom: '100px'
        }}
        
        zoom={11}
          >
        <Marker
          position={center}
          onClick={() => {
            setOpened(!isOpened);
          }}
        />
        {isOpened && (
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: -(width / 2),
              y: -(height / 2)
            })}
          >
            <div
              style={{ backgroundColor: "red", height: "50px", width: "50px" }}
            >
              Text
            </div>
          </OverlayView>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
 export default MyComponent
