import Room2 from '@/components/rooms/Room2'
import { useRouter } from 'next/router'
import rooms from '@/mock/rooms.json'

export default function Room() {
	const router = useRouter()

	const address = router.query.address

	if (address) {
		const room = rooms.find(r => r.address === address)

		return <Room2 room={room} />
	}

	return <>Loading...</>
}
