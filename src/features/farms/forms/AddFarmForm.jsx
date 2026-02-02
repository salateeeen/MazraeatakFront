const currency = [
  { value: "eur", label: "eur" },
  { value: "usd", label: "usd" },
  { value: "jod", label: "jod" },
  { value: "sar", label: "sar" },
];
const Categories = [
  { value: "events", label: "for events" },
  { value: "families", label: "for families" },
  { value: "youths", label: "for youths" },
];

import styles from "./AddFarmForm.module.css";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";

import Button from "@/ui/button/Button";
import Select from "@/ui/form/select/Select";
import Input from "@/ui/form/input/Input";
import Location from "@features/map/forms/Location";
import { createFarm } from "@services/farmsApi";
import SelectCity from "@/features/map/forms/SelectCity";
import CheckBoxSelect from "@/ui/form/checkBoxSelect/CheckBoxSelect";

function AddFarmForm({ ref }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const addFarmForm = useForm({
    defaultValues: {
      farmName: "area",
      category: "events",
      city: "amman",
      dailyPrice: 200,
      currency: "jod",
      facilities: [],
      maximumGuests: 12,
    },
  });

  const imageFileRef = addFarmForm.register("farmImages");
  const { mutate, error } = useMutation({
    mutationFn: createFarm,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myFarms"],
      });
      navigate("/app/myFarms");
      addFarmForm.reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <FormProvider {...addFarmForm}>
      <form
        onSubmit={addFarmForm.handleSubmit(onSubmit)}
        className={styles.form}
      >
        <Input name="farm name" placeholder="name" required={true} />

        <SelectCity />
        <Location />

        <Select name="category" options={Categories} />

        <Input type={"number"} name="maximum guests" required={true} />

        <input
          type="file"
          hidden
          {...addFarmForm.register("farmImages")}
          ref={(e) => {
            imageFileRef.ref(e);
            if (ref) ref.current = e;
          }}
        />

        <CheckBoxSelect />

        <div className={styles.price}>
          <Input type={"number"} name="daily price" display="column" />

          <Select
            display="column"
            name={`currency`}
            options={currency.map(({ value, label }) => ({
              value,
              label: label.toUpperCase(),
            }))}
          />
        </div>

        <div className={styles.btns}>
          <Button type="reset" className={styles.reset}>
            reset
          </Button>
          <Button type="submit" className={styles.add}>
            add
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default AddFarmForm;
