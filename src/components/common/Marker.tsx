import ReactDOM from 'react-dom'
import LoactionIcon from './LoactionIcon'

export default function Marker(props: { container: HTMLDivElement; id: string; selected: string }) {
	const { container, ...others } = props

	return ReactDOM.createPortal(<LoactionIcon {...others} />, container)
}
