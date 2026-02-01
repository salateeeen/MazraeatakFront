import SignUpForm from "../forms/SignUpForm";
import styles from "./Auth.module.css";

function SignUp() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
