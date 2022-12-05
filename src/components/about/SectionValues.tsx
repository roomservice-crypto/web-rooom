import Value1 from '@/svgs/about/value-1.svg'
import Value2 from '@/svgs/about/value-2.svg'
import Value3 from '@/svgs/about/value-3.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import Image from 'next/image'

export default function SectionValues() {
	return (
		<>
			<div className='mx-auto w-[1440px] bg-[#FAE76C] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px]'>
				Room Service's Values
			</div>

			<section className='mx-auto flex w-[1440px] border-t border-dark'>
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
				<div className='border-l border-r border-dark p-20 pt-[90px]'>
					<Value3 />

					<h3 className='mt-8 mb-3 text-[30px] font-semibold leading-[36px]'>Advocate Interoperability</h3>

					<p>
						In addition to realizing interoperability between multiple chains, it also aims to allow game assets to
						interoperate between ecosystems
					</p>
				</div>
			</section>

			<section className='mx-auto flex h-[550px] w-[1440px] border-t border-dark'>
				<div className='w-[50%] border-r border-dark pl-20 pt-[96px]'>
					<h3 className='w-[490px] font-mona text-[48px] font-[900] leading-[52px]'>
						Start owning your private <br /> room For Free Now
					</h3>

					<button
						className='mt-16 flex items-center gap-x-3 rounded-3xl border-2 border-dark py-[21px] px-6 text-xl font-semibold'
						style={{
							background:
								'linear-gradient(93.73deg, rgba(177, 250, 24, 0.45) 0%, rgba(236, 255, 22, 0.45) 46.37%, rgba(245, 210, 22, 0.45) 100%), #FFFFFF'
						}}>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>
				<div>
					<Image src='/assets/about/circle.png' width={720} height={550} />
				</div>
			</section>
		</>
	)
}
