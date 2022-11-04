import FeatureChain from '@/svgs/feature-chain.svg'
import FeatureLink from '@/svgs/feature-link.svg'

export default function FeatureScene() {
	return (
		<section>
			<div className='mx-auto w-[1440px]'>
				<div className='p-20 h-[660px] relative'>
					<h2 className='w-[577px] font-[900] font-unbounded leading-[52px] text-[48px]'>
						Free to choose on which chain the room will be created
					</h2>
					<FeatureChain className='absolute right-[52.52px] top-[35px]' />
				</div>
				<div className='p-20 h-[660px] relative overflow-hidden'>
					<h2 className='w-[582px] font-[900] font-unbounded leading-[52px] text-[48px] absolute right-20 top-20'>
						Each Room is a unique NFT owned by you and freely transferable
					</h2>
					<FeatureLink className='absolute left-[10px] -bottom-[0px]' />
				</div>
			</div>
		</section>
	)
}
