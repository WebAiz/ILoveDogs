/** @type {import('next').NextConfig} */
import withPWADefault from '@ducanh2912/next-pwa'

const withPWA = withPWADefault({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
        //image: "/static/images/fallback.png",
        document: "/offline", // if you want to fallback to a custom page rather than /_offline
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other options you like
};

export default withPWA(nextConfig);
