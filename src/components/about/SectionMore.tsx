export default function SectionMore() {
	return (
		<>
			<div className='bg-[#FAE76C] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px] mobile:px-4 mobile:pt-8 mobile:pb-4 mobile:text-[36px] mobile:leading-[42px]'>
				MORE FEATURES
			</div>

			<section className='flex aspect-[1440/702] border-t border-dark mobile:aspect-auto mobile:flex-col'>
				<div className='flex w-[50%] flex-col items-center justify-center border-r border-dark mobile:w-full mobile:border-b mobile:border-r-0'>
					<img className='w-full max-w-[1000px]' src='/assets/about/gallery.png' />
					<div className='px-20 py-8 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Posts & Gallery based on IPFS
						</h3>
						<p className=' mt-4 text-lg leading-[24px]'>
							The content component implemented based on IPFS can ensure that the blog or photos you publish will
							confirm your ownership through the blockchain and be used to display in any room.
						</p>
					</div>
				</div>

				<div className='flex w-[50%] flex-col items-center justify-center mobile:w-full mobile:flex-col-reverse'>
					<div className='px-20 py-8 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Chitchat with your friends in a private space
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Explore your friend's personal room, participate in activities initiated by him, and build intimacy
							through social components such as Audio Chat.
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
							Open Lightweight Gaming Ecosystem
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Room Service is always open to working with third-party developers to build a whole new ecosystem of games
							by integrating the wonderful games of Web2 into the Web3 world and harnessing the power of the economic
							layer of smart contracts. Inviting your social friends to join the game now will unlock even more fun and
							rewards!
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
								On-chain reputation and achievements represent a room's Web3 experience and honor.
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
							Fun Campaigns
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							With the Campaigns component, you can quickly launch specific activities in the room, such as funny game
							missions, to achieve marketing goals.
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
							NFT Bundle contains a series of NFT tools for minting, selling and auctioning NFTs that you can use to
							build your own marketplace.
						</p>
					</div>
					<img className='mt-auto  w-full' src='/assets/about/showcase.png' />
				</div>
				<div className='flex w-[33%] flex-1 flex-col items-center justify-center pb-[50px] mobile:w-full mobile:pb-0 mobile:flex-col-reverse'>
					<div className='p-20 mobile:p-4'>
						<h3 className='text-[36px] font-semibold leading-[42px] mobile:text-[24px] mobile:leading-[30px]'>
							Data Cube
						</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							In your space, you are free to display any data panel you want to display or that you are watching.
						</p>
					</div>
					<img className='mt-auto  w-full' src='/assets/about/cube.png' />
				</div>
			</section>
		</>
	)
}
