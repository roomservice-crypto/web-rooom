// const withTM = require('next-transpile-modules')(['three', 'gsap'])

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		})

		return config
	}
}

module.exports = nextConfig
