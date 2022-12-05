import Image from 'next/image'

export default function SectionCard() {
	return (
		<>
			<section className='mx-auto h-[900px] w-[1440px] overflow-hidden border-b border-dark pt-[96px]'>
				<h2 className='px-20 font-mona text-[60px] font-[900] uppercase leading-[64px]'>
					Personalize own on-chain space and socialize with friends
				</h2>
				<div className='flex'>
					<div className='flex w-[547px] flex-1 flex-col justify-between pb-[96px] pt-10'>
						<p className='px-20 text-lg leading-[24px]'>
							Once you've created your own room, you can start personalizing it for free. Show all the information you
							want and invite friends into the space to start socializing with you!
						</p>

						<div className='flex flex-wrap gap-x-3 gap-y-2 pl-20'>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Socialize</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>
								Posts & Gallery
							</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Profile Skin</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Reputation</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Data Space</span>
						</div>
					</div>

					<figure className='w-[813px] flex-shrink-0'>
						<Image src='/assets/about/card-1.png' height={676} width={813} />
					</figure>
				</div>
			</section>

			<section className='mx-auto h-[900px] w-[1440px] overflow-hidden border-b border-dark pt-[96px]'>
				<h2 className='px-20 font-mona text-[60px] font-[900] uppercase leading-[64px]'>
					Enjoy a variety of Fun Games with tradable assets
				</h2>
				<div className='flex'>
					<div className='flex w-[547px] flex-1 flex-col justify-between pb-[96px] pt-10 '>
						<p className='px-20 text-lg leading-[24px]'>
							Freely shuttle between fun games with your space friends, and game assets can be sold or auctioned as NFTs
							in the NFT market in your room.
						</p>

						<div className='flex flex-wrap gap-x-3 gap-y-2 pl-20'>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Socialize</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Games</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Profile Skin</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>NFT Bundle</span>
						</div>
					</div>

					<figure className='w-[813px] flex-shrink-0'>
						<Image src='/assets/about/card-2.png' height={676} width={813} />
					</figure>
				</div>
			</section>

			<section className='mx-auto h-[900px] w-[1440px] overflow-hidden border-b border-dark pt-[96px]'>
				<h2 className='px-20 font-mona text-[60px] font-[900] uppercase leading-[64px]'>
					Composite room that communicates directly with target users
				</h2>
				<div className='flex'>
					<div className='flex w-[547px] flex-1 flex-col justify-between pb-[96px] pt-10'>
						<p className='px-20 text-lg leading-[24px]'>
							As a project party, you can publish the latest news about the project, recruitment information, display
							relevant token/NFT data, and launch various marketing activities in the room. And these are fast,
							composite, and blockchain-secured (compared to Twitter).
						</p>

						<div className='flex flex-wrap gap-x-3 gap-y-2 pl-20'>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>
								Posts & Gallery
							</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Campaigns</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>NFT Bundle</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Data Space</span>
						</div>
					</div>

					<figure className='w-[813px] flex-shrink-0'>
						<Image src='/assets/about/card-3.png' height={612} width={813} />
					</figure>
				</div>
			</section>

			<section className='mx-auto h-[900px] w-[1440px] overflow-hidden pt-[96px]'>
				<h2 className='px-20 font-mona text-[60px] font-[900] uppercase leading-[64px]'>
					Easily Customize your on-chain paradise without coding
				</h2>
				<div className='flex'>
					<div className='flex w-[547px] flex-1 flex-col justify-between pb-[96px] pt-10'>
						<p className='px-20 text-lg leading-[24px]'>
							As a project party, you can publish the latest news about the project, recruitment information, display
							relevant token/NFT data, and launch various marketing activities in the room. And these are fast,
							composite, and blockchain-secured (compared to Twitter).
						</p>

						<div className='flex flex-wrap gap-x-3 gap-y-2 pl-20'>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Socialize</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Games</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>Profile Skin</span>
							<span className='inline-block rounded-full border border-dark px-6 py-[6px] text-xs'>NFT Bundle</span>
						</div>
					</div>

					<figure className='w-[813px] flex-shrink-0'>
						<Image src='/assets/about/card-4.png' height={676} width={813} />
					</figure>
				</div>
			</section>
		</>
	)
}
