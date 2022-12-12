// const withTM = require('next-transpile-modules')(['three', 'gsap'])

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	dangerouslyAllowSVG: true,
	contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	webpack(config) {
		config.module.rules.push(
			...[
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
					resourceQuery: /^$/
				},
				{
					test: /\.svg$/i,
					type: 'asset',
					resourceQuery: /url/ // *.svg?url
				}
			]
		)

		return config
	}
}

module.exports = nextConfig
