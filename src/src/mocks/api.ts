const simulatedRoute: Coordinates[] = [
  { lat: -3.877246, lng: -38.630674 },
  { lat: -3.822413, lng: -38.539118 },
];

export const fetchRoute = async () => {
  return simulatedRoute;
};

export interface Coordinates {
  lat: number;
  lng: number;
}
