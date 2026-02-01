import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./CreateBooking.module.css";
import Input from "@/ui/form/input/Input";
import Container from "@/ui/container/Container";
import Button from "@/ui/button/Button";
import { createBooking } from "@/services/bookingsApi";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useFarm } from "@/features/farms/hooks/useFarm";

function CreateBooking() {
  const { id } = useParams();
  const { data } = useFarm(id);
  const [days, setDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const bookingForm = useForm({
    defaultValues: {
      startDate: "2026-01-26",
      endDate: "2026-01-27",
      guests: 1,
      paymentMethod: "card",
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["addBooking", id],
    mutationFn: createBooking(id),
  });

  const { watch, handleSubmit, setValue } = bookingForm;

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  setValue("totalPrice", totalPrice);

  useEffect(() => {
    if (startDate && endDate) {
      const diff =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      const validDays = diff > 0 ? diff : 0;
      setDays(validDays);
      setTotalPrice(validDays * data?.farm?.dailyPrice);
    } else {
      setDays(0);
      setTotalPrice(0);
    }
  }, [startDate, endDate, data?.farm?.dailyPrice]);

  function onSubmit(data) {
    mutate(data)
  }

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>
        <span>Book</span>
        {data?.farm?.farmName}
      </h1>

      <FormProvider {...bookingForm}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input type="date" name="start date" required />
          <Input type="date" name="end date" required />
          <Input type="number" name="guests" required />
        </form>
      </FormProvider>

      <div className={styles.daysPrice}>
        <span>Days: {days}</span>
        <span>Price: ${totalPrice}</span>
      </div>

      <Button
        disabled={+days < 0}
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className={styles.submitBtn}
      >
        Book Now
      </Button>
    </Container>
  );
}

export default CreateBooking;
