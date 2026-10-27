/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev: telefonról (LAN IP-ről) is betöltődjön a JS/HMR (csak `next dev`-re hat).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  // cacheComponents kikapcsolva: a CMS client-kit (fetch force-cache + tag) ebben a módban nincs tesztelve.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // a Vite-verzió régi placeholder route-ja
      { source: "/collections/:path*", destination: "/kollekcio", permanent: true },
    ];
  },
};

export default nextConfig;
