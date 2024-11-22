// next.config.js
module.exports = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.imagin.studio" }],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home", // Ana sayfadan /home'a yönlendirme
        permanent: true, // Yönlendirme kalıcı olacak
      },
    ];
  },
};
