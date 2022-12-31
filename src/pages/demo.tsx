import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from 'react'

import BaseLayer from '@/components/map/BaseLayer'
import CardLayer from '@/components/map/CardLayer'
import ToolLayer from '@/components/map/ToolLayer'
import { ALL } from '@/constants'
import { getRooms } from '@/utils/storage'
import { useRouter } from 'next/router'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

export default function Map() {
	const [isBrowser, setIsBrower] = useState(false)
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const [room, setRoom] = useState<null | any>(null)
	const [ready, setReady] = useState(false)
	const [filter, setFilter] = useState(ALL)
	const [isMobile, setIsMobile] = useState(false)
	const router = useRouter()
	const rooms = getRooms()

	useEffect(() => {
		if (window) {
			setIsBrower(true)
		}
	}, [])

	// add window size listener
	useEffect(() => {
		const handler = () => setIsMobile(window.innerWidth < 960)
		handler()

		window.addEventListener('resize', handler)
		return () => window.removeEventListener('resize', handler)
	}, [])

	// listen to the filter to change the applicable room
	useEffect(() => {
		if (filter !== ALL && room && room.type !== filter) {
			const applicableRoom = rooms.find(r => r.type === filter)
			setRoom(applicableRoom || null)
		}
	}, [filter, room, rooms])

	useEffect(() => {
		if (room) {
			const url = router.pathname + '?room=' + encodeURIComponent(room.name)
			history.pushState({ path: url }, '', url)
		}
	}, [room, router.pathname])

	if (isBrowser)
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
	else
		return (
			<>
				<h1>Map</h1>
			</>
		)
}
