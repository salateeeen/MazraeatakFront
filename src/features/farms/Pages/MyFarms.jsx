import FarmCards from "@/features/farms/components/FarmCards";
import Title from "@/ui/title/Title";
import { useMyFarms } from "../hooks/useMyFarms";

function MyFarms() {
  const { data, isPending, error } = useMyFarms()

  return (
    <FarmCards
      data={data}
      isPending={isPending}
      error={error}
      title="No farms added"
      message="Add your first farm and start hosting!"
      header={<Title>My Farms</Title>}
    />
  );
}

export default MyFarms;
