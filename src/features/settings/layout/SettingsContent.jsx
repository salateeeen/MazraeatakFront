import { useParams } from "react-router-dom";
import styles from "./Styles.module.css";
import { CONTENTS } from "../config/ContentSettings";

function SettingsContent() {
  const { subSection } = useParams();

  if (!subSection) return null;

  if (!CONTENTS[subSection]) return <h3>NOT FOUND</h3>;
  const PageComponent = CONTENTS[subSection].component;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{CONTENTS[subSection].title}</h3>
        <p className={styles.description}>{CONTENTS[subSection].description}</p>
      </div>
      <PageComponent />
    </div>
  );
}

export default SettingsContent;
