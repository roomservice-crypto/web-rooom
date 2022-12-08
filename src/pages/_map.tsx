import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useState } from 'react'

import BaseLayer from '@/components/map/BaseLayer'
import CardLayer from '@/components/map/CardLayer'
import ToolLayer from '@/components/map/ToolLayer'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const [room, setRoom] = useState<null | any>(null)

	return (
		<>
			<BaseLayer setMap={setMap} setRoom={setRoom} room={room} />
			<CardLayer room={room} />
			<ToolLayer map={map} />
		</>
	)
}
