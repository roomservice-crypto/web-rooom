import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from 'react'
import CardLayer from '@/components/map/CardLayer'
import ToolLayer from '@/components/map/ToolLayer'
import { ALL } from '@/constants'
// import { getRooms } from '@/utils/storage'
import { useRouter } from 'next/router'
import HeaderBar, { HeaderBarState } from '@/components/map/HeaderBar'
import { Room } from '@/hooks/useGetRooms'
import dynamic from 'next/dynamic'

const PUBLIC_KEY = 'pk.eyJ1IjoieXlzdW5pIiwiYSI6ImNsYjRzcHE2MjA2MHYzcnBqMTA2NWI4YWoifQ.Wg2EqZN4qi-y6pdffqUPPw'
mapboxgl.accessToken = PUBLIC_KEY

const BaseLayer = dynamic(() => import('../components/map/BaseLayer'), {
	ssr: false
})

export default function Map() {
	const [isBrowser, setIsBrower] = useState(false)
	const [map, setMap] = useState<mapboxgl.Map | null>(null)
	const [room, setRoom] = useState<null | Room>(null)
	const [ready, setReady] = useState(false)
	const [filter, setFilter] = useState(ALL)
	const [isMobile, setIsMobile] = useState(false)
	const router = useRouter()
	// const rooms = getRooms()

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
	// useEffect(() => {
	// 	if (filter !== ALL && room && room.type !== filter) {
	// 		const applicableRoom = rooms.find(r => r.type === filter)
	// 		setRoom(applicableRoom || null)
	// 	}
	// }, [filter, room, rooms])

	useEffect(() => {
		if (room) {
			const url = router.pathname + '?room=' + encodeURIComponent(room.userId)
			history.pushState({ path: url }, '', url)
		}
	}, [room, router.pathname])

	if (isBrowser)
		return (
			<>
				<BaseLayer
					filter={filter}
					setMap={setMap}
					setRoom={setRoom}
					room={room}
					setReady={setReady}
					map={map}
					query={router.query}
				/>
				<CardLayer isMobile={isMobile} room={room ?? undefined} map={map} />
				{/* <HeaderBar ready={ready} setRoom={setRoom} state={HeaderBarState.mapView} /> */}
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
