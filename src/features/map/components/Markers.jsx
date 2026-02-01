import { Marker, Popup, useMap } from "react-leaflet";

function Markers() {
    return (
      <Marker position={[36, 32]}>
        <Popup>Farm Location</Popup>
      </Marker>
    );
}

export default Markers;
