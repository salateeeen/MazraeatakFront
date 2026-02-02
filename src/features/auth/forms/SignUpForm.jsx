import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@services/authApi";
import Button from "@/ui/button/Button";
import Input from "@/ui/form/input/Input";

function SignUpForm() {
  const navigate = useNavigate();
  const signUpForm = useForm();

  const { mutate, reset } = useMutation({
    mutationKey: ["users"],
    mutationFn: signup,
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

  function handleLogIn() {
    navigate("/login");
  }

  return (
    <form className={styles.form} onSubmit={signUpForm.handleSubmit(onSubmit)}>
      <Input type="email" name="email" />

      <Input type="password" name="password" />

      <Button type="submit" className={styles.signupBtn}>
        Sign Up
      </Button>

      <p className={styles.authHint}>
        Already have an account?{" "}
        <span onClick={handleLogIn} className={styles.link}>
          Login
        </span>
      </p>
    </form>
  );
}

export default SignUpForm;
