import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  Marker
} from "@react-google-maps/api";

import Href from "../LocationInfo/Href";
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

function MyComponent(props) {
  const [isOpened, setOpened] = useState(false);
const testData = {
  text: "  495 Friday Hut Road, Possum Creek",
  link: "https://www.google.com/maps/place/495+Friday+Hut+Rd,+Possum+Creek+NSW+2479/data=!4m2!3m1!1s0x6b9088b3f117865d:0x538c627863a29552?sa=X&ved=2ahUKEwjC2YHPpaPvAhXtzjgGHWruCisQ8gEwAHoECAQQAQ"
};
  return (
    <LoadScript googleMapsApiKey="AIzaSyDClsZrp7BOREKiMZvP3P8lZhdh3UCFkqE"
      >
        <GoogleMap
        center={center}
        defaultOptions={{
                styles: exampleMapStyles,
            }}
        mapContainerStyle={{
              height: `120vh`,
              marginLeft: '30px',
              marginRight: '30px',
              marginTop: '40px'
        }}
        zoom={11}
          >
        <Marker
          title='Possum'
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
             <div style={{ background: `white`, border: `1px solid #ccc`, padding: 5 }}>
              <p>Address</p>
              <ul className='list-unstyled'>
                      <li>
                          <Href
                          text={testData.text}
                          url={testData.link}
                          />
                </li>
              </ul>
      </div>
          </OverlayView>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
 export default MyComponent
