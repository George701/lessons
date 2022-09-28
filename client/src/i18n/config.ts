import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

// TODO: handle typings properly
const languageList = ['en', 'ru'] as const
export type LanguageList = typeof languageList[number]


const generateResources = (languageList: any) => {
  return languageList.reduce((acc: any, lng: string) => ({
    ...acc,
    [lng]: {translations: require(`./locales/${lng}/translations.json`)}
  }), {})
}


i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: generateResources(languageList),
  ns: ['translations'],
  defaultNS: 'translations',
})


i18n.languages = languageList


export default i18n