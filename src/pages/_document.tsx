import Document, { Html, Head, Main, NextScript } from 'next/document'

const DESCRIPTION =
	'World Room is the protocol that powers Web3 room facilities, enabling users to build, launch and host their own blockchain-based spaces without any coding experience.'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta lang='en' />

					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#ecff16' />
					<meta name='theme-color' content='#ffffff' />

					<meta name='description' content={DESCRIPTION} />
					<meta property='og:description' content={DESCRIPTION} />
					<meta name='twitter:description' content={DESCRIPTION} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
