import { useRef, useState } from "react";
import CheckBoxFacilities from "@/features/filter/CheckBoxFacilities";
import styles from "./CheckBoxSelect.module.css";
import { useCloseComponents } from "@/hooks/useCloseComponents";
import { ArrowDown } from "lucide-react";
import Input from "../input/Input";
import { useFormContext } from "react-hook-form";
import { useFacilities } from "@/hooks/useFacilities";

function CheckBoxSelect() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();
  const { watch } = useFormContext();

  function handleFacilities() {
    setOpen((prev) => !prev);
  }
  useCloseComponents(setOpen, containerRef);

  const facilitiesID = watch("facilities");

  const { data: facilitiesObj } = useFacilities()

  const facilitiesName =
    facilitiesObj?.facilities
      ?.filter((fac) => {
        return facilitiesID.includes(fac.id);
      })
      ?.map((fac) => fac.name)
      ?.join(" - ") || "";

  return (
    <div className={styles.container} ref={containerRef}>
      <Input
        name={"facilities"}
        noRegister={true}
        placeholder={"Select Facilities"}
        readOnly={true}
        required={true}
        value={facilitiesName}
        onClick={handleFacilities}
      >
        <ArrowDown onClick={handleFacilities} />
      </Input>

      {open && (
        <div className={`${styles.list}`}>
          <CheckBoxFacilities />
        </div>
      )}
    </div>
  );
}

export default CheckBoxSelect;
