/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Next 16 only serves qualities listed here (default: [75]) and silently
    // falls back to 75 for anything else. HomeImage requests quality={100}.
    qualities: [75, 100],
  },
};

module.exports = nextConfig;
