import { StorageAdapter } from "@/common/storage-adapter";
import { en, es } from "@/translations";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useCallback, useEffect, useMemo, useState } from "react";

const translations = { en, es };

export const useTranslation = () => {
  const [locale, setLocale] = useState<string>("");

  const geCurrentLenguage = async () => {
    const currentLg =
      (await StorageAdapter.getItem("lng")) ||
      getLocales()[0].languageCode ||
      "en";
    // console.log('currentLg', currentLg);
    setLocale(currentLg);
  };

  useEffect(() => {
    geCurrentLenguage();
  }, []);

  const i18n = useMemo(
    () => new I18n(translations, { locale, enableFallback: true }),
    [locale]
  );

  const changeLocale = useCallback((newLocale: "es" | "en") => {
    i18n.locale = newLocale;
    StorageAdapter.setItem("lng", newLocale);
    setLocale(newLocale);
  }, []);

  const t = useCallback((key: string) => i18n.t(key), [i18n]);

  return {
    t,
    locale:
      locale === "es"
        ? "es-ES"
        : locale === "en"
        ? "en-US"
        : locale === ""
        ? "en-US"
        : locale,
    changeLocale,
  };
};
