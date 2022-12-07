import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div>
				<Toaster position='bottom-center' />
			</div>
			<Component {...pageProps} />
		</>
	)
}

export default App
