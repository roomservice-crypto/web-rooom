import TransitionBadge from '@/components/common/TransitionBadge'
import ArrowRight from '@/svgs/arrow-right.svg'
import { shortenAddress } from '@/utils'
import { typeWords } from '@/mock'
import StateIcon from './StateIcon'
import { useRouter } from 'next/router'
import { Dispatch, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

export default function CardLayer(props: {
	room: any
	setRoom: Dispatch<any>
	map: mapboxgl.Map | null
	isMobile: boolean
}) {
	const { room, map, isMobile } = props
	const router = useRouter()

	const [isFollowing, setIsFollowing] = useState(false)

	useEffect(() => {
		setIsFollowing(false)
	}, [room])

	if (room)
		if (isMobile)
			return (
				<TransitionBadge appear show={!!room} toClassName='opacity-100' fromClassName='opacity-0'>
					<div className='fixed bottom-6 left-0 right-0 flex items-center justify-center'>
						<div
							onClick={() => map?.flyTo({ center: room.coordinates })}
							className='h-[264px] w-[327px] cursor-pointer overflow-hidden rounded-[32px] border-2 border-black bg-light transition-all duration-150 hover:shadow-[0_0_0_12px_rgba(0,0,0,0.2)]'>
							<div
								className='flex h-[67px] justify-end border-b-2 border-dashed border-black bg-[#BAEDBD] p-6'
								style={{ backgroundColor: room.backgroundColor }}></div>

							<div className='px-8'>
								{/* avatar */}
								<div className='mt-3 flex justify-between'>
									<img
										key={room.avatar}
										src={room.avatar}
										className='-mt-12 h-[64px] w-[64px] rounded-full border-2 border-white bg-green-400 shadow-lg'
										style={{ backgroundColor: room.backgroundColor }}></img>
									{room.visitors?.length > 0 && (
										<span className='-mt-8 flex'>
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
									)}
								</div>

								{/* base */}
								<div className='mt-4 font-semibold'>{room.name}.room</div>
								<div className='text-xs font-normal text-black text-opacity-40'>
									Room NFT owned by {shortenAddress(room.address)}
								</div>

								{/* state */}
								<button className='mt-4 flex items-center gap-x-2 rounded-[34px] border-2 border-dashed border-[#1c1c1c] py-[6px] px-3 text-sm'>
									<StateIcon type={room.type} className='h-4 w-4' /> {typeWords(room.type)}
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
							</div>
						</div>
					</div>
				</TransitionBadge>
			)
		else
			return (
				<TransitionBadge appear show={!!room} toClassName='left-20' fromClassName='left-0'>
					<div
						onClick={() => map?.flyTo({ center: room.coordinates })}
						className='fixed top-[92px] w-[448px] cursor-pointer overflow-hidden rounded-[32px] border-2 border-black bg-light bg-white pb-10 transition-all duration-150 hover:shadow-[0_0_0_12px_rgba(0,0,0,0.2)]'>
						<div
							className='flex h-[120px] justify-end border-b-2 border-dashed border-black bg-[#BAEDBD] p-6'
							style={{ backgroundColor: room.backgroundColor }}></div>

						<div className='px-8'>
							{/* avatar */}
							<div className='mt-3 flex justify-between'>
								<img
									key={room.avatar}
									src={room.avatar}
									className='-mt-12 h-[96px] w-[96px] rounded-full border-4 border-white bg-green-400 shadow-lg'
									style={{ backgroundColor: room.backgroundColor }}></img>
								{room.visitors?.length > 0 && (
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
								)}
							</div>

							{/* base */}
							<div className='mt-6 text-2xl font-semibold'>{room.name}.room</div>
							<div className='text-md font-normal text-black text-opacity-40'>
								Room NFT owned by {shortenAddress(room.address)}
							</div>

							{/* state */}
							<button className='mt-4 flex items-center gap-x-2 rounded-[34px] border-2 border-dashed border-[#1c1c1c] py-3 px-6'>
								<StateIcon type={room.type} className='h-5 w-5' /> {typeWords(room.type)}
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
								{isFollowing ? (
									<button
										onClick={e => {
											e.stopPropagation()
											setIsFollowing(true)
										}}
										className='rounded-[24px] border-2 border-dark bg-black bg-opacity-5 py-6 px-8 font-semibold'>
										Following
									</button>
								) : (
									<button
										onClick={e => {
											e.stopPropagation()
											setIsFollowing(true)
										}}
										className='rounded-[24px] bg-dark py-6 px-8 text-xl font-semibold leading-[26px] text-white hover:bg-opacity-90'>
										Follow
									</button>
								)}
								<button
									onClick={() => router.push(`/room/${room.address}`)}
									className='ml-3 flex flex-1 justify-center gap-x-4 rounded-[24px] border-2 border-[#1c1c1c] bg-white py-6 px-6 text-center text-xl font-semibold leading-[26px] shadow-[0_4px_#141414] transition-all hover:bg-black hover:bg-opacity-10 hover:shadow-none'>
									Explore room <ArrowRight />
								</button>
							</div>
						</div>
					</div>
				</TransitionBadge>
			)
	else return null
}
