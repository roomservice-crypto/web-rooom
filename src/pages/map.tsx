import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from 'react'

import BaseLayer from '@/components/map/BaseLayer'
import CardLayer from '@/components/map/CardLayer'
import ToolLayer from '@/components/map/ToolLayer'
import { ALL } from '@/constants'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const [room, setRoom] = useState<null | any>(null)
	const [ready, setReady] = useState(false)
	const [filter, setFilter] = useState(ALL)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handler = () => setIsMobile(window.innerWidth < 960)
		handler()

		window.addEventListener('resize', handler)
		return () => window.removeEventListener('resize', handler)
	}, [])

	return (
		<>
			<BaseLayer filter={filter} setMap={setMap} setRoom={setRoom} room={room} setReady={setReady} />
			<CardLayer isMobile={isMobile} room={room} setRoom={setRoom} map={map} />
			<ToolLayer
				isMobile={isMobile}
				room={room}
				setRoom={setRoom}
				filter={filter}
				setFilter={setFilter}
				map={map}
				ready={ready}
			/>
		</>
	)
}
