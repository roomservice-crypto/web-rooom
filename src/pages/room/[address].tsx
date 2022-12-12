import Room3 from '@/components/rooms/Room3'
import { useRouter } from 'next/router'
import rooms from '@/mock/rooms.json'

export default function Room() {
	const router = useRouter()

	const address = router.query.address

	if (address) {
		const room = rooms.find(r => r.address === address)

		return <Room3 room={room} />
	}

	return <>Loading...</>
}
