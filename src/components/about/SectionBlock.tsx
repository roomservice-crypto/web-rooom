export default function SectionBlock() {
	return (
		<>
			<section className='flex aspect-[1440/550] border-b border-dark mobile:aspect-auto mobile:flex-col'>
				<div className='w-[50%] border-r border-dark px-[80px] py-[60px] mobile:w-full mobile:border-none mobile:px-4 mobile:py-5'>
					<h2 className='font-mona text-[48px] font-[700] leading-[52px] mobile:text-[24px] mobile:leading-[30px]'>
						Multi chain support empowers the creation of Rooms across a variety of blockchains, no need to compromise!
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
				<div className='w-[50%] py-[60px] px-[80px] mobile:w-full mobile:border-none mobile:px-4 mobile:py-5'>
					<h2 className='font-mona text-[48px] font-[700] leading-[52px] mobile:text-[24px] mobile:leading-[30px]'>
						Spaces are tokenized as NFTs (ERC-721) giving users true ownership and transferability of their rooms.
					</h2>
				</div>
			</section>
		</>
	)
}
