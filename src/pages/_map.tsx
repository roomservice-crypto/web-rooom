import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import example from '../assets/example.json'
import TransitionBadge from '@/components/common/TransitionBadge'
import Record from '@/svgs/record.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import Close from '@/svgs/close.svg'
import Marker from '@/components/common/Marker'

const PUBLIC_KEY = 'pk.eyJ1IjoibGlua2VsaXUtIiwiYSI6ImNsYjJiOXFyZDAyaHUzbm11emN3c25uMG0ifQ.RITRSYJAJ-Bk_QPlrWtD8g'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const [room, setRoom] = useState<null | any>(null)
	const [markerDivs, setMarkerDivs] = useState<HTMLDivElement[] | null>(null)

	useEffect(() => {
		ref.current!.addEventListener('click', e => {
			let i
			if ((i = (e.target as HTMLDivElement | null)?.dataset.id)) {
				setRoom(i)
			} else {
				setRoom(null)
			}
		})

		const map = new mapboxgl.Map({
			container: ref.current!,
			style: 'mapbox://styles/linkeliu-/clb5006e9000915qqo1bg7i08',
			zoom: 1,
			projection: { name: 'globe' },
			maxZoom: 14,
			minZoom: 1,
			interactive: false
		})

		setMap(map)

		map.on('load', () => {
			setTimeout(() => {
				map.flyTo({
					center: [113.878678, 22.537162],
					zoom: 11,
					duration: 4000,
					easing: t => 1 - Math.pow(1 - t, 3)
				})

				map.once('moveend', () => {
					const divs: HTMLDivElement[] = []
					example.features.forEach(f => {
						let div = document.createElement('div')
						divs.push(div)

						new mapboxgl.Marker({ element: div }).setLngLat(f.geometry.coordinates as any).addTo(map)
					})
					setMarkerDivs(divs)

					map.dragPan.enable()
					map.scrollZoom.enable()
					map.boxZoom.enable()
					map.dragRotate.enable()
					map.keyboard.enable()
					map.doubleClickZoom.enable()
					map.touchZoomRotate.enable()
					map.touchPitch.enable()

					map.setMinZoom(2)
				})
			}, 500)
		})
	}, [])

	return (
		<>
			<div ref={ref} className='w-full h-[100vh]'></div>

			{room && (
				<TransitionBadge appear show={!!room} toClassName='left-20' fromClassName='left-0'>
					<div className='transition-all duration-150 top-[92px] fixed w-[448px] h-[492px] border-2 border-black rounded-[32px] bg-white overflow-hidden'>
						<div className='bg-[#BAEDBD] flex justify-end p-6 h-[120px] border-b-2 border-dashed border-black'>
							<Close className='cursor-pointer' />
						</div>
						<div className='px-8'>
							<div className='flex mt-3 justify-between'>
								<span className='bg-green-400 border-4 border-white h-[96px] w-[96px] -mt-12 rounded-full shadow-lg'></span>
								<span className='flex'>
									<span className='inline-block w-8 h-8 bg-blue-400 rounded-full border border-white'></span>
									<span className='inline-block w-8 h-8 bg-indigo-400 rounded-full border border-white -ml-4'></span>
									<span className='inline-block w-8 h-8 bg-violet-400 rounded-full border border-white -ml-4'></span>
									<span className='w-8 h-8 rounded-full -ml-4 flex justify-center items-center bg-white'>+6</span>
								</span>
							</div>
							<div className='mt-6 font-semibold text-2xl'>STEPN | Public Beta Phase V</div>
							<div className='font-normal text-md text-opacity-40 text-black'>Room NFT owned by 0x1240</div>
							<button className='mt-4 py-3 px-6 border-2 border-dashed border-[#1c1c1c] rounded-[34px] flex gap-x-2'>
								<Record /> Voice chatting...
							</button>
							<div className='mt-4 text-sm text-black text-opacity-40 font-normal'>
								<span>
									<span className='text-black font-semibold text-opacity-80 mr-1'>302</span>
									Following
								</span>
								<span className='ml-5'>
									<span className='text-black font-semibold text-opacity-80 mr-1'>8</span>
									Likes
								</span>
							</div>
							<div className='mt-8 flex items-center'>
								<button className='bg-[#1C1C1C] text-white py-6 px-8 rounded-[24px]'>Say Hi</button>
								<button className='bg-white py-6 px-8 rounded-[24px] border-2 border-[#1c1c1c] shadow-[0_4px_#141414] flex ml-3'>
									Explore room <ArrowRight />
								</button>
							</div>
						</div>
					</div>
				</TransitionBadge>
			)}

			{markerDivs?.map((d, i) => (
				<Marker key={i} container={d} id={String(i)} selected={room} />
			))}
		</>
	)
}
