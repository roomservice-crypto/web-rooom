import Image from 'next/image'

export default function SectionBlock() {
	return (
		<>
			<section className='mx-auto flex h-[550px] w-[1440px] border-b border-dark'>
				<div className='w-[50%] border-r border-dark px-[80px] py-[60px]'>
					<h2 className='font-mona text-[48px] font-[900] leading-[52px]'>
						Free to choose on which chain the room will be created
					</h2>
				</div>
				<div className='w-[50%]'>
					<figure>
						<Image src='/assets/about/chains.png' width={1440} height={1100} />
					</figure>
				</div>
			</section>
			<section className='mx-auto flex h-[550px] w-[1440px]'>
				<div className='w-[50%]  border-r border-dark '>
					<figure>
						<Image src='/assets/about/nft.png' width={1440} height={1100} />
					</figure>
				</div>
				<div className='w-[50%] px-[80px] py-[60px]'>
					<h2 className='font-mona text-[48px] font-[900] leading-[52px]'>
						Each Room is a unique NFT owned by you and freely transferable
					</h2>
				</div>
			</section>
		</>
	)
}
