import styles from "./Settings.module.css";
import Container from "@/ui/container/Container";
import SettingsSidebar from "../layout/SettingsSidebar";
import SettingsSectionMenu from "../layout/SettingsSectionMenu";
import SettingsContent from "../layout/SettingsContent";

function Settings() {
  return (
    <Container className={styles.layout}>
      <SettingsSidebar />
      <SettingsSectionMenu />
      <SettingsContent />
    </Container>
  );
}

export default Settings;
