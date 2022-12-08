import TransitionBadge from '@/components/common/TransitionBadge'
import Record from '@/svgs/record.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import Close from '@/svgs/close.svg'

export default function CardLayer(props: { room: any }) {
	const { room } = props

	if (room)
		return (
			<TransitionBadge appear show={!!room} toClassName='left-20' fromClassName='left-0'>
				<div className='fixed top-[92px] h-[492px] w-[448px] overflow-hidden rounded-[32px] border-2 border-black bg-white transition-all duration-150'>
					<div className='flex h-[120px] justify-end border-b-2 border-dashed border-black bg-[#BAEDBD] p-6'>
						<Close className='cursor-pointer' />
					</div>
					<div className='px-8'>
						<div className='mt-3 flex justify-between'>
							<span className='-mt-12 h-[96px] w-[96px] rounded-full border-4 border-white bg-green-400 shadow-lg'></span>
							<span className='flex'>
								<span className='inline-block h-8 w-8 rounded-full border border-white bg-blue-400'></span>
								<span className='-ml-4 inline-block h-8 w-8 rounded-full border border-white bg-indigo-400'></span>
								<span className='-ml-4 inline-block h-8 w-8 rounded-full border border-white bg-violet-400'></span>
								<span className='-ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white'>+6</span>
							</span>
						</div>
						<div className='mt-6 text-2xl font-semibold'>STEPN | Public Beta Phase V</div>
						<div className='text-md font-normal text-black text-opacity-40'>Room NFT owned by 0x1240</div>
						<button className='mt-4 flex gap-x-2 rounded-[34px] border-2 border-dashed border-[#1c1c1c] py-3 px-6'>
							<Record /> Voice chatting...
						</button>
						<div className='mt-4 text-sm font-normal text-black text-opacity-40'>
							<span>
								<span className='mr-1 font-semibold text-black text-opacity-80'>302</span>
								Following
							</span>
							<span className='ml-5'>
								<span className='mr-1 font-semibold text-black text-opacity-80'>8</span>
								Likes
							</span>
						</div>
						<div className='mt-8 flex items-center'>
							<button className='rounded-[24px] bg-[#1C1C1C] py-6 px-8 text-white'>Say Hi</button>
							<button className='ml-3 flex rounded-[24px] border-2 border-[#1c1c1c] bg-white py-6 px-8 shadow-[0_4px_#141414]'>
								Explore room <ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</TransitionBadge>
		)
	else return null
}
