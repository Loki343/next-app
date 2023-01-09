/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    unoptimized:true,
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'avatars.githubusercontent.com',
        port:'',
        pathname: '**',
      }
    ]
  }
}

module.exports = nextConfig
