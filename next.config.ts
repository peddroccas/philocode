import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  /** A página do Catequese Hub mudou de endereço; o antigo continua levando até ela. */
  redirects() {
    return [{ source: "/sistema-catequese", destination: "/catequese-hub", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
