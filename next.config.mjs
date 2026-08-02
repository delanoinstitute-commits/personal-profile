/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Preserve old URLs after the navigation restructure.
    return [
      { source: "/current-status", destination: "/identity", permanent: true },
      { source: "/constituents", destination: "/identity", permanent: true },
      { source: "/time", destination: "/lifestyle", permanent: true },
      { source: "/historical-context", destination: "/story", permanent: true },
      // Biography → History (2026) when the nav split into Constitution / Capital;
      // History → Story once the branch grew to cover intention as well as record.
      { source: "/biography", destination: "/story", permanent: true },
      { source: "/history", destination: "/story", permanent: true },
      { source: "/future-trajectory", destination: "/", permanent: true },
      { source: "/purpose", destination: "/", permanent: true },
      { source: "/assets", destination: "/wealth", permanent: true },
      // Education, skills, and works merged into the knowledge page (2026).
      { source: "/education", destination: "/knowledge#education", permanent: true },
      { source: "/skills", destination: "/knowledge#skills", permanent: true },
      { source: "/works", destination: "/knowledge#works", permanent: true },
    ];
  },
};

export default nextConfig;
