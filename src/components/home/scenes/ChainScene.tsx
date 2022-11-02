import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function ChainScene({ ...props }) {
	const { nodes, materials } = useSpline('https://prod.spline.design/rNmuGkoCEj0fZhne/scene.splinecode')
	return (
		<>
			<color attach='background' args={['#fefefe']} />
			<group {...props} dispose={null}>
				{/* @ts-ignore */}
				<OrthographicCamera
					name='Camera'
					makeDefault={true}
					far={100000}
					near={-100000}
					position={[0, 0, 1000]}
					rotation={[0, 0, 0]}
				/>
				<directionalLight
					name='Directional Light'
					castShadow
					intensity={0.7}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={-10000}
					shadow-camera-far={100000}
					shadow-camera-left={-500}
					shadow-camera-right={500}
					shadow-camera-top={500}
					shadow-camera-bottom={-500}
					position={[388.61, 410, 1054.07]}
				/>
				<pointLight
					name='Point Light'
					intensity={1}
					distance={2000}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={100}
					shadow-camera-far={100000}
					position={[-450.31, -387.81, 0]}
				/>
				<hemisphereLight name='Default Ambient Light' intensity={0.75} color='#eaeaea' />

				<group name='Group 2' position={[13.53, -5.7, -56.05]}>
					<mesh
						name='Sphere 4'
						geometry={nodes['Sphere 4'].geometry}
						material={materials['Sphere 4 Material']}
						castShadow
						receiveShadow
						position={[187.7, 154.36, 4.19]}
						scale={1.5}
					/>
					<mesh
						name='Sphere 9'
						geometry={nodes['Sphere 9'].geometry}
						material={materials.White}
						castShadow
						receiveShadow
						position={[-3.21, 217.23, 56.05]}
					/>
					<mesh
						name='Sphere 8'
						geometry={nodes['Sphere 8'].geometry}
						material={materials.White}
						castShadow
						receiveShadow
						position={[296.03, -111.94, -205.43]}
					/>
					<mesh
						name='Sphere 6'
						geometry={nodes['Sphere 6'].geometry}
						material={materials['Sphere 6 Material']}
						castShadow
						receiveShadow
						position={[-278.38, -91.45, -67.71]}
					/>
					<mesh
						name='Sphere 3'
						geometry={nodes['Sphere 3'].geometry}
						material={materials.Orange}
						castShadow
						receiveShadow
						position={[243.91, 58.23, -253.55]}
					/>
					<mesh
						name='Sphere 7'
						geometry={nodes['Sphere 7'].geometry}
						material={materials['Sphere 7 Material']}
						castShadow
						receiveShadow
						position={[-108.78, -182.23, -31.67]}
						scale={1.5}
					/>
					<mesh
						name='Sphere 5'
						geometry={nodes['Sphere 5'].geometry}
						material={materials.Orange}
						castShadow
						receiveShadow
						position={[-246.03, 100.09, 191.13]}
						scale={2}
					/>
					<mesh
						name='Sphere 2'
						geometry={nodes['Sphere 2'].geometry}
						material={materials['Sphere 2 Material']}
						castShadow
						receiveShadow
						position={[99.44, -120.96, 203.55]}
						scale={2}
					/>
					<mesh
						name='Sphere'
						geometry={nodes.Sphere.geometry}
						material={materials.Blue}
						castShadow
						receiveShadow
						position={[-13.53, 5.7, 56.05]}
						scale={2.5}
					/>
				</group>
			</group>
		</>
	)
}
