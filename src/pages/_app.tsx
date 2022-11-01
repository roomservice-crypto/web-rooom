import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
    // GSAP ScrollSmoother will make the sticky position not work
		ScrollSmoother.create({
			content: 'main',
			smooth: 1,
			effects: true,
			smoothTouch: 0.1
		})
	}, [])

	return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default App
