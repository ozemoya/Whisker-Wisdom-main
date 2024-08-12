import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  // other configurations...
};

export default withPlugins([withTM], nextConfig);