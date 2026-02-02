import { FormProvider, useForm } from "react-hook-form";
import styles from "./Rate.module.css";
import Button from "@/ui/button/Button";
import Stars from "@/ui/starsEdit/Stars";
import CloseButton from "@/ui/closeButton/CloseButton";
import TextArea from "@/ui/form/textArea/TextArea";
import { useMutation } from "@tanstack/react-query";
import { createReview } from "@/services/reviewsApi";
import queryClient from "@/App/queryClient";
import { capitalizeFirstLetter } from "@/utils/handleStrings";

function Rate({ open, setOpen, farmName, farmId }) {
  const rateForm = useForm({
    defaultValues: {
      rating: 0,
    },
  });

  const handleClose = function (e) {
    e.preventDefault();
    setOpen(false);
  };

  const { mutate } = useMutation({
    mutationFn: createReview(farmId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", farmId],
      });
      setOpen(false);
      rateForm.reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <>
      {open && (
        <>
          <div className={styles.overlay} onClick={handleClose}></div>
          <FormProvider {...rateForm}>
            <form
              className={styles.container}
              onSubmit={rateForm.handleSubmit(onSubmit)}
            >
              <h1 className={styles.title}>
                <span>Review</span>
                {capitalizeFirstLetter(farmName)}
              </h1>
              <CloseButton onClick={handleClose} />
              <Stars className={styles.rate} size={"1.5rem"} name="rating" />
              <TextArea
                className={styles.text}
                placeholder="Write your review here..."
                name="message"
              />
              <Button type="submit">Rate</Button>
            </form>
          </FormProvider>
        </>
      )}
    </>
  );
}

export default Rate;
