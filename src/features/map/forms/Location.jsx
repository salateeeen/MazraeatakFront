import { useRef, useState } from "react";
import styles from "./Location.module.css";
import Map from "@features/map/components/Map";
import Input from "@/ui/form/input/Input";
import { MapPin } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { getCityInfo } from "@/services/mapApi";
import { useCloseComponents } from "@/hooks/useCloseComponents";

function Location() {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();
  const containerRef = useRef();

  function handleOpen() {
    setOpen((open) => !open);
  }

  useCloseComponents(setOpen, containerRef);

  async function handleSelect(lat, lng) {
    const  {suburb} = await getCityInfo(lat, lng);
    setValue("coordinates", [lng, lat]);
    setValue("location", suburb);
    setOpen(false);
  }

  return (
    <div className={styles.locationContainer} ref={containerRef}>
      <Input
        name={"location"}
        readOnly={true}
        required={true}
        onClick={handleOpen}
      >
        <MapPin/>
      </Input>

      {open && (
        <div className={styles.mapContainer}>
          <Map className={styles.map} onSelect={handleSelect} toEdit={true} />
        </div>
      )}
    </div>
  );
}

export default Location;
