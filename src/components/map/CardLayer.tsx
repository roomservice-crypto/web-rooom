import TransitionBadge from '@/components/common/TransitionBadge'
import ArrowRight from '@/svgs/arrow-right.svg'
import Close from '@/svgs/close.svg'
import { shortenAddress } from '@/utils'
import { typeWords } from '@/mock'
import { toast } from 'react-hot-toast'
import StateIcon from './StateIcon'
import { useRouter } from 'next/router'

export default function CardLayer(props: { room: any }) {
	const { room } = props
	const router = useRouter()

	if (room)
		return (
			<TransitionBadge appear show={!!room} toClassName='left-20' fromClassName='left-0'>
				<div className='fixed top-[92px] h-[492px] w-[448px] overflow-hidden rounded-[32px] border-2 border-black bg-white transition-all duration-150'>
					<div
						className='flex h-[120px] justify-end border-b-2 border-dashed border-black bg-[#BAEDBD] p-6'
						style={{ backgroundColor: room.backgroundColor }}>
						<Close className='cursor-pointer' />
					</div>

					<div className='px-8'>
						{/* avatar */}
						<div className='mt-3 flex justify-between'>
							<img
								key={room.avatar}
								src={room.avatar}
								className='-mt-12 h-[96px] w-[96px] rounded-full border-4 border-white bg-green-400 shadow-lg'
								style={{ backgroundColor: room.backgroundColor }}></img>
							<span className='flex'>
								<img
									src={room.visitors[0]}
									className='inline-block h-8 w-8 rounded-full border border-white bg-blue-400'></img>
								<img
									src={room.visitors[1]}
									className='-ml-4 inline-block h-8 w-8 rounded-full border border-white bg-indigo-400'></img>
								<img
									src={room.visitors[2]}
									className='-ml-4 inline-block h-8 w-8 rounded-full border border-white bg-violet-400'></img>
								<span className='-ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white'>
									+{room.visitorsNumber}
								</span>
							</span>
						</div>

						{/* base */}
						<div className='mt-6 text-2xl font-semibold'>{room.name}</div>
						<div className='text-md font-normal text-black text-opacity-40'>
							Room NFT owned by {shortenAddress(room.address)}
						</div>

						{/* state */}
						<button className='mt-4 flex gap-x-2 rounded-[34px] border-2 border-dashed border-[#1c1c1c] py-3 px-6'>
							<StateIcon type={room.type} /> {typeWords(room.type)}
						</button>

						{/* following & likes */}
						<div className='mt-4 text-sm font-normal text-black text-opacity-40'>
							<span>
								<span className='mr-1 font-semibold text-black text-opacity-80'>{room.followers}</span>
								Following
							</span>
							<span className='ml-5'>
								<span className='mr-1 font-semibold text-black text-opacity-80'>{room.likes}</span>
								Likes
							</span>
						</div>

						{/* buttons */}
						<div className='mt-8 flex items-center'>
							<button onClick={() => toast('Coming Soon')} className='rounded-[24px] bg-[#1C1C1C] py-6 px-8 text-white'>
								Say Hi
							</button>
							<button
								onClick={() => router.push(`/room/${room.address}`)}
								className='ml-3 flex rounded-[24px] border-2 border-[#1c1c1c] bg-white py-6 px-8 shadow-[0_4px_#141414]'>
								Explore room <ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</TransitionBadge>
		)
	else return null
}
