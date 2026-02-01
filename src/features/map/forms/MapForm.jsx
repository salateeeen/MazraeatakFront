import { FormProvider, useForm } from "react-hook-form";
import { MapPinHouse, X } from "lucide-react";
import Input from "@/ui/form/input/Input";
import { useNavigate } from "react-router-dom";
import { getCurrentPosition } from "@/utils/handleLocation";
import SelectCity from "./SelectCity";

function MapForm({ color, className }) {
  const navigate = useNavigate();
  const mapForm = useForm({
    defaultValues: {
      farmName: "",
      location: "",
      farFromMe: "",
    },
  });

  function onSubmitMap(data) {
    const params = new URLSearchParams();

    if (data.location) {
      params.set("location", data.location);
    }

    if (data.farFromMe?.trim()) {
      params.set("farFromMe[lte]", data.farFromMe);
    }

    navigate(`/app/home?${params.toString()}`, { replace: false });
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      mapForm.handleSubmit(onSubmitMap)();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextElement = form.elements[index + 1];
      if (nextElement) nextElement.focus();
    }
  };

  return (
    <FormProvider {...mapForm}>
      <form className={className} onSubmit={mapForm.handleSubmit(onSubmitMap)}>
        <SelectCity />

        <Input
          name="location"
          display="column"
          onBlur={mapForm.handleSubmit(onSubmitMap)}
          onKeyDown={onKeyDown}
        />

        <Input
          type="number"
          name="far from me"
          display="column"
          onBlur={mapForm.handleSubmit(onSubmitMap)}
          onKeyDown={onKeyDown}
        >
          <MapPinHouse
            color={color}
            alt="choose in map"
            onClick={getCurrentPosition}
          />
        </Input>
      </form>
    </FormProvider>
  );
}

export default MapForm;
