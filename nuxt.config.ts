// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  css: ['~/assets/sass/main.sass'],
  modules: ["@nuxtjs/i18n", "@vesp/nuxt-fontawesome", "@nuxt/icon"],
  i18n: {
    vueI18n: '~/i18n/i18n.config.ts',
    locales: ['en', 'jp'],
    defaultLocale: 'en'
  },
  icon: {
    size: '26px'
  }
})