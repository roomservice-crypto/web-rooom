import Image from 'next/image'

export default function SectionBlock() {
	return (
		<>
			<section className=' flex aspect-[1440/550] border-b border-dark'>
				<div className='w-[50%] border-r border-dark px-[80px] py-[60px]'>
					<h2 className='font-mona text-[48px] font-[800] leading-[52px]'>
						Free to choose on which chain the room will be created
					</h2>
				</div>
				<div className='flex w-[50%] items-center justify-center'>
					<img className='w-full max-w-[1000px]' src='/assets/about/chains.png' />
				</div>
			</section>

			<section className=' mx-auto flex aspect-[1440/550]'>
				<div className='flex  w-[50%] items-center justify-center border-r border-dark'>
					<img className='w-full max-w-[1000px]' src='/assets/about/nft.png' />
				</div>
				<div className='w-[50%] px-[80px] py-[60px]'>
					<h2 className='font-mona text-[48px] font-[800] leading-[52px]'>
						Each Room is a unique NFT owned by you and freely transferable
					</h2>
				</div>
			</section>
		</>
	)
}
