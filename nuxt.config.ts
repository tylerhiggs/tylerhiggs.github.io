// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Tyler Higgs - Software Engineer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Tyler Higgs is a full stack software engineer and MIT CS graduate. Portfolio featuring Eave home inspection software, an extended markdown editor, Sudoku, and more.",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
});
