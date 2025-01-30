/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables `next export`
  reactStrictMode: true,
  basePath: "/resume", // Change this to match your GitHub repository name
  assetPrefix: "/resume/", // Ensures correct asset loading
};

export default nextConfig;
