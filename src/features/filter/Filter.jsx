import { FormProvider, useForm } from "react-hook-form";
import styles from "./styles/Filter.module.css";
import mapStyles from "./styles/Map.module.css";
import inputsStyles from "./styles/Inputs.module.css";
import { Earth } from "lucide-react";

import Map from "@features/map/components/Map";
import MapForm from "@features/map/forms/MapForm";
import Button from "@/ui/button/Button";
import Input from "@/ui/form/input/Input";
import CheckBoxFacilities from "./CheckBoxFacilities";
import Container from "@/ui/container/Container";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "@/ui/form/select/Select";

const rating = [
  { value: 1, label: "At least 1" },
  { value: 2, label: "At least 2" },
  { value: 3, label: "At least 3" },
  { value: 4, label: "At least 4" },
  { value: 5, label: "At least 5" },
];

function Filter() {
  const navigate = useNavigate();

  const filterForm = useForm({
    MaxPrice: "",
    availbleIn: "",
    facilities: [],
    rating: "",
  });

  function onSubmitFilter(data) {
    const params = new URLSearchParams();

    if (data.maxPrice?.trim()) {
      params.set("dailyPrice[lte]", data.maxPrice);
    }

    if (data.availableIn) {
      params.set("availableIn[gte]", data.availableIn);
    }

    if (data.rating?.trim()) {
      params.set("ratingsAverage[gte]", data.rating);
    }

    if (Array.isArray(data.facilities)) {
      data.facilities.forEach((f) => {
        params.append("facilities[all]", f);
      });
    }

    navigate(`/app/farms?${params.toString()}`, { replace: false });
  }

  return (
    <Container className={`${styles.container} ${inputsStyles.container}`}>
      <div className={mapStyles.mapContainer}>
        <Map className={mapStyles.map} toShow={true} />

        <div className={`${mapStyles.mapFormContainer}`}>
          <div className={mapStyles.mapHeader}>
            <h3>Map</h3>
            <Earth className={mapStyles.earth} />
          </div>

          <div>
            <MapForm color={`#2e302d`} className={`${mapStyles.mapForm}`} />
          </div>
        </div>
      </div>

      <FormProvider {...filterForm}>
        <form
          className={styles.filters}
          onSubmit={filterForm.handleSubmit(onSubmitFilter)}
        >
          <div className={styles.facilities}>
            <CheckBoxFacilities />
          </div>

          <div className={inputsStyles.inputs}>
            <Input type="date" name="availble in" display="row" />
            <Input name="max price" display="row" />
            <Select name={`rating`} display={"row"} options={rating} />
          </div>

          <Button type="submit">SEARCH</Button>
        </form>
      </FormProvider>
    </Container>
  );
}

export default Filter;
