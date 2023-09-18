/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = {
//     experimental: {
//       serverActions: true,
//     },
//   }


const nextConfig = {
    images: {
      domains: [
        "googleusercontent.com",
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
    },
  }
  
  module.exports = nextConfig