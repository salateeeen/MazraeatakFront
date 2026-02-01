import styles from "./Auth.module.css";
import LogInForm from "../forms/LogInForm"; 

function LogIn() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h2>Login</h2>
        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
