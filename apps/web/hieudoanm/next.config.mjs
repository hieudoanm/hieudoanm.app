import million from 'million/compiler';
import nextPWA from 'next-pwa';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const withPWA = nextPWA({
  dest: 'public',
  skipWaiting: true,
  disable: NODE_ENV === 'development',
  register: NODE_ENV !== 'development',
  fallbacks: { document: '/apps' },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { removeConsole: NODE_ENV !== 'development' },
};

const pwaConfig = withPWA(nextConfig);

export default million.next(pwaConfig);
