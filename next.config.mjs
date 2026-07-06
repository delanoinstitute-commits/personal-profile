/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Preserve old URLs after the navigation restructure.
    return [
      { source: "/current-status", destination: "/identity", permanent: true },
      { source: "/constituents", destination: "/identity", permanent: true },
      { source: "/lifestyle", destination: "/time", permanent: true },
      { source: "/historical-context", destination: "/biography", permanent: true },
      { source: "/future-trajectory", destination: "/purpose", permanent: true },
      { source: "/assets", destination: "/wealth", permanent: true },
      // Education, skills, and works merged into the knowledge page (2026).
      { source: "/education", destination: "/knowledge#education", permanent: true },
      { source: "/skills", destination: "/knowledge#skills", permanent: true },
      { source: "/works", destination: "/knowledge#works", permanent: true },
    ];
  },
};

export default nextConfig;
