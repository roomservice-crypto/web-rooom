import { Axios, ResponseType } from '@/utils/axios'
import { useEffect, useState } from 'react'

export interface Room {
	roomAddr: 'string'
	userId: number
	x: number
	y: number
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
				setRooms(r.data.data)
			})
			.catch(e => {
				console.error(e)
			})
	}, [bounds])

	return rooms
}
