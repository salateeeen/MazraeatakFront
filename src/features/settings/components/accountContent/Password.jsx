import Button from "@/ui/button/Button";
import Input from "@/ui/form/input/Input";
import styles from "./Password.module.css";

function Password() {
  return (
      <form className={styles.form}>
        <Input type="password" name={"current password"} />
        <Input type="password" name={"new password"} />
        <Input type="password" name={"confirm password"} />
        <Button>save</Button>
      </form>
  );
}

export default Password;
