import ReactDOM from 'react-dom'
import LoactionIcon from './LoactionIcon'
// import { Room } from '@/hooks/useGetRooms'

export default function Marker(props: {
	container: HTMLDivElement
	id: number
	selected: any
	filter: string
	roomsDict: any
	// eslint-disable-next-line no-unused-vars
	onClick: (e: any) => void
}) {
	const { container, ...others } = props

	return ReactDOM.createPortal(<LoactionIcon {...others} />, container)
}
