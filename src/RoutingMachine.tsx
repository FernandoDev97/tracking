import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

interface RoutingMachineProps {
  waypoints: L.LatLng[];
}

const RoutingMachine: React.FC<RoutingMachineProps> = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }],
        extendToWaypoints: true,
        missingRouteTolerance: 1,
        addWaypoints: false,
      },
      show: false,
      addWaypoints: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};

export default RoutingMachine;
