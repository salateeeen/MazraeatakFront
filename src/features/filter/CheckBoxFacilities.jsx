import CheckBoxItem from "@/ui/form/checkBox/CheckBoxItem";
import { Controller, useFormContext } from "react-hook-form";
import { useFacilities } from "@/hooks/useFacilities";

function CheckBoxFacilities() {
  const { control } = useFormContext();

  const { data, isPending, error } = useFacilities();

  if (isPending) return <p>is loading</p>;
  if (error) return console.log(error.message);
  const facilities = data?.facilities;

  return (
    <>
      {facilities?.map((facility) => (
        <Controller
          name="facilities"
          key={facility.id}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <CheckBoxItem
              field={field}
              id={facility.id}
              label={facility.name}
              logo={facility.logo}
            />
          )}
        />
      ))}
    </>
  );
}

export default CheckBoxFacilities;
