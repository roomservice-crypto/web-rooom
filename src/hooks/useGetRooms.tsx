import { Axios, BASE_URL, ResponseType } from '@/utils/axios'
import { useEffect, useMemo, useState } from 'react'

export interface Room {
	roomAddr: 'string'
	userId: number
	x: number
	y: number
	account: string
	avatar: string
	roomName: string
	fansCount: number
}

export default function useGetRooms(bounds: [string, string]) {
	const [rooms, setRooms] = useState<Room[]>([])

	useEffect(() => {
		Axios.get<ResponseType<Room[]>>('/map/point', {
			limit: 200,
			offset: 0,
			upperLeftXY: bounds[0],
			bottomRightXY: bounds[1]
		})
			.then(r => {
				setRooms(
					r.data.data.map(r => {
						return { ...r, avatar: r.avatar === '' ? '' : `${BASE_URL.slice(0, -5)}${r.avatar}` }
					})
				)
			})
			.catch(e => {
				console.error(e)
			})
	}, [bounds])

	const roomsDict = useMemo(() => {
		return rooms.reduce((acc, r) => {
			acc[r.userId] = r
			return acc
		}, {} as any)
	}, [rooms])

	return { rooms, roomsDict }
}
