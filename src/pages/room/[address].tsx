import Room1 from '@/components/rooms/Room1'
import Room2 from '@/components/rooms/Room2'
import Room3 from '@/components/rooms/Room3'
import Room4 from '@/components/rooms/Room4'
import { useRouter } from 'next/router'
import rooms from '@/mock/rooms.json'

export default function Room() {
	const router = useRouter()

	const address = router.query.address

	if (address) {
		const room = rooms.find(r => r.address === address)

		if (!room) return <>ERROR</>

		switch (room!.type) {
			case 'Game Playing':
				if (room.theme === 0) return <Room1 room={room} />
				else return <Room2 room={room} />
			case 'Social':
				return <Room3 room={room} />
			case 'Voice Chat':
				return <Room4 room={room} />

			default:
				return <Room1 room={room} />
		}
	}

	return <>Loading...</>
}
