import Image from 'next/image'

export default function SectionMore() {
	return (
		<>
			<div className='mx-auto w-[1440px] bg-[#FAE76C] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px]'>
				MORE FUTURE
			</div>

			<section className='mx-auto flex w-[1440px] border-t border-dark'>
				<div className='w-[50%] border-r border-dark'>
					<img className='h-[384px] w-[720px]' src='/assets/about/gallery.png' />
					<div className='px-20 py-8'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Post & Gallery based on IPFS</h3>
						<p className=' mt-4 text-lg leading-[24px]'>
							The content component implemented based on IPFS can ensure that the blog or photos you publish will
							confirm your ownership through the blockchain and be used to display in any room.
						</p>
					</div>
				</div>

				<div className='w-[50%]'>
					<div className='px-20 py-8'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Chitchat with your friends in a private space</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Explore your friend's personal room, participate in activities initiated by him, and build intimacy
							through social components such as Audio Chat.
						</p>
					</div>

					<img className='h-[384px] w-[720px]' src='/assets/about/message.png' />
				</div>
			</section>

			<section className='mx-auto flex w-[1440px] border-t border-b border-dark'>
				<div className='w-[50%] border-r border-dark'>
					<img className='h-[412px] w-[720px]' src='/assets/about/games.png' />
					<div className='px-20 py-8'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Post & Gallery based on IPFS</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							Room Service is always open to working with third-party developers to build a whole new ecosystem of games
							by integrating the wonderful games of Web2 into the Web3 world and harnessing the power of the economic
							layer of smart contracts. Inviting your social friends to join the game now will unlock even more fun and
							rewards!
						</p>
					</div>
				</div>

				<div className='w-[50%]'>
					<div className='px-20 pt-20 pb-8'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Profile Cosmetics</h3>
						<p className=' mt-4 text-lg leading-[24px]'>
							Aggregate the portfolio and historical activity of any account through the Assets component.
						</p>
					</div>
					<img className='h-[182px] w-[720px]' src='/assets/about/tags.png' />

					<div className='mt-8 border-t border-dark p-20 pb-8'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Hall of Fame</h3>
						<p className=' mt-4 text-lg leading-[24px]'>
							On-chain reputation and achievements represent a room's Web3 experience and honor.
						</p>
					</div>
					<img className='mb-8 h-[212px] w-[720px]' src='/assets/about/ranking.png' />
				</div>
			</section>

			<section className='mx-auto flex h-[630px] w-[1440px]'>
				<div className='flex w-[33%] flex-1 flex-col pb-[50px]'>
					<div className='p-20'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Fun Campaigns</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							With the Campaigns component, you can quickly launch specific activities in the room, such as funny game
							missions, to achieve marketing goals.
						</p>
					</div>
					<img className='mt-auto h-[290px] w-[480px]' src='/assets/about/campaigns.png' />
				</div>
				<div className='flex w-[33%] flex-1 flex-col border-l border-r border-dark pb-[50px]'>
					<div className='p-20'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>NFT Showcase</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							NFT Bundle contains a series of NFT tools for minting, selling and auctioning NFTs that you can use to
							build your own marketplace.
						</p>
					</div>
					<img className='mt-auto h-[290px] w-[480px]' src='/assets/about/showcase.png' />
				</div>
				<div className='flex w-[33%] flex-1 flex-col pb-[50px]'>
					<div className='p-20'>
						<h3 className='text-[36px] font-semibold leading-[42px]'>Data Cube</h3>
						<p className='mt-4 text-lg leading-[24px]'>
							In your space, you are free to display any data panel you want to display or that you are watching.
						</p>
					</div>
					<img className='mt-auto h-[290px] w-[480px]' src='/assets/about/cube.png' />
				</div>
			</section>
		</>
	)
}
