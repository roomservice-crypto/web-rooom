import ReactDOM from 'react-dom'
import LoactionIcon from './LoactionIcon'

export default function Marker(props: { container: HTMLDivElement; id: number; selected: string; filter: string }) {
	const { container, ...others } = props

	return ReactDOM.createPortal(<LoactionIcon {...others} />, container)
}
