import Header from '@/layout/header'
import Head from 'next/head'
import ArrowRight from '@/svgs/arrow-right.svg'
import MapPad from '@/components/home/MapPad'

const TITLE = 'Room Service'

export default function Home() {
	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta property='og:title' content={TITLE}></meta>
			</Head>

			<Header />

			<main
				className='relative flex-1 flex-col overflow-hidden pt-[60px]'
				style={{
					backgroundImage: 'url(/assets/noise.png),url(/assets/home/grid.svg)',
					backgroundRepeat: 'repeat,no-repeat',
					backgroundPosition: 'left top,center',
					backgroundSize: 'auto,cover'
				}}>
				<MapPad />

				<div className=' z-1 relative'>
					<h1 className='mx-auto max-w-[1200px] text-center font-mona text-[60px] font-[900] uppercase leading-[1.2]'>
						Custtomize your Web3 wonderland and lifestyle
					</h1>
					<button className='button mx-auto mt-8'>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>
			</main>
		</>
	)
}
