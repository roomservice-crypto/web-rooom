import Header from '@/layout/header'
import Head from 'next/head'
import ArrowRight from '@/svgs/arrow-right.svg'
import MapPad from '@/components/home/MapPad'
import { useRouter } from 'next/router'

const TITLE = 'Room Service'

export default function Home() {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name='title' content={TITLE}></meta>
				<meta property='og:title' content={TITLE}></meta>
				<meta name='twitter:title' content={TITLE} />
			</Head>

			<Header />

			<main className='home relative flex-1 flex-col overflow-hidden pt-[60px]'>
				<MapPad />

				<div className='z-1 relative mobile:px-4'>
					<h1
						className='mx-auto max-w-[1250px] text-center font-mona text-[60px] font-[900] uppercase leading-[1.2] mobile:text-left mobile:text-4xl'
						style={{ textShadow: '0px 5px 0px #E1E1E1' }}>
						Reimagine web3 with your own, customizable on-chain spaces
					</h1>

					<button
						onClick={() => router.push('/map')}
						className='button mx-auto mt-8 mobile:fixed mobile:bottom-20 mobile:flex mobile:w-[calc(100vw-32px)] mobile:justify-center '>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>

					<div
						className='pointer-events-none fixed left-0 bottom-0 right-0 top-0 hidden mobile:block'
						style={{ boxShadow: 'inset 0px -50px 20px #fff' }}></div>
				</div>
			</main>
		</>
	)
}
