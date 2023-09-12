/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    prependData: `@import "./styles/utility/variables.scss";`,
  },
};

module.exports = nextConfig;
