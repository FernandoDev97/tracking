import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import RoutingMachine from "./RoutingMachine";

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const App: React.FC = () => {
  const waypoints: L.LatLng[] = [
    L.latLng(-3.858906, -38.582959), // São Francisco
    L.latLng(-3.823236, -38.578298), // Los Angeles
    L.latLng(-3.769736, -38.553013), // Nashville
  ];

  return (
    <MapWrapper>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.7749, -122.4194]}>
          <Popup>São Francisco</Popup>
        </Marker>
        <Marker position={[34.0522, -118.2437]}>
          <Popup>Los Angeles</Popup>
        </Marker>
        <Marker position={[36.1627, -86.7816]}>
          <Popup>Nashville</Popup>
        </Marker>
        <RoutingMachine waypoints={waypoints} />
      </MapContainer>
    </MapWrapper>
  );
};

export default App;
