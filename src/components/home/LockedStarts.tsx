import Button from '../common/Button'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LockedStarts() {
	const stickyElement = useRef<HTMLDivElement>(null)
	const stickyContainer = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// fix sticky not working under GSAP ScrollSmoother
		ScrollTrigger.create({
			trigger: stickyContainer.current,
			start: 'top top',
			endTrigger: stickyContainer.current,
			end: 'bottom bottom',
			pin: stickyElement.current,
			pinSpacing: false
		})
	}, [])

	return (
		<section>
			<div className='flex'>
				<div className='flex-1 flex justify-end  bg-[#B9A9FB]'>
					<div className='p-[80px] w-[720px]' ref={stickyContainer}>
						<div className='' ref={stickyElement}>
							<span className='font-[900] font-unbounded text-[60px] leading-[64px]'>
								Everything starts with Room Service's rich components
							</span>
							<Button className='mt-[364px]'>Learn More</Button>
						</div>
					</div>
				</div>
				<div className='flex-1'>
					<div>
						<div className='bg-[#EAECF0]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>
									Chitchat with your friends in a private space
								</h3>
								<p className='opacity-60 mt-4'>
									Explore your friend's personal room, participate in activities initiated by him, and build intimacy
									through social components such as Audio Chat.
								</p>
								<img src='/assets/home/3d/01.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className=' bg-[#F2F4F7]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>
									Open Lightweight Gaming Ecosystem
								</h3>
								<p className='opacity-60 mt-4'>
									Room Service is always open to working with third-party developers to build a whole new ecosystem of
									games by integrating the wonderful games of Web2 into the Web3 world and harnessing the power of the
									economic layer of smart contracts. Inviting your social friends to join the game now will unlock even
									more fun and rewards!
								</p>
								<img src='/assets/home/3d/02.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className=' bg-[#EAECF0]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>Post & Gallery based on IPFS</h3>
								<p className='opacity-60 mt-4'>
									The blogs and photos you post in your room will be stored in IPFS, which will ensure that they are not
									lost and owned by you.
								</p>
								<img src='/assets/home/3d/03.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className=' bg-[#F2F4F7]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>Profile Cosmetics</h3>
								<p className='opacity-60 mt-4'>
									Aggregate the portfolio and historical activity of any account through the Assets component.
								</p>
								<img src='/assets/home/3d/04.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className='bg-[#EAECF0] '>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>Hall of Fame</h3>
								<p className='opacity-60 mt-4'>
									On-chain reputation and achievements represent a room's Web3 experience and honor.
								</p>
								<img src='/assets/home/3d/05.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className=' bg-[#F2F4F7]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>Fun Campaigns</h3>
								<p className='opacity-60 mt-4'>
									With the Campaigns component, you can quickly launch specific activities in the room, such as funny
									game missions, to achieve marketing goals.
								</p>
								<img src='/assets/home/3d/06.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className='bg-[#EAECF0] '>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>NFT Showcase</h3>
								<p className='opacity-60 mt-7'>
									NFT Bundle contains a series of NFT tools for minting, selling and auctioning NFTs that you can use to
									build your own marketplace.
								</p>
								<img src='/assets/home/3d/07.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>

						<div className=' bg-[#F2F4F7]'>
							<div className='w-[720px] py-12 px-20'>
								<h3 className=' font-unbounded text-[36px] leading-[42px] font-[900]'>Data Cube</h3>
								<p className='opacity-60 mt-4'>
									In your space, you are free to display any data panel you want to display or that you are watching.
								</p>
								<img src='/assets/home/3d/08.png' className='w-[150px] h-[150px] mt-10' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
