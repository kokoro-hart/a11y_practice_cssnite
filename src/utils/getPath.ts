export const getPath = {
  top: "/",

  tokyo: {
    area: "/tokyo",
    route: "/tokyo/route",
  },

  saitama: {
    area: "/saitama",
    route: "/saitama/route",
  },

  chiba: {
    area: "/chiba",
    route: "/chiba/route",
  },

  kanagawa: {
    area: "/kanagawa",
    route: "/kanagawa/route",
  },

  yamanashi: {
    area: "/yamanashi",
    route: "/yamanashi/route",
  },

  spot: (area: string, page: number) => {
    return `/${area}/spots/spot${page}`
  },

  spotForCategoryParams: (category: string) => {
    return `/?category=${category.replaceAll("&", "")}#spot`
  },

  websiteMap: "/websitemap",

  websitePolicy: "/website-policy",

  termsOfUse: "/terms-of-use",

  privacyPolicy: "/privacy-policy",
}
