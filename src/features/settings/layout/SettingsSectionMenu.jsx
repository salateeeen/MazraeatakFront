import Side from "@/ui/side/Side";
import { HiChevronRight } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { SETTINGS_SECTIONS } from "../config/SectionSettings";
import styles from "./Styles.module.css";

function SettingsSectionMenu() {
  const ChevronIcon = <HiChevronRight strokeWidth={1} />;
  const { section } = useParams();

  if (!section) return null;

  if (!SETTINGS_SECTIONS[section]) return <h3>NOT FOUND</h3>;

  return (
    <div className={styles.container}>
      <h3>{SETTINGS_SECTIONS[section].title}</h3>
      <Side
        items={SETTINGS_SECTIONS[section].items.map((item) => ({
          ...item,
          icon: ChevronIcon,
          path: `/app/settings/${section}/${item.path}`,
        }))}
        iconIN="end"
        key={SETTINGS_SECTIONS[section].title}
      />
    </div>
  );
}

export default SettingsSectionMenu;
