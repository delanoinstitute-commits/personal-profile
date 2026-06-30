/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Preserve old URLs after the navigation restructure.
    return [
      { source: "/current-status", destination: "/constituents", permanent: true },
      { source: "/historical-context", destination: "/biography", permanent: true },
      { source: "/future-trajectory", destination: "/purpose", permanent: true },
    ];
  },
};

export default nextConfig;
