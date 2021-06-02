const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  handleImages: ["png", "gif"],
  optimizeImages: true,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  optipng: {
    optimizationLevel: 3,
  },
  images: {
    domains: ["daviddkkim.com"],
  },
});
