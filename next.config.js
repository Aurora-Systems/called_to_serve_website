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
      {
        protocol: "https",
        hostname: "ngratesc.sirv.com",
        port: "",
        pathname: "/mae_website/**"
      },
      {
        protocol: "https",
        hostname: "ngratesc.sirv.com",
        port: "",
        pathname: "/Mashkay/**"
      },
    ],
  },
};

module.exports = nextConfig;
