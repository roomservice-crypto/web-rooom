import Room1 from '@/components/rooms/Room1'
import { useRouter } from 'next/router'
import rooms from '@/mock/rooms.json'

export default function Room() {
	const router = useRouter()

	const address = router.query.address

	if (address) {
		const room = rooms.find(r => r.address === address)

		return <Room1 room={room} />
	}

	return <>Loading...</>
}
