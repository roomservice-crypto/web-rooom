import Plus from '@/svgs/plus.svg'
import Minus from '@/svgs/minus.svg'
import mapboxgl from 'mapbox-gl'
import React from 'react'
import ChevronsLeft from '@/svgs/chevrons-left.svg'
import Filter from '@/svgs/filter.svg'

export default function ToolLayer(props: { map: mapboxgl.Map | null }) {
	const { map } = props

	if (map)
		return (
			<>
				<div className='fixed right-8 bottom-[104px] z-[11] flex flex-col gap-y-[9px]'>
					<button
						onClick={() => {
							map?.zoomTo(map.getZoom() + 1)
						}}
						className='rounded-full border-[1.5px] border-dark bg-white p-[6px]'>
						<Plus />
					</button>
					<button
						onClick={() => {
							map?.zoomTo(map.getZoom() - 1 || 1)
						}}
						className='rounded-full border-[1.5px] border-dark bg-white p-[6px]'>
						<Minus />
					</button>
				</div>

				<div className='fixed bottom-0 left-8 right-8 z-[11] flex justify-center gap-x-3 rounded-t-3xl bg-white bg-opacity-20 py-4 backdrop-blur-[7.5px] shadow-[0px_4px_49px_rgba(0,_7,_72,_0.12)]'>
					<Tag text='Social' src='/assets/map/tags/social.png' />
					<Tag text='Game Playing' src='/assets/map/tags/game.png' />
					<Tag text='Voice Chat' src='/assets/map/tags/voice.png' />
					<Tag text='Music Session' src='/assets/map/tags/music.png' />
					<Tag text='DIY Avatar' src='/assets/map/tags/diy.png' />
					<Tag text='Key Users' src='/assets/map/tags/key.png' />
					<Tag text='Web3 Projects' src='/assets/map/tags/web3.png' />
				</div>

				<div className='pointer-events-none fixed left-0 top-0 right-0 h-[100px] bg-[radial-gradient(100%_100%_at_50%_0%,_#F5D216_0%,_rgba(245,_210,_22,_0)_100%);] opacity-30'></div>
				<div className='fixed top-[30px] right-8 z-[11] flex gap-x-4 rounded-2xl bg-white bg-opacity-20 p-3 backdrop-blur-[7.5px] shadow-[0px_4px_49px_rgba(0,_7,_72,_0.12)]'>
					<button className='button_normal'>Create room</button>
					<button className='flex gap-x-2 rounded-[10px] border border-dark bg-white p-[10px] font-semibold'>
						<Filter /> Filters
					</button>
					<button className='rounded-[10px] border border-dark bg-white p-[10px]'>
						<ChevronsLeft />
					</button>
				</div>
			</>
		)

	return null
}

function Tag(props: { text: string; src: string }) {
	return (
		<span className='flex cursor-pointer gap-x-1 overflow-auto rounded-full border border-dark bg-white py-2 px-4'>
			<img src={props.src} className='h-[20px] w-[20px]' />
			{props.text}
		</span>
	)
}