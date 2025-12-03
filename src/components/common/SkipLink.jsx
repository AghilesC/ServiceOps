// SkipLink.jsx — Lien d'accessibilité pour skip au contenu
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../translations/translations";

export const SkipLink = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <a href="#main-content" className="skip-link">
      {t("nav.skipToContent")}
    </a>
  );
};

