import Logo from '@/svgs/logo.svg'
import Web3 from '@/svgs/Web3.svg'
import Button from '@/components/common/Button'
import ChainScene from './scenes/ChainScene'

export default function HeroScene() {
	return (
		<section className='h-[900px] bg-slate-100 overflow-hidden relative'>
			<div className='absolute w-[2500px] h-[900px] translate-x-[-800px] left-[50%]'>
				<ChainScene />
			</div>

			<div className='w-[1440px] mx-auto h-full overflow-auto'>
				<div className='ml-[80px] mt-[164px] w-[655px] relative'>
					<Logo />
					<h1 className='font-unbounded font-[900] text-[60px] leading-[64px] mt-[17px]'>
						<span>Customize your</span>
						<br />
						<Web3 />
						<span>wonderland and lifestyle</span>
					</h1>
					<p className='font-medium mt-4 text-lg leading-6 opacity-60'>
						Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host
						their own blockchain-based spaces without any coding experience.
					</p>
					<Button className='mt-8 font-bold font-unbounded'>Explore Demo</Button>
				</div>
			</div>
		</section>
	)
}
