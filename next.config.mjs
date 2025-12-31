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
          hostname: 'hoirqrkdgbmvpwutwuwj-all.supabase.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'hoirqrkdgbmvpwutwuwj.supabase.co',
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
        },
        {
          protocol: 'https',
          hostname: 'www.vrt9.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'vrt9.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.google.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.kit.edu',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.forbes.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    // Suppress HMR WebSocket errors
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Suppress HMR connection errors
        config.ignoreWarnings = [
          { module: /node_modules/ },
          /Failed to parse source map/,
        ];
      }
      return config;
    },
  }
  
  export default nextConfig
  