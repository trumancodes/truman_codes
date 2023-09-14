/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    prependData: `@import "./styles/utility/variables.scss";`,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
