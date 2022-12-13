import mapboxgl, { LngLatLike } from 'mapbox-gl'
import { Dispatch, useEffect, useRef, useState } from 'react'
import Marker from '../common/Marker'
import { getRooms } from '@/utils/storage'

export default function BaseLayer(props: {
	setMap: Dispatch<mapboxgl.Map>
	setRoom: Dispatch<any>
	room: any
	setReady: Dispatch<boolean>
	filter: string
}) {
	const { setMap, setRoom, room, setReady, filter } = props
	const [markerDivs, setMarkerDivs] = useState<HTMLDivElement[] | null>(null)

	const ref = useRef<HTMLDivElement>(null)
	const rooms = getRooms()

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: ref.current!,
			style: 'mapbox://styles/yysuni/clb4sxw3w000915phkfoa95i4',
			zoom: 2,
			projection: { name: 'globe' },
			maxZoom: 14,
			minZoom: 1,
			interactive: false
		})

		setMap(map)

		map.on('load', () => {
			// first locate
			setTimeout(() => {
				map.flyTo({
					center: rooms[0].coordinates as LngLatLike,
					zoom: 8,
					duration: 3000,
					easing: t => 1 - Math.pow(1 - t, 3)
				})

				map.once('moveend', () => {
					map.dragPan.enable()
					map.scrollZoom.enable()
					map.boxZoom.enable()
					map.dragRotate.enable()
					map.keyboard.enable()
					map.doubleClickZoom.enable()
					map.touchZoomRotate.enable()
					map.touchPitch.enable()

					map.setMinZoom(2)

					setRoom(rooms[0])

					setReady(true)
				})
			}, 300)

			// display rooms
			setTimeout(() => {
				const divs: HTMLDivElement[] = []
				rooms.forEach(r => {
					let div = document.createElement('div')
					divs.push(div)

					new mapboxgl.Marker({ element: div }).setLngLat(r.coordinates as any).addTo(map)
				})
				setMarkerDivs(divs)
			}, 3000)
		})

		ref.current!.addEventListener('click', e => {
			let i
			if ((i = (e.target as HTMLDivElement | null)?.dataset.id)) {
				setRoom(rooms[Number(i)])
				map.flyTo({
					center: rooms[Number(i)].coordinates as LngLatLike,
					easing: t => 1 - Math.pow(1 - t, 3),
					duration: 500
				})
			} else {
				setRoom(null)
			}
		})
	}, [setMap, setReady, setRoom])

	return (
		<>
			<div ref={ref} className='h-[100vh] w-full'></div>
			{markerDivs?.map((d, i) => (
				<Marker key={i} container={d} id={i} selected={room} filter={filter} />
			))}
		</>
	)
}
