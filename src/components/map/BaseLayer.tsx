import mapboxgl, { LngLatLike, Marker as MarkerType } from 'mapbox-gl'
import { Dispatch, useEffect, useRef, useState } from 'react'
import Marker from '../common/Marker'
import useGetRooms, { Room } from '@/hooks/useGetRooms'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
// import { getRooms } from '@/utils/storage'

let DICT: any = []

export default function BaseLayer(props: {
	setMap: Dispatch<mapboxgl.Map>
	setRoom: Dispatch<Room | null | any>
	room: Room | null
	setReady: Dispatch<boolean>
	filter: string
	map: mapboxgl.Map | null
	query: ParsedUrlQuery
}) {
	const { setMap, setRoom, room, setReady, filter, map, query: initialQuery } = props
	const [markerDivs, setMarkerDivs] = useState<HTMLDivElement[] | null>(null)
	const [bounds, setBounds] = useState<[string, string]>(['0.0,0.0', '0.0,0.0'])
	const [query, setQuery] = useState(initialQuery.room)

	const ref = useRef<HTMLDivElement>(null)
	// const rooms = getRooms()
	const { rooms, roomsDict } = useGetRooms(bounds)
	const router = useRouter()

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
			// const queryRoom = new URLSearchParams(location.search).get('room')
			// const room: any = queryRoom && rooms.find(r => r.name == queryRoom)

			// first locate
			setTimeout(() => {
				const defaultFly = () => {
					map.flyTo({
						center: [-79.4512, 43.6568] as LngLatLike,
						zoom: 7.8,
						duration: 3000,
						easing: t => 1 - Math.pow(1 - t, 3)
					})

					defaultInit()
					// map.once('moveend', defaultInit)
				}
				const defaultInit = () => {
					map.dragPan.enable()
					map.scrollZoom.enable()
					map.boxZoom.enable()
					map.dragRotate.enable()
					map.keyboard.enable()
					map.doubleClickZoom.enable()
					map.touchZoomRotate.enable()
					map.touchPitch.enable()

					map.setMinZoom(2)

					// if (room) {
					// 	setTimeout(() => setRoom(selectedRoom), 300)
					// }
					setBounds([
						map.getBounds().getNorthWest().toArray().join(','),
						map.getBounds().getSouthEast().toArray().join(',')
					])

					setReady(true)

					map.on('moveend', e => {
						setBounds([
							e.target.getBounds().getNorthWest().toArray().join(','),
							e.target.getBounds().getSouthEast().toArray().join(',')
						])
					})
					map.on('zoomend', e => {
						setBounds([
							e.target.getBounds().getNorthWest().toArray().join(','),
							e.target.getBounds().getSouthEast().toArray().join(',')
						])
					})
					map.on('pinchend', e => {
						setBounds([
							e.target.getBounds().getNorthWest().toArray().join(','),
							e.target.getBounds().getSouthEast().toArray().join(',')
						])
					})
				}

				// let selectedRoom = rooms[0]

				// if (room) {
				// 	const selectedRoom = room
				// 	map.jumpTo({
				// 		center: [selectedRoom.x, room.y],
				// 		zoom: 7.8
				// 	})
				// 	defaultInit()
				// } else
				defaultFly()
			}, 300)

			// display rooms
			// setTimeout(
			// 	() => {
			// 		const divs: HTMLDivElement[] = []
			// 		rooms.forEach(r => {
			// 			let div = document.createElement('div')
			// 			divs.push(div)

			// 			new mapboxgl.Marker({ element: div }).setLngLat(r.coordinates as any).addTo(map)
			// 		})
			// 		setMarkerDivs(divs)
			// 	},
			// 	room ? 300 : 1000
			// )
		})
	}, [setMap, setReady])

	useEffect(() => {
		if (query) {
			const t = rooms.find(r => r.userId == Number(query))

			// if (t && query !== room.userId + '') {
			// 	console.log('set')
			setRoom(t)
			// }
		}
	}, [query, rooms, setRoom])

	useEffect(() => {
		if (!map || !ref.current) return
		const listener = (e: any) => {
			let i: any
			if ((i = (e.target as HTMLDivElement | null)?.dataset.id)) {
				return
			} else {
				setRoom(null)
			}
		}
		ref.current.addEventListener('click', listener)
	}, [map, setRoom])

	useEffect(() => {
		if (!map) return

		DICT.map((m: MarkerType) => m.remove())
		const divs: HTMLDivElement[] = []

		rooms.forEach(r => {
			let div = document.createElement('div')
			div.id = r.userId + ''
			divs.push(div)

			const marker = new mapboxgl.Marker({ element: div }).setLngLat([r.x, r.y] as any)

			DICT.push(marker)
			marker.addTo(map)
		})

		setMarkerDivs(divs)
	}, [map, rooms])

	return (
		<>
			<div ref={ref} className='h-[100vh] w-full'></div>
			{markerDivs?.map(d => (
				<Marker
					key={d.id}
					container={d}
					id={Number(d.id)}
					selected={room}
					filter={filter}
					roomsDict={roomsDict}
					onClick={e => {
						const room = rooms.find(r => r.userId == Number(e.currentTarget.dataset.id))
						if (!room) return
						const url = router.pathname + '?room=' + encodeURIComponent(room?.userId)
						setQuery(room.userId + '')
						history.pushState({ path: url }, '', url)

						// if (room) {
						// 	setRoom(room)
						// 	map?.flyTo({
						// 		center: [room.x, room.y] as LngLatLike,
						// 		easing: t => 1 - Math.pow(1 - t, 3),
						// 		duration: 500
						// 	})
						// }
					}}
				/>
			))}
		</>
	)
}
