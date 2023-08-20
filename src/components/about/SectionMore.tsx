export default function SectionMore() {
	return (
		<>
			<div className='bg-[#0052ff] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px] mobile:px-4 mobile:pt-8 mobile:pb-4 mobile:text-[36px] mobile:leading-[42px]'>
				MORE FEATURES
			</div>

			<section className='flex aspect-[1440/702] border-t border-dark mobile:aspect-auto mobile:flex-col'>
				<div className='flex w-[50%] flex-col items-center justify-center border-r border-dark mobile:w-full mobile:border-b mobile:border-r-0'>
					<img className='w-full max-w-[1000px]' src='/assets/about/gallery.png' />
					<div className='px-20 py-8 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							IPFS Secured User Content
						</h3>
						<p className=' mt-4 text-lg leading-[24px]'>
							Content within Friend Room is built on top of IPFS, ensuring that user blog posts, photos and other
							content is user owned. Securely confirm ownership using the power of IPFS's peer to peer network!
						</p>
					</div>
				</div>

				<div className='flex w-[50%] flex-col items-center justify-center mobile:w-full mobile:flex-col-reverse'>
					<div className='px-20 py-8 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Privately chat with friends on-chain!
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Explore your friend's rooms, participate in activities initated by hosts and build friendships using
							social integrations like our Audio Chat system.
						</p>
					</div>

					<img className='w-full max-w-[1000px]' src='/assets/about/message.png' />
				</div>
			</section>

			<section className='flex aspect-[1440/884] border-t border-b border-dark mobile:aspect-auto mobile:flex-col'>
				<div className='flex w-[50%] flex-col items-center justify-center border-r border-dark mobile:w-full mobile:border-r-0 mobile:border-b'>
					<img className='w-full max-w-[1000px]' src='/assets/about/games.png' />
					<div className='px-20 py-8 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Open, Lightweight Gaming Ecosystem
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Friend Room openly collaborates with third-party gaming developers to integrate Web2 native games with
							Web3! In doing so, we've built a diverse ecosystem of on-chain games harnessing the power of smart
							contracts. Invite friends to unlock even more fun and rewards while you game!
						</p>
					</div>
				</div>

				<div className='flex w-[50%] flex-col items-center justify-center mobile:w-full'>
					<div className='mobile:flex mobile:flex-col-reverse mobile:pt-4'>
						<div className='self-start px-20 pt-20 pb-8 mobile:p-4 mobile:pt-8'>
							<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
								Profile Cosmetics
							</h3>
							<p className=' mt-4 text-lg leading-[24px]'>
								Aggregate the portfolio and historical activity of any account through the Assets component.
							</p>
						</div>
						<img className='w-full max-w-[1000px]' src='/assets/about/tags.png' />
					</div>

					<div className='mobile:flex mobile:flex-col-reverse mobile:border-t mobile:border-dark mobile:pt-4'>
						<div className='mt-8 w-full self-start border-t border-dark p-20 pb-8 mobile:mt-0 mobile:border-t-0 mobile:p-4 mobile:pt-8'>
							<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
								Hall of Fame
							</h3>
							<p className=' mt-4 text-lg leading-[24px]'>
								The Hall of Fame feature is a way to track and rank on-chain reputations and achievements. Users will
								compete to boost their room's Web3 experience and social rankings!
							</p>
						</div>
						<img className='mb-8 w-full max-w-[1000px] mobile:mb-0' src='/assets/about/ranking.png' />
					</div>
				</div>
			</section>

			<section className='flex aspect-[1440/630] mobile:aspect-auto mobile:flex-col'>
				<div className='flex w-[33%] flex-1 flex-col items-center justify-center pb-[50px] mobile:w-full mobile:flex-col-reverse mobile:border-b mobile:border-dark mobile:pb-0'>
					<div className='p-20 mobile:p-4 mobile:py-8'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Engaging Campaigns
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							With Friend Room Campaigns, users can quickly launch specific activities in their room, such as funny game
							missions. Doing so can be a powerful tool to boost engagement and achieve marketing goals.
						</p>
					</div>
					<img className='mt-auto  w-full' src='/assets/about/campaigns.png' />
				</div>
				<div className='flex w-[33%] flex-1 flex-col items-center justify-center border-l border-r border-dark pb-[50px] mobile:w-full mobile:flex-col-reverse mobile:border-r-0 mobile:border-l-0 mobile:border-b mobile:border-dark mobile:pb-0'>
					<div className='p-20 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							NFT Showcase
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Build your own NFT marketplace with Friend Room's NFT Bundle which provides multiple tools to help
							facilitate the minting, selling and auctioning processes.
						</p>
					</div>
					<img className='mt-auto  w-full' src='/assets/about/showcase.png' />
				</div>
				<div className='flex w-[33%] flex-1 flex-col items-center justify-center pb-[50px] mobile:w-full mobile:flex-col-reverse mobile:pb-0'>
					<div className='p-20 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Data Cube
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Within Rooms users can freely display powerful metrics and live-feeds of data. Doing so can be done for
							multiple reasons including: tracking engagement, raising awareness and just for fun ( displaying coin
							prices etc)!
						</p>
					</div>
					<img className='mt-auto  w-full' src='/assets/about/cube.png' />
				</div>
			</section>
		</>
	)
}
