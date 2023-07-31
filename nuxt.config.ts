// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/global.scss" as *;',
        }
      }
    }
  },
  app: {
    head: {
      title: "Radix-Vue-Library",
      htmlAttrs: {
        lang: "ja",
      },
      charset: "utf-8",
      viewport: "width=device-width",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/destyle.css@3.0.2/destyle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },
})