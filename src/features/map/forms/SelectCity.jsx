import Select from "@/ui/form/select/Select";

const city = [
  { value: "amman", label: "Amman", lat: 31.9539, lng: 35.9106 },
  { value: "zarqa", label: "Zarqa", lat: 32.0607, lng: 36.103 },
  { value: "irbid", label: "Irbid", lat: 32.5569, lng: 35.8497 },
  { value: "deadsea", label: "Dead Sea", lat: 31.559, lng: 35.4732 },
];

function SelectCity() {
  return <Select name={`city`} options={city} />;
}

export default SelectCity;
