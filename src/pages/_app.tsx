import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handler = () => {
			if (window.innerWidth < 960) router.push('/not-allowed')
		}

		window.addEventListener('resize', handler)

		return () => window.removeEventListener('resize', handler)
	}, [])

	return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default App
