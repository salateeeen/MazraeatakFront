import styles from "./Farm.module.css";
import FarmInfo from "../components/FarmInfo";
import Photos from "@/ui/photos/Photos.jsx";
import Map from "@features/map/components/Map.jsx";
import Container from "@/ui/container/Container";
import Reviews from "@/features/reviews/components/Reviews";
import { useParams } from "react-router-dom";
import { useFarm } from "../hooks/useFarm";
import ImagesSkeleton from "@/ui/skeletons/ImagesSkeleton";
import FarmInfoSkeleton from "@/ui/skeletons/FarmInfoSkeleton";
import MapSkeleton from "@/ui/skeletons/MapSkeleton";

function Farm() {
  const { id } = useParams();

  const { data, isPending, error } = useFarm(id);

  if (error) return <h1>{error.message}</h1>;
  const hasFarm = data?.farm;

  return (
    <>
      <Container className={styles.container}>
        {isPending && (
          <>
            <ImagesSkeleton />
            <FarmInfoSkeleton />
            <MapSkeleton />
          </>
        )}
        {!isPending && !hasFarm &&(
          <h1>Has not farm with this id.</h1>
        )}

        {!isPending && hasFarm && (
          <>
            <Photos />
            <FarmInfo data={data} />
            <Map toShow={true} coordinates={data.farm.location.coordinates} />
          </>
        )}
      </Container>

      <Reviews />
    </>
  );
}
export default Farm;
