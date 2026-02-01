import Input from "@/ui/form/input/Input";
import styles from "./Email.module.css";
import Button from "@/ui/button/Button";

function Email() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Input type="email" name={"Email"} />
        <Button>save</Button>
      </form>
    </div>
  );
}

export default Email;
