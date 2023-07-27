import Value1 from '@/svgs/about/value-1.svg'
import Value2 from '@/svgs/about/value-2.svg'
import Value3 from '@/svgs/about/value-3.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import { useRouter } from 'next/router'

export default function SectionValues() {
	const router = useRouter()

	return (
		<>
			<div className='bg-[#FAE76C] px-20 py-10 font-mona text-[60px] font-[900] leading-[95px] mobile:px-4 mobile:pt-8 mobile:pb-4 mobile:text-[36px] mobile:leading-[42px]'>
				World Room's Values
			</div>

			<section className='grid grid-cols-3 border-t border-dark mobile:block'>
				<div className='p-20 pt-[90px] mobile:border-b mobile:border-dark mobile:px-4 mobile:pt-8 mobile:pb-10'>
					<div className='max-w-[450px] '>
						<Value1 />

						<h3 className='mt-8 mb-3  text-[30px] font-semibold leading-[36px]'>Emphasis on User Ownership</h3>

						<p>
							World Room strives not only to help user create and customize their own spaces but also take ownership of
							these spaces and the content they create and publish within them- an important ethos consistent with that
							of crypto as a whole!
						</p>
					</div>
				</div>
				<div className='border-l border-r border-dark p-20 pt-[90px] mobile:border-l-0 mobile:border-r-0 mobile:border-b mobile:px-4 mobile:pt-8 mobile:pb-10'>
					<div className='max-w-[450px] '>
						<Value2 />

						<h3 className='mt-8 mb-3  text-[30px] font-semibold leading-[36px]'>Provide Composability</h3>

						<p>
							World Room provides a series of room infrastructure components, which will appear in various rooms in free
							combination
						</p>
					</div>
				</div>
				<div className='p-20 pt-[90px] mobile:border-b mobile:border-dark mobile:px-4 mobile:pt-8 mobile:pb-10'>
					<div className='max-w-[450px] '>
						<Value3 />

						<h3 className='mt-8 mb-3 text-[30px] font-semibold leading-[36px]'>Advocate Interoperability</h3>

						<p>
							In addition to realizing interoperability between multiple chains, it also aims to allow game assets to
							interoperate between ecosystems
						</p>
					</div>
				</div>
			</section>

			<section className='flex aspect-[1440/550] border-t border-dark mobile:aspect-auto mobile:flex-col'>
				<div className=' w-[50%] border-r border-dark py-[96px] pl-20 mobile:w-full mobile:border-none mobile:px-4 mobile:py-8'>
					<h3 className='w-[490px] font-mona text-[48px] font-[800] leading-[52px] mobile:w-full mobile:text-[36px] mobile:font-[700] mobile:leading-[1.2]'>
						Create, customize and take ownership of your own free web3 space today!
					</h3>

					<button onClick={() => router.push('/map')} className='button mt-16 mobile:mt-8'>
						<span>Explore Demo</span>

						<ArrowRight />
					</button>
				</div>

				<div className='relative w-[50%] overflow-hidden mobile:mt-10 mobile:h-[200px] mobile:w-full'>
					<figure className='absolute top-[30px] left-[-210px] w-full mobile:left-0 mobile:top-0'>
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
