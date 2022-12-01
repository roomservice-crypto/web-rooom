import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import example from '../assets/example.json'
import Location from '@/components/common/loaction'
import { renderToString } from 'react-dom/server'

const PUBLIC_KEY = 'pk.eyJ1IjoibGlua2VsaXUtIiwiYSI6ImNsYjJiOXFyZDAyaHUzbm11emN3c25uMG0ifQ.RITRSYJAJ-Bk_QPlrWtD8g'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const ref = useRef(null)

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: ref.current!,
			style: 'mapbox://styles/linkeliu-/clb5006e9000915qqo1bg7i08',
			zoom: 2,
			projection: { name: 'globe' },
			maxZoom: 14,
			minZoom: 2
		})

		setMap(map)

		example.features.forEach(f => {
			const loactionSvgString: string = renderToString(<Location />)

			const div = document.createElement('div')
			div.innerHTML = loactionSvgString

			new mapboxgl.Marker({ element: div }).setLngLat(f.geometry.coordinates as any).addTo(map)
		})

		map.on('load', () => {
			setTimeout(() => {
				map.easeTo({
					center: [113.878678, 22.537162],
					zoom: 10,
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
