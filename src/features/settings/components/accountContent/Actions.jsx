import Button from "@/ui/button/Button";
import styles from "./Actions.module.css"; // اختياري إذا عندك ستايل

function Actions() {
  return (
    <form className={styles.actions}>
      <div className={styles.actionBox}>
        <div>
          <h4>Logout from all devices</h4>
          <p>Sign out from all active sessions for your account.</p>
        </div>
        <Button type="button">Logout All</Button>
      </div>

      <div className={styles.actionBox}>
        <div>
          <h4> Disable account</h4>
          <p>Your account will become inactive until you sign in again.</p>
        </div>
        <Button type="button">Disable Account</Button>
      </div>

      <div className={styles.actionBox}>
        <div>
          <h4>Delete account</h4>
          <p>This will permanently remove your account and all linked data.</p>
        </div>
        <Button type="button">Delete Account</Button>
      </div>
    </form>
  );
}

export default Actions;
