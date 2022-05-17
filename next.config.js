/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'res.cloudinary.com',
      'firebasestorage.googleapis.com'
    ]
  }
}

module.exports = nextConfig
