import mapboxgl, { LngLatLike } from 'mapbox-gl'
import { Dispatch, useEffect, useRef, useState } from 'react'
import example from '../../assets/example.json'
import Marker from '../common/Marker'

export default function BaseLayer(props: { setMap: Dispatch<mapboxgl.Map>; setRoom: Dispatch<any>; room: any }) {
	const { setMap, setRoom, room } = props
	const [markerDivs, setMarkerDivs] = useState<HTMLDivElement[] | null>(null)

	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: ref.current!,
			style: 'mapbox://styles/mapbox/streets-v11',
			zoom: 2,
			projection: { name: 'globe' },
			maxZoom: 14,
			minZoom: 1,
			interactive: false
		})

		setMap(map)

		map.on('load', () => {
			setTimeout(() => {
				map.flyTo({
					center: example.features[0].geometry.coordinates as LngLatLike,
					zoom: 10,
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

		ref.current!.addEventListener('click', e => {
			let i
			if ((i = (e.target as HTMLDivElement | null)?.dataset.id)) {
				setRoom(i)
			} else {
				setRoom(null)
			}
		})
	}, [])

	return (
		<>
			<div ref={ref} className='h-[100vh] w-full'></div>
			{markerDivs?.map((d, i) => (
				<Marker key={i} container={d} id={String(i)} selected={room} />
			))}
		</>
	)
}
