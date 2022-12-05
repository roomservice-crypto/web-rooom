import ArrowRight from '@/svgs/arrow-right.svg'

export default function SectionHero() {
	return (
		<section
			className='mx-auto h-[820px] w-[1440px] pt-[171px] pl-[83px]'
			style={{
				backgroundImage: 'url(assets/about/net.png)',
				backgroundPosition: 'right center',
				backgroundRepeat: 'no-repeat'
			}}>
			<h1 className='w-[600px] font-mona text-[60px] font-[900] uppercase leading-[1.2]'>
				Web3 wonderland and lifestyle
			</h1>
			<p className='mt-6 w-[506px] text-lg font-normal'>
				Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host their
				own blockchain-based spaces without any coding experience.
			</p>
			<button
				className='mt-8 flex items-center gap-x-3 rounded-3xl border-2 border-dark py-[21px] px-6 text-xl font-semibold'
				style={{
					background:
						'linear-gradient(93.73deg, rgba(177, 250, 24, 0.45) 0%, rgba(236, 255, 22, 0.45) 46.37%, rgba(245, 210, 22, 0.45) 100%), #FFFFFF'
				}}>
				<span>Explore Demo</span>

				<ArrowRight />
			</button>
		</section>
	)
}
