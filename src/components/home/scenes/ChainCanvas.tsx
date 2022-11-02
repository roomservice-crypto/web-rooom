import { Canvas } from '@react-three/fiber'
import ChainScene from './ChainScene'

export default function ChainCanvas() {
	return (
		<div
			className='h-[100vh] w-full bg-slate-50'
			style={{
				background: 'linear-gradient(204.64deg, #4F46E5 15.72%, #A855F7 84.28%)'
			}}>
			<Canvas frameloop='demand' shadows={true}>
				<ChainScene />
			</Canvas>
		</div>
	)
}
