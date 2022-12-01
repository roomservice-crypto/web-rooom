import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import example from '../assets/example.json'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const ref = useRef(null)

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: ref.current!,
			style: 'mapbox://styles/yysuni/clb4sxw3w000915phkfoa95i4',
			zoom: 2,
			projection: { name: 'globe' },
			maxZoom: 14,
			minZoom: 2
		})

		setMap(map)

		example.features.forEach(f => {
			new mapboxgl.Marker().setLngLat(f.geometry.coordinates as any).addTo(map)
		})

		map.on('load', () => {
			setTimeout(() => {
				map.easeTo({
					center: [113.878678, 22.537162],
					zoom: 12,
					duration: 5000,
					easing: t => 1 - Math.pow(1 - t, 3)
				})
			}, 500)
		})
	}, [])

	return (
		<>
			<div ref={ref} className='w-full h-[100vh]'></div>
		</>
	)
}
