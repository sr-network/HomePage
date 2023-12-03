/** @type {import('next').NextConfig} */

module.exports = ({
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
});
