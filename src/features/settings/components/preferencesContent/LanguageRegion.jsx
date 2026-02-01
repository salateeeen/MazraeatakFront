import { useState, useEffect } from "react";
import styles from "./LanguageRegion.module.css";
import Select from "@/ui/form/select/Select";

const LanguageRegion = () => {
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ar", label: "العربية" },
  ];

  const regionsOption = [
    { value: "JO", label: "Jordan" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "EG", label: "Egypt" },
  ];

  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [region, setRegion] = useState(localStorage.getItem("region") || "JO");

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("region", region);
  }, [language, region]);

  return (
    <div className={styles.container}>
      <Select
        name={"language"}
        options={languageOptions}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <Select
        name={"region"}
        options={regionsOption}
        onChange={(e) => setRegion(e.target.value)}
      />

      <div className={styles.info}>
        <p>
          📅 Date format, currency, and number formats depend on your region.
        </p>
      </div>
    </div>
  );
};

export default LanguageRegion;
