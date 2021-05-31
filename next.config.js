const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    handleImages: [ 'png', 'gif'],
    images: {
        domains: ['daviddkkim.com'],
      },
})
   