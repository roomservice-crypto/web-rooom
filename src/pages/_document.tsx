import Document, { Html, Head, Main, NextScript } from 'next/document'

const DESCRIPTION =
	'Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host their own blockchain-based spaces without any coding experience.'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta lang='en' />
					<link rel='icon' href='/logo.svg' />
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
