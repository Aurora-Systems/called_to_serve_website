/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ngratesc.sirv.com",
        port: "",
        pathname: "/called_to_serve/**"
      },
    ],
  },
};

module.exports = nextConfig;
