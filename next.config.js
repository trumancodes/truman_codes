/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./styles/utility/variables.scss";`,
  }
}

module.exports = nextConfig
