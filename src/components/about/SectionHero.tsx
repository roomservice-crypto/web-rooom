import ArrowRight from '@/svgs/arrow-right.svg'
import Loops from './Loops'

export default function SectionHero() {
	return (
		<section className='overflow-hidden'>
			<div className='relative h-[820px] pt-[171px] pl-[80px] mobile:h-[678px] mobile:px-4 mobile:pt-12'>
				<div className='absolute right-0 top-0 left-0 flex h-full items-center justify-end overflow-hidden pb-1'>
					<div className='relative left-[233px] mobile:absolute mobile:left-[50%] mobile:right-0 mobile:top-[120px]'>
						<Loops />
					</div>
					<div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(80.28deg,#F0F0F0_39.95%,_rgba(240,240,240,0)_67.74%)] mobile:bg-[linear-gradient(170.28deg,#F0F0F0_39.95%,_rgba(240,240,240,0)_67.74%)]'></div>
				</div>

				<div className='relative w-[536px] mobile:w-full'>
					<h1
						className='font-mona text-[60px] font-[900] uppercase leading-[1.2] mobile:text-[36px]'
						style={{ textShadow: '0px 5px 0px #E1E1E1' }}>
						Web3 wonderland and lifestyle
					</h1>
					<p className='mt-6 text-lg font-normal'>
						Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host
						their own blockchain-based spaces without any coding experience.
					</p>
					<button className='button mt-8'>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>
			</div>
		</section>
	)
}
