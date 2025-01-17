import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				pathname: '/fir-auth-1c3bc.appspot.com/**',
			},
			{
				protocol: 'https',
				hostname: 'png.pngtree.com',
				pathname: '/png-vector/20240202/**',
			},
			{
				protocol: 'https',
				hostname: 'readymadeui.com',
				pathname: '/images/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'st2.depositphotos.com',
			},
		],
		localPatterns: [{ pathname: '/app/assets/**', search: 'local' }],
	},
	async headers() {
		return [
			{
				source: '/readymadeui.com/images',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
				],
			},
		]
	},
}

export default nextConfig
