import Header from '@/layout/header'
import Head from 'next/head'
import ArrowRight from '@/svgs/arrow-right.svg'
import MapPad from '@/components/home/MapPad'

export default function Home() {
	return (
		<>
			<Head>
				<title>Room Service</title>
				<meta name='description' content='Generated by create next app' />
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
					<h1 className='mx-auto w-[1200px] text-center font-mona text-[60px] font-[900] uppercase leading-[1.2]'>
						Custtomize your Web3 wonderland and lifestyle
					</h1>
					<button
						className='mx-auto mt-8 flex items-center gap-x-3 rounded-3xl border-2 border-dark py-[21px] px-6 text-xl font-semibold'
						style={{
							background:
								'linear-gradient(93.73deg, rgba(177, 250, 24, 0.45) 0%, rgba(236, 255, 22, 0.45) 46.37%, rgba(245, 210, 22, 0.45) 100%), #FFFFFF'
						}}>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>
			</main>
		</>
	)
}
