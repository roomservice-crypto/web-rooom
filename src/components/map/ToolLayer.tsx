import Plus from '@/svgs/plus.svg'
import Minus from '@/svgs/minus.svg'
import Crosshair from '@/svgs/crosshair.svg'
import Earth from '@/svgs/earth.svg'
import ChevronRight from '@/svgs/chevron-right.svg'
import mapboxgl, { LngLatLike } from 'mapbox-gl'
import React, { Dispatch, useEffect, useState } from 'react'
import ChevronsLeft from '@/svgs/chevrons-left.svg'
import Filter from '@/svgs/filter.svg'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ALL } from '@/constants'
import { useRouter } from 'next/router'
import { getRooms } from '@/utils/storage'

export default function ToolLayer(props: {
	map: mapboxgl.Map | null
	ready: boolean
	filter: string
	setFilter: Dispatch<string>
	room: any
}) {
	const { map, ready, filter, setFilter, room } = props
	const rooms = getRooms()
	const router = useRouter()
	const [localCoords, setLocalCoords] = useState([0, 0])
	const [open, setOpen] = useState(false)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			setLocalCoords([position.coords.longitude, position.coords.latitude])
		})
	}, [])

	return (
		<>
			{/* right bottom zoom buttons */}
			<Transition appear show={ready && !open} enterFrom='opacity-0' enter='transition-all ' as={React.Fragment}>
				<div className='fixed right-8 bottom-[104px] z-[11]'>
					<button
						onClick={() => {
							if (navigator.geolocation) {
								navigator.geolocation.getCurrentPosition(position => {
									map!.flyTo({ center: localCoords as LngLatLike, zoom: 9 })
								})
							}
						}}
						className='rounded-lg border border-dark bg-white p-[10px]'>
						<Crosshair className='h-[20px] w-[20px]' />
					</button>

					<div className='mt-2 flex flex-col overflow-hidden rounded-lg border border-dark bg-white'>
						<button
							onClick={() => map!.zoomTo(map!.getZoom() + 1)}
							className='p-[10px] hover:bg-black hover:bg-opacity-5'>
							<Plus className='h-[20px] w-[20px]' />
						</button>

						<button
							onClick={() => map!.zoomTo(map!.getZoom() - 1 || 1)}
							className=' p-[10px] hover:bg-black hover:bg-opacity-5'>
							<Minus className='h-[20px] w-[20px]' />
						</button>
					</div>
				</div>
			</Transition>

			{/* bottom center tags */}
			<Transition appear show={ready} enterFrom='opacity-0 bottom-[-100px]' enter='transition-all ' as={React.Fragment}>
				<div className='fixed bottom-0 left-8 right-8 z-[11] flex justify-center gap-x-3 rounded-t-3xl bg-white bg-opacity-20 py-4 shadow-[0px_4px_49px_rgba(0,_7,_72,_0.12)] backdrop-blur-[7.5px]'>
					<Tag text={ALL} filter={filter} setFilter={setFilter} />
					<Tag text='Social' src='/assets/map/tags/social.png' filter={filter} setFilter={setFilter} />
					<Tag text='Game Playing' src='/assets/map/tags/game.png' filter={filter} setFilter={setFilter} />
					<Tag text='Voice Chat' src='/assets/map/tags/voice.png' filter={filter} setFilter={setFilter} />
					<Tag text='Music Sessions' src='/assets/map/tags/music.png' filter={filter} setFilter={setFilter} />
					<Tag text='DIY Avatar' src='/assets/map/tags/diy.png' filter={filter} setFilter={setFilter} />
					<Tag text='Key Users' src='/assets/map/tags/key.png' filter={filter} setFilter={setFilter} />
					<Tag text='Web3 Projects' src='/assets/map/tags/web3.png' filter={filter} setFilter={setFilter} />
				</div>
			</Transition>

			{/* top center linear gradient */}
			<Transition appear show={ready} enterFrom='opacity-0 top-[-50px]' enter='transition-all' as={React.Fragment}>
				<div className='pointer-events-none fixed left-0 top-0 right-0 h-[100px] bg-[radial-gradient(100%_100%_at_50%_0%,_#F5D216_0%,_rgba(245,_210,_22,_0)_100%);] opacity-30'></div>
			</Transition>

			{/* right top buttons */}
			<Transition appear show={ready} enterFrom='opacity-0 right-[-100px]' as={React.Fragment}>
				<div
					className={clsx(
						'fixed top-8 z-[11] flex gap-x-4 rounded-2xl bg-white bg-opacity-20 p-3 backdrop-blur-[7.5px] transition-all',
						open ? 'right-[456px]' : 'right-8'
					)}
					style={{ boxShadow: '0px 4px 49pxrgba(0, 7, 72, 0.12)' }}>
					<button onClick={() => router.push('/rooms/create')} className='button_normal'>
						Create room
					</button>
					{/* <button
						className='flex gap-x-2 rounded-[10px] border border-dark bg-white p-[10px] font-semibold'>
						<Filter /> Filters
					</button> */}
					<button
						onClick={() => setOpen(!open)}
						className={clsx(
							'rounded-[10px] border border-dark  p-[10px]',
							open ? 'rotate-180 bg-black text-white' : 'bg-white'
						)}>
						<ChevronsLeft />
					</button>
				</div>
			</Transition>

			{/* right top pad */}
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
							<ChevronRight />
							<span className=' inline-block rounded-md bg-black bg-opacity-5 py-1 px-2'>South Korea</span>
						</div>
						<div className='mt-4 px-8 text-2xl font-semibold'>Seoul area</div>
						<div className='mt-1 px-8 text-black text-opacity-80'>440+ Room</div>

						<div className='mt-4 border-t border-dashed border-dark'></div>

						<div className='divide-y divide-black divide-opacity-10'>
							{rooms.map(r => (
								<div key={r._id} className='flex gap-x-3 px-8 py-6'>
									<img src={r.avatar} className=' h-10 w-10 rounded-full' />
									<div>
										<div className='font-semibold'>{r.name}</div>
										<div className='text-sm text-black text-opacity-40'>xxxx</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Transition>
		</>
	)
}

function Tag(props: { text: string; src?: string; filter: string; setFilter: Dispatch<string> }) {
	const { filter, setFilter, text, src } = props

	return (
		<span
			onClick={() => setFilter(text)}
			className={clsx(
				'flex cursor-pointer gap-x-1 overflow-auto rounded-full border border-dark py-2 px-4',
				filter === text ? 'bg-dark text-white' : 'bg-white'
			)}>
			{src && <img src={src} className='h-[20px] w-[20px]' />}
			{props.text}
		</span>
	)
}
