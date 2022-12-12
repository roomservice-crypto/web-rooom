import Room3 from '@/components/rooms/Room3'
import Room4 from '@/components/rooms/Room4'
import { useRouter } from 'next/router'
import rooms from '@/mock/rooms.json'

export default function Room() {
	const router = useRouter()

	const address = router.query.address

	if (address) {
		const room = rooms.find(r => r.address === address)

		return <Room4 room={room} />
	}

	return <>Loading...</>
}
