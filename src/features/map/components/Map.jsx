import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import OneMarker from "./OneMarker";
import GetLocation from "./GetLocation";

function Map({
  className = "",
  onSelect,
  toEdit = false,
  toShow = false,
  coordinates,
}) {
  const [curLat, curLng] = JSON.parse(
    localStorage.getItem("coordinates") || "[26,32]"
  );
  const [lng, lat] = coordinates || [curLng, curLat];

  return (
    <div className={`${styles.container} ${className}`}>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        className={`${styles.map}`}
        boxZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {toEdit && <GetLocation onSelect={onSelect} />}
        {toShow && <OneMarker lat={lat} lng={lng} />}
      </MapContainer>
    </div>
  );
}

export default Map;
