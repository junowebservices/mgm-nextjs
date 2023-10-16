/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	output: 'export',
	reactStrictMode: true,
	images: {
		unoptimized: true,
		domains: ['images.unsplash.com'],
		domains: ['images.pexels.com'],
		domains: ['res.cloudinary.com'],
	},
};

module.exports = nextConfig;
