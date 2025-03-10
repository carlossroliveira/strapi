import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["pt-BR"],

    translations: {
      en: {
        "HomePage.header.title": "Hello {name}",
        "HomePage.header.subtitle": "Welcome to your administration panel",
      },
      "pt-BR": {
        "HomePage.header.title": "Olá {name}",
        "HomePage.header.subtitle": "Bem-vindo ao seu painel de administração",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
