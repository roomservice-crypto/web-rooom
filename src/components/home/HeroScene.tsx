import Spline from '@splinetool/react-spline'
import Logo from '@/svgs/logo.svg'
import Web3 from '@/svgs/Web3.svg'
import Button from '@/components/common/Button'
import { useEffect, useRef } from 'react'

export default function HeroScene() {
	const coverRef = useRef<HTMLDivElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	// useEffect(() => {
	// 	function mouseoverPass(event: MouseEvent) {
	// 		console.log('[suni in]', event)

	// 		// canvasRef.current!.dispatchEvent(event)
	// 	}
	// 	coverRef.current!.addEventListener('mouseover', mouseoverPass)

	// 	canvasRef.current!.addEventListener('mouseover', () => {
	// 		console.log('[suni hover]')
	// 	})

	// 	return () => coverRef.current!.removeEventListener('mouseover', mouseoverPass)
	// }, [])

	return (
		<section className='h-[900px] overflow-hidden bg-[#D0D5DD]'>
			<div className='w-[1440px] mx-auto h-full overflow-auto relative'>
				<div className='absolute w-full h-[900px]'>
					<Spline ref={canvasRef} scene='https://prod.spline.design/FHV4M0cax6Jq53nl/scene.splinecode' />
					<div
						ref={coverRef}
						style={{ boxShadow: 'inset  0 0 30px 50px #D0D5DD' }}
						className='absolute  top-0 h-full w-full'></div>
				</div>

				<div className='ml-[80px] mt-[164px] w-[655px] relative'>
					<Logo />
					<h1 className='font-unbounded font-[900] text-[60px] leading-[64px] mt-[17px]'>
						<span>Customize your</span>
						<br />
						<Web3 />
						<span>wonderland and lifestyle</span>
					</h1>
					<p className='font-medium mt-4 text-lg leading-6 opacity-60 w-[613px]'>
						Room Service is the protocol that powers Web3 room facilities, enabling users to build, launch and host
						their own blockchain-based spaces without any coding experience.
					</p>
					<Button className='mt-8 font-bold font-unbounded'>Explore Demo</Button>
				</div>
			</div>
		</section>
	)
}
