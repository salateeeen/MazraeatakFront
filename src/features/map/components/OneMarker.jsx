import { Marker, Popup, useMap } from "react-leaflet";

function OneMarker({ lat, lng }) {
  const map = useMap();
  map.flyTo([lat, lng], 15);
  
  return (
    <Marker position={[lat, lng]}>
      <Popup>Farm Location</Popup>
    </Marker>
  );
}

export default OneMarker;
