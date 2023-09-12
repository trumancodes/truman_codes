/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  sassOptions: {
    prependData: `@import "./styles/utility/variables.scss";`,
  },
};

module.exports = nextConfig;
