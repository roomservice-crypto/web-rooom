import Value1 from '@/svgs/about/value-1.svg'
import Value2 from '@/svgs/about/value-2.svg'
import Value3 from '@/svgs/about/value-3.svg'
import ArrowRight from '@/svgs/arrow-right.svg'

export default function SectionValues() {
	return (
		<>
			<div className='bg-[#FAE76C] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px]'>
				Room Service's Values
			</div>

			<section className='flex border-t border-dark'>
				<div className='p-20 pt-[90px]'>
					<Value1 />

					<h3 className='mt-8 mb-3  text-[30px] font-semibold leading-[36px]'>Emphasize Ownership</h3>

					<p>
						Room Service is designed to build a personal environment to build your own content, where everyone owns and
						controls their own room
					</p>
				</div>
				<div className='border-l border-r border-dark p-20 pt-[90px]'>
					<Value2 />

					<h3 className='mt-8 mb-3  text-[30px] font-semibold leading-[36px]'>Provide Composability</h3>

					<p>
						Room Service provides a series of room infrastructure components, which will appear in various rooms in free
						combination
					</p>
				</div>
				<div className='p-20 pt-[90px]'>
					<Value3 />

					<h3 className='mt-8 mb-3 text-[30px] font-semibold leading-[36px]'>Advocate Interoperability</h3>

					<p>
						In addition to realizing interoperability between multiple chains, it also aims to allow game assets to
						interoperate between ecosystems
					</p>
				</div>
			</section>

			<section className='aspect-[1440/550] flex border-t border-dark'>
				<div className='w-[50%] border-r border-dark pl-20 pt-[96px]'>
					<h3 className='w-[490px] font-mona text-[48px] font-[800] leading-[52px]'>
						Start owning your private <br /> room For Free Now
					</h3>

					<button className='button mt-16'>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>

				<div className='relative w-[50%] overflow-hidden'>
					<figure className='absolute w-full top-[30px] left-[-210px]'>
						<img
							className='w-[100%] origin-center animate-spin-about-circle'
							src='/assets/about/circle-full.png'
							width={851}
							height={851}
						/>
					</figure>
				</div>
			</section>
		</>
	)
}
