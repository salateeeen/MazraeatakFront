import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "@services/authApi";
import Input from "@/ui/form/input/Input";
import Button from "@/ui/button/Button";

function LogInForm() {
  const navigate = useNavigate();
  const logInForm = useForm();

  const { mutate, reset, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: login,
    onSuccess: (data) => {
      if (!data) return;
      localStorage.setItem("token", data.token);
      reset();
      navigate("/app/home");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  function onSubmit(user) {
    mutate(user);
  }

  function handleSignUp() {
    navigate("/signup");
  }

  return (
        <FormProvider {...logInForm}>
          <form
            className={styles.form}
            onSubmit={logInForm.handleSubmit(onSubmit)}
          >
            <Input type="email" name={"email"} placeholder="Email" />

            <Input type="password" name={"password"} placeholder="Password" />

            <Button type="submit" isPending={isPending}>
              {isPending ? "Logging in..." : "Log In"}
            </Button>

            <p className={styles.authHint}>
              Don’t have an account?{" "}
              <span onClick={handleSignUp} className={styles.link}>
                Sign up
              </span>
            </p>
          </form>
        </FormProvider>
  );
}

export default LogInForm;
