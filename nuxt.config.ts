// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          charset: "UTF-8",
        },
      ],
      link: [
        { rel: "stylesheet", href: "/styles/home.module.css" },
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/images/Caution.png",
        },
      ],
      script: [
        {
          src: "/js/script.js",
          defer: true,
        },
      ],
    },
  },
  plugins: [
    '@/plugins/vue-content-placeholders.js'
  ]
});
