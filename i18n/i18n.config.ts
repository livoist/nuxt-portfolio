import en from './en.json';
import jp from './jp.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: en,
    jp: jp
  }
}))