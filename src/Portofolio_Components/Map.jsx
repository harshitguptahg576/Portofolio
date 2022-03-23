import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const Marker = () => (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  );

  const location = {
    center: {
      lat: 28.452825,
      lng: 77.0698,
    },
    zoom: 13,
  };

  const mapStyle = {
    height: "40vh",
    width: "100%",
    border: "2px solid black",
    borderRadius: "15px",
  };
  return (
    <div className="my-map container-fluid my-5" style={mapStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBC-JNglEI5lQycaFpuI3Cfb1N-MPN0sqQ" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
        <Marker lat={location.center.lat} lng={location.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
