import styles from "./DeleteButton.module.css";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteFarm } from "@services/farmsApi";
import { Trash2 } from "lucide-react";

function DeleteButton({className, id}) {
  const queryClient = useQueryClient();
  
  const { mutate, isPending } = useMutation({
    mutationKey: ["favoritesIds"],
    mutationFn: deleteFarm,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myFarms"],
      });
    }
  });
  
  function handleDelet(e) {
    e.stopPropagation();
    mutate(id);
  }

  return (
    <button
      className={`${styles.delete} ${className} `}
      onClick={handleDelet}
      disabled={isPending}
    >
      <Trash2 />
    </button>
  );
}

export default DeleteButton;
