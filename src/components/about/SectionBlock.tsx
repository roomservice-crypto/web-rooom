export default function SectionBlock() {
	return (
		<>
			<section className='flex aspect-[1440/550] border-b border-dark mobile:aspect-auto mobile:flex-col'>
				<div className='w-[50%] border-r border-dark px-[80px] py-[60px] mobile:w-full mobile:border-none mobile:px-4 mobile:py-5'>
					<h2 className='font-mona text-[48px] font-[800] leading-[52px] mobile:text-[24px] mobile:leading-[30px]'>
						Free to choose on which chain the room will be created
					</h2>
				</div>
				<div className='flex w-[50%] items-center justify-center mobile:w-full'>
					<img className='w-full max-w-[1000px]' src='/assets/about/chains.png' />
				</div>
			</section>

			<section className=' mx-auto flex aspect-[1440/550] mobile:aspect-auto mobile:flex-col-reverse'>
				<div className='flex  w-[50%] items-center justify-center border-r border-dark mobile:w-full mobile:border-none'>
					<img className='w-full max-w-[1000px]' src='/assets/about/nft.png' />
				</div>
				<div className='py-[60px]] w-[50%] px-[80px] mobile:w-full mobile:border-none mobile:px-4 mobile:py-5'>
					<h2 className='font-mona text-[48px] font-[800] leading-[52px] mobile:text-[24px] mobile:leading-[30px]'>
						Each Room is a unique NFT owned by you and freely transferable
					</h2>
				</div>
			</section>
		</>
	)
}
