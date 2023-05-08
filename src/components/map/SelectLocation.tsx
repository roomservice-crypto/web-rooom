import mapboxgl from 'mapbox-gl'
import Modal from '../Modal'
import { Dispatch, useEffect, useRef, useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Box } from '@mui/material'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

const center: [number, number] = [-79.4512, 43.6568]

export default function SelectLocation({
	isOpen,
	onDismiss,
	setLocation
}: {
	isOpen: boolean
	onDismiss: () => void
	setLocation: Dispatch<[number, number]>
}) {
	const mapRef = useRef<HTMLDivElement>(null)
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const [tempLocation, setTempLocation] = useState<[number, number]>(center)

	useEffect(() => {
		if (!isOpen) {
			map?.remove()
			setMap(null)
		}
		setTimeout(() => setup(), 1000)
		function setup() {
			if (!mapRef.current || map) return
			const newMap = new mapboxgl.Map({
				container: mapRef.current!,
				style: 'mapbox://styles/yysuni/clb4sxw3w000915phkfoa95i4',
				zoom: 13,
				interactive: true,
				center: center
			})
			setMap(newMap)
			const geocoder = new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl,
				marker: false
			})

			// draggable marker

			let div = document.createElement('div')
			div.className = 'select-location-pin'

			let marker = new mapboxgl.Marker({ draggable: true, element: div })
			marker.setLngLat(center).addTo(newMap)
			function onDragEnd() {
				const lngLat = marker.getLngLat()
				setTempLocation([lngLat.lng, lngLat.lat])
			}
			marker.on('dragend', onDragEnd)

			geocoder.on('result', function (e) {
				marker.setLngLat(e.result.center)
			})

			newMap.addControl(geocoder)
		}
	}, [isOpen, map])

	return (
		<>
			<Modal
				customIsOpen={isOpen}
				customOnDismiss={() => {
					setLocation(tempLocation)
					onDismiss()
				}}>
				<Box ref={mapRef} height={600} width='100%' position='relative'></Box>
				<Box position='absolute' sx={{ top: 0, left: 0, background: '#00000050', color: '#fff', padding: '10px 20px' }}>
					LNG: {tempLocation[0]}
					<br />
					lAT: {tempLocation[1]}
				</Box>
			</Modal>
		</>
	)
}
