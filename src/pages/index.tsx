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
				<meta name='title' content={TITLE}></meta>
				<meta property='og:title' content={TITLE}></meta>
				<meta name='twitter:title' content={TITLE} />
			</Head>

			<Header />

			<main className='home relative flex-1 flex-col overflow-hidden pt-[60px]'>
				<MapPad />

				<div className='z-1 relative mobile:px-4'>
					<h1 className='mx-auto max-w-[1200px] text-center font-mona text-[60px] font-[900] uppercase leading-[1.2] mobile:hidden'>
						Customize your Web3 wonderland and lifestyle
					</h1>
					<h1 className='hidden text-4xl font-[900] uppercase mobile:block'>
						Web3 <br /> wonderland <br /> and lifestyle
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
