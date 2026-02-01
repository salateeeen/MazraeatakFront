import FarmCards from "@/features/farms/components/FarmCards";
import Title from "@/ui/title/Title";
import { useAllFarms } from "../hooks/useAllFarms";
import { useSearchParams } from "react-router-dom";

function AllFarms() {
  const [searchParams] = useSearchParams();
  
  const { data, isPending, error } = useAllFarms(searchParams.toString());

  return (
    <FarmCards
      data={data}
      isPending={isPending}
      error={error}
      title={"No farms available"}
      message={"Check back later for new farms!"}
      header={<Title>Farms</Title>}
    />
  );
}
export default AllFarms;
