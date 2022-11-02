import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'

export default function Test() {
	return (
		<main className='h-[100vh] bg-slate-50'>
			<Canvas>
				<ambientLight />
				<spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} />
				<mesh position={[1, 2.1, 1]}>
					{/* <sphereGeometry args={[0.1]} /> */}
					<meshStandardMaterial color='green' />
				</mesh>
				<Box />
				<OrbitControls enableZoom={false} rotateSpeed={0.5} />
			</Canvas>
		</main>
	)
}

function Box() {
	const [hovered, hover] = useState(false)

	return (
		<mesh onPointerEnter={event => hover(true)} onPointerOut={event => hover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
