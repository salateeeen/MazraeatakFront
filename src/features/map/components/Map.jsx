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
    localStorage.getItem("coordinates") || "[26,32]",
  );
  const [lng, lat] = coordinates || [curLng, curLat];
  const savedTheme = localStorage.getItem("theme");

  const LIGHT_TILE = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const DARK_TILE =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <div className={`${styles.container} ${className}`}>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        className={`${styles.map}`}
        boxZoom={true}
      >
        <TileLayer
          url={savedTheme === "dark" ? DARK_TILE : LIGHT_TILE}
          attribution="&copy; OpenStreetMap contributors"
        />
        {toEdit && <GetLocation onSelect={onSelect} />}
        {toShow && <OneMarker lat={lat} lng={lng} />}
      </MapContainer>
    </div>
  );
}

export default Map;
