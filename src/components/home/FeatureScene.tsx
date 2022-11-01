import Spline from '@splinetool/react-spline'

export default function FeatureScene() {
	return (
		<section>
			<div className='flex'>
				<div className='flex-1 flex justify-end bg-[#F8DA1B]'>
					<div className='w-[720px] h-[720px] font-unbounded font-[900] p-[80px] text-[60px] leading-[64px]'>
						Free to choose on which chain the room will be created
					</div>
				</div>
				<div className='flex-1 flex justify-start bg-[#F2F4F7]'>
					<div className='w-[720px] h-[720px]'>
						{/* <Spline scene="https://prod.spline.design/06YLWKEsONKIb-rN/scene.splinecode" /> */}
					</div>
				</div>
			</div>
			<div className='flex'>
				<div className='flex-1 flex justify-end bg-[#F2F4F7]'>
					<div className=' w-[720px] h-[720px] p-[80px]'>
						{/* <Spline scene="https://prod.spline.design/CBd84-y-TWU8hf9Y/scene.splinecode" /> */}
					</div>
				</div>
				<div className='flex-1 flex justify-start bg-[#F8DA1B]'>
					<div className='w-[720px] h-[720px] font-unbounded font-[900] p-[80px] text-[60px] leading-[64px]'>
						Each Room is a unique NFT owned by you and freely transferable
					</div>
				</div>
			</div>
		</section>
	)
}
