import ReactDOM from 'react-dom'
import Loaction from './Loaction'

export default function Marker(props: { container: HTMLDivElement; id: string; selected: string }) {
	const { container, ...others } = props

	return ReactDOM.createPortal(<Loaction {...others} />, container)
}
