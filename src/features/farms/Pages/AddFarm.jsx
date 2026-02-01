import Container from "@/ui/container/Container";
import styles from "./AddFarm.module.css";
import AddFarmForm from "@/features/farms/forms/AddFarmForm";
import { Image } from "lucide-react";
import { useRef } from "react";

function AddFarm() {
  const ref = useRef()
  
  function handleClic(e) {
    e.preventDefault();
    ref.current.click()
  }

  return (
    <Container className={`${styles.container}`}>
      <div className={styles.imgContainer} onClick={handleClic}>
        <Image className={styles.img} />
      </div>
      <AddFarmForm ref={ref}/>
    </Container>
  );
}

export default AddFarm;
