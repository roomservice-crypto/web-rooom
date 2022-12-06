import ArrowRight from '@/svgs/arrow-right.svg'
import clsx from 'clsx'
import Loops from './Loops'

export default function SectionHero() {
	return (
		<section className='relative mx-auto h-[820px] w-[1440px] overflow-hidden  pt-[171px] pl-[83px]'>
			<div className='absolute right-0 top-0 flex h-full w-full items-center justify-end pb-1'>
				<div className='relative left-[233px]'>
					<Loops />
				</div>
				<div
					className=' pointer-events-none absolute left-0 top-0 h-full w-full'
					style={{ background: 'linear-gradient(80.28deg, #F0F0F0 39.95%, rgba(240, 240, 240, 0) 67.74%)' }}></div>
			</div>

			<div className='relative w-[600px]'>
				<h1 className='w-[600px] font-mona text-[60px] font-[900] uppercase leading-[1.2]'>
					Web3 wonderland and lifestyle
				</h1>
				<p className='mt-6 w-[506px] text-lg font-normal'>
					Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host their
					own blockchain-based spaces without any coding experience.
				</p>
				<button className='button mt-8'>
					<span>Explore Demo</span>

					<ArrowRight />
				</button>
			</div>
		</section>
	)
}
