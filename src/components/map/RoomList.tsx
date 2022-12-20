import Location from '@/svgs/location.svg'
import ChevronRight from '@/svgs/chevron-right.svg'
import Earth from '@/svgs/earth.svg'
import { typeWords } from '@/mock'
import TypeIcon from '@/components/map/TypeIcon'
import { getRooms } from '@/utils/storage'
import { Transition } from '@headlessui/react'
import React, { Dispatch, useState } from 'react'
import clsx from 'clsx'
import mapboxgl from 'mapbox-gl'

export default function RoomList(props: {
	map: mapboxgl.Map | null
	ready: boolean
	open: boolean
	room: any
	setRoom: Dispatch<string>
}) {
	const { ready, room, setRoom, open, map } = props

	const rooms = getRooms()
	const halfLength = Math.floor(rooms.length / 2)
	const randomOrderRooms = rooms.slice(halfLength).concat(rooms.slice(0, halfLength))

	const [tab, setTab] = useState<'follow' | 'nearby'>('follow')

	return (
		<Transition
			appear
			show={ready && open}
			enterFrom='opacity-0 right-[-100px]'
			enter='transition-all '
			as={React.Fragment}>
			<div className='fixed top-8 right-8 z-[11] flex h-[764px] gap-x-4 rounded-[32px] border-2 border-dark bg-[#BAEDBD] p-3'>
				<div className='w-[368px] overflow-auto rounded-[32px] border border-dark bg-white'>
					<div className='flex items-center gap-x-2 px-8 pt-8'>
						<span className='inline-block p-1'>
							<Earth className='h-5 w-5' />
						</span>
						<ChevronRight className={'text-black text-opacity-40'} />
						<span className=' inline-block rounded-md bg-black bg-opacity-5 py-1 px-2'>South Korea</span>
					</div>
					<div className='mt-4 px-8 text-2xl font-semibold'>Seoul area</div>
					<div className='mt-1 px-8 text-black text-opacity-80'>440+ Room</div>

					<div className='mt-6 px-8'>
						<div className='flex rounded-[18px] bg-black bg-opacity-5'>
							<button
								onClick={() => setTab('follow')}
								className={clsx('h-12 w-[50%] rounded-[18px] ', tab === 'follow' && 'border-2 border-dark bg-white')}>
								Follow
							</button>
							<button
								onClick={() => setTab('nearby')}
								className={clsx('h-12 w-[50%] rounded-[18px] ', tab === 'nearby' && 'border-2 border-dark bg-white')}>
								Nearby
							</button>
						</div>
					</div>

					<div className='mt-4 border-t border-dashed border-dark'></div>

					<div className='divide-y divide-black divide-opacity-10'>
						{(tab === 'follow' ? rooms : randomOrderRooms).map(r => (
							<div
								onClick={() => {
									map?.flyTo({ center: r.coordinates })
									setRoom(r)
								}}
								key={r._id}
								className='flex cursor-pointer items-center gap-x-3 px-8 py-6 hover:bg-black hover:bg-opacity-5'>
								<img src={r.avatar} className=' h-10 w-10 rounded-full' />
								<div>
									<div className='flex items-center gap-x-1 font-semibold'>
										{r.name}.room <TypeIcon type={r.type} className='h-4 w-4' />
									</div>
									<div className='text-sm text-black text-opacity-40'>{typeWords(r.type)}</div>
								</div>
								<Location
									className={clsx(
										'ml-auto transition-opacity hover:opacity-100',
										r._id === room?._id ? 'opacity-100' : 'opacity-0'
									)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</Transition>
	)
}
