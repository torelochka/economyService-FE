module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/economyService-FE/" : "/",
  pwa: {
    name: "m8.checker",
    themeColor: "purple",
    msTileColor: "purple",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "purple",

    manifestOptions: {
      name: "m8.checker",
      short_name: "m8.checker",
      theme_color: "purple",
    },
  },
};
