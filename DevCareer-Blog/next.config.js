/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: serverless,
};

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
      // use: 'raw-loader'

      
    });
    return cfg;
  },
};
