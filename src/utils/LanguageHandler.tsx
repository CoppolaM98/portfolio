import { getCaptionsByPreferredLanguages } from "api/captions/captions";
import { createIntl, IntlShape } from "react-intl";

let intl: IntlShape;

const initIntl = async (preferredLanguages: readonly string[]) => {
  const captionsData = await getCaptionsByPreferredLanguages(preferredLanguages)
  
  intl = createIntl({
    locale: captionsData.locales[0],
    messages: captionsData.captions,
  });
  return intl;
}

export const setLanguagePreference = async (language: string) => {
  sessionStorage.setItem("language", language)
  const navigatorLanguages = window.navigator.languages

  return initIntl([language, ...navigatorLanguages])
}

export const loadLanguagePreference = async () => {
  const selectedLang = sessionStorage.getItem("language");
  const navigatorLanguages = window.navigator.languages

  if (selectedLang)
    return initIntl([selectedLang, ...navigatorLanguages])
  return initIntl(navigatorLanguages)
}

export function formatMessage(id: string, defaultMessage?: string) {
  if (!id) return "";
  handleNoIntlError();
  if (intl) return intl.formatMessage({ id: id, defaultMessage: defaultMessage })
  if (defaultMessage) return defaultMessage
  return id;
}

export const getFormattedValue = (value: string | boolean | number) => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  if (typeof value === "boolean") return value ? "true" : "false";
  if (!value) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return "UNHANDLED VALUE";
};



const handleNoIntlError = () => {
  if (!intl) {
    loadLanguagePreference();
    console.error("A call to a LanguageHelper method was made without the intl object being initialized.",
      "loadLanguagePreference is being called. Try calling loadLanguagePreference in the App.tsx component, or in your login response handler if captions are protected")
  }
}