import Tag from '@/components/common/Tag'
import { useEffect, useRef, useState } from 'react'
import Button from '../common/Button'
import TransitionCard from '../common/TransitionCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LockedCard() {
	const [activeItem, setActiveItem] = useState(0)
	const article1 = useRef<HTMLElement>(null)
	const article2 = useRef<HTMLElement>(null)
	const article3 = useRef<HTMLElement>(null)
	const article4 = useRef<HTMLElement>(null)
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

	useEffect(() => {
		if (article1.current && article2.current && article3.current && article4.current) {
			let centerH = 0
			const article1Rangle = [article1.current.offsetTop, article1.current.offsetTop + article1.current.offsetHeight]
			const article2Rangle = [article2.current.offsetTop, article2.current.offsetTop + article2.current.offsetHeight]
			const article3Rangle = [article3.current.offsetTop, article3.current.offsetTop + article3.current.offsetHeight]
			const article4Rangle = [article4.current.offsetTop, article4.current.offsetTop + article4.current.offsetHeight]

			const scrollHandler = () => {
				centerH = window.scrollY + document.documentElement.clientHeight / 2

				const centerArticle = () => {
					if (centerH < article1Rangle[1]) return 1
					else if (centerH > article2Rangle[0] && centerH < article2Rangle[1]) return 2
					else if (centerH > article3Rangle[0] && centerH < article3Rangle[1]) return 3
					else if (centerH > article4Rangle[0]) return 4
					else return 0
				}

				const centerIndex = centerArticle()

				setActiveItem(centerIndex)
			}

			window.addEventListener('scroll', scrollHandler)

			return () => window.removeEventListener('scroll', scrollHandler)
		}
	}, [article1.current, article2.current, article3.current, article4.current])

	return (
		<section>
			<div className='flex'>
				<div className='flex-1 flex justify-end bg-[#0A0517]'>
					<div className='w-[720px] px-[77px] py-[188px]' ref={stickyContainer}>
						<div className='w-[566px] h-[566px] relative' ref={stickyElement}>
							<TransitionCard show={activeItem === 1}>
								<img src='/assets/home/feature/01.png' className='absolute top-0 w-[566px] h-[566px]' />
							</TransitionCard>
							<TransitionCard show={activeItem === 2}>
								<img src='/assets/home/feature/02.png' className='absolute top-0 w-[566px] h-[566px]' />
							</TransitionCard>
							<TransitionCard show={activeItem === 3}>
								<img src='/assets/home/feature/03.png' className='absolute top-0 w-[566px] h-[566px]' />
							</TransitionCard>
							<TransitionCard show={activeItem === 4}>
								<img src='/assets/home/feature/04.png' className='absolute top-0 w-[566px] h-[566px]' />
							</TransitionCard>
						</div>
					</div>
				</div>
				<div className='flex-1 bg-[#B9A9FB]'>
					<div className='w-[720px]'>
						<article className='p-20' ref={article1}>
							<h3 className='font-unbounded font-[900] text-[60px] leading-[64px]'>
								Personalize own on-chain space and socialize with friends
							</h3>
							<p className='font-medium text-lg leading-6 mt-[156px]'>
								Once you've created your own room, you can start personalizing it for free. Show all the information you
								want and invite friends into the space to start socializing with you!
							</p>
							<div className='flex flex-wrap gap-2 mt-4 w-[444px]'>
								<Tag>Socialize</Tag>
								<Tag>Posts & Gallery</Tag>
								<Tag>Profile Skin</Tag>
								<Tag>Reputation</Tag>
								<Tag>Data Space</Tag>
							</div>
							<Button className='mt-12 font-bold'>Explore Demo</Button>
						</article>
						<article className='p-20' ref={article2}>
							<h3 className='font-unbounded font-[900] text-[60px] leading-[64px]'>
								Enjoy a variety of Fun Games with tradable assets
							</h3>
							<p className='font-medium text-lg leading-6 mt-[156px]'>
								Freely shuttle between fun games with your space friends, and game assets can be sold or auctioned as
								NFTs in the NFT market in your room.
							</p>
							<div className='flex flex-wrap gap-2 mt-4 w-[444px]'>
								<Tag>Socialize</Tag>
								<Tag>Games</Tag>
								<Tag>Profile Skin</Tag>
								<Tag>NFT Bundle</Tag>
							</div>
							<Button className='mt-12 font-bold'>Explore Demo</Button>
						</article>
						<article className='p-20' ref={article3}>
							<h3 className='font-unbounded font-[900] text-[60px] leading-[64px]'>
								Composite room that communicates directly with target users
							</h3>
							<p className='font-medium text-lg leading-6 mt-[156px]'>
								As a project party, you can publish the latest news about the project, recruitment information, display
								relevant token/NFT data, and launch various marketing activities in the room. And these are fast,
								composite, and blockchain-secured (compared to Twitter).
							</p>

							<Button className='mt-12 font-bold'>Explore Demo</Button>
						</article>
						<article className='p-20' ref={article4}>
							<h3 className='font-unbounded font-[900] text-[60px] leading-[64px]'>
								Easily Customize your on-chain paradise without coding
							</h3>
							<p className='font-medium text-lg leading-6 mt-[156px]'>
								From now on, you can easily customize your on-chain room to look anything you want with no restrictions,
								and it's always owned and controlled by you.
							</p>

							<Button className='mt-12 font-bold'>Explore Demo</Button>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}
