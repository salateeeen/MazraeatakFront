import FarmCards from "@/features/farms/components/FarmCards";
import Filter from "@features/filter/Filter";
import Anchor from "@/ui/anchor/Anchor";
import { useAllFarms } from "@/features/farms/hooks/useAllFarms";

function Home() {
  const { data, isPending, error } = useAllFarms()

  return (
    <>
      <Filter />
      <FarmCards
        data={data}
        isPending={isPending}
        error={error}
        header={<Anchor navigateTo={"/app/farms"}>Farms</Anchor>}
      />
    </>
  );
}

export default Home;
