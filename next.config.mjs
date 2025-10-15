// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'slelguoygbfzlpylpxfs.supabase.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'vrtmanagementgroup.com',
          port: '',
          pathname: '/**',
        }
      ],
    },
  }
  
  export default nextConfig
  