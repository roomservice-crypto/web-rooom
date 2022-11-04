import useSpline from '@splinetool/r3f-spline'
import { ContactShadows, OrbitControls, OrthographicCamera, Shadow } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Scene({ ...props }) {
	const { nodes, materials } = useSpline('/scene.splinecode')

	return (
		<main className='h-[100vh]'>
			<Canvas>
				<OrbitControls />
				{/* @ts-ignore */}
				<OrthographicCamera
					name='1'
					makeDefault={true}
					zoom={0.66}
					far={100000}
					near={-100000}
					position={[447.1, 395.46, 461.34]}
					rotation={[-0.47, 0.6, 0.28]}
					scale={1}
				/>
				{/* <hemisphereLight name='Default Ambient Light' intensity={0.1} color='#eaeaea' /> */}
				<color attach='background' args={['#f0e4cf']} />
				<group dispose={null}>
					<directionalLight
						name='Directional Light'
						castShadow
						intensity={0.7}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={-10000}
						shadow-camera-far={100000}
						shadow-camera-left={-1362.6805}
						shadow-camera-right={1362.6805}
						shadow-camera-top={1362.6805}
						shadow-camera-bottom={-1362.6805}
						position={[329.26, 722.57, 316.48]}
					/>
					<group name='door-3' position={[-190.76, -72.89, 149.03]}>
						<mesh
							name='Cylinder'
							geometry={nodes.Cylinder.geometry}
							material={materials['door-2']}
							castShadow
							receiveShadow
							position={[-38.03, 3.5, 4.74]}
							rotation={[Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Rectangle 4'
							geometry={nodes['Rectangle 4'].geometry}
							material={materials.door}
							castShadow
							receiveShadow
							position={[0, 0, -8.31]}
							scale={[1, 1.09, 1]}
						/>
					</group>
					<group name='paper airplane' position={[70.08, 377.47, 222.21]}>
						<mesh
							name='Cube 54'
							geometry={nodes['Cube 54'].geometry}
							material={materials['Cube 54 Material']}
							receiveShadow
							position={[-80.56, 123.53, -36.15]}
							rotation={[0, -0.38, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 33'
							geometry={nodes['Cube 33'].geometry}
							material={materials['Cube 33 Material']}
							castShadow
							receiveShadow
							position={[-196.7, 114.04, -152.51]}
							rotation={[0.55, 0.47, 0.01]}
							scale={1}
						/>
					</group>
					<group name='desk' position={[-183.69, 141.94, -157.98]} scale={0.9}>
						<mesh
							name='saucer'
							geometry={nodes.saucer.geometry}
							material={materials['saucer Material']}
							castShadow
							receiveShadow
							position={[-9.25, 26.69, -23.25]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1.2}
						/>
						<mesh
							name='cup'
							geometry={nodes.cup.geometry}
							material={materials['cup Material']}
							castShadow
							receiveShadow
							position={[-44.61, 26.64, -7.7]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1.2}
						/>
						<mesh
							name='Cube 55'
							geometry={nodes['Cube 55'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-65.46, -10.19, 30.57]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 1.06, 1.55]}
						/>
						<mesh
							name='Cube 541'
							geometry={nodes['Cube 541'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[60.88, -10.19, 30.57]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 1.06, 1.55]}
						/>
						<mesh
							name='Cube 551'
							geometry={nodes['Cube 551'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-65.46, -10.19, -40.27]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 1.06, 1.55]}
						/>
						<mesh
							name='Cube 53'
							geometry={nodes['Cube 53'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[60.88, -10.19, -40.27]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 1.06, 1.55]}
						/>
						<mesh
							name='Rectangle 10'
							geometry={nodes['Rectangle 10'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-50.17, 14.08, -2.35]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 0.99, 1.06]}
						/>
						<mesh
							name='Rectangle 11'
							geometry={nodes['Rectangle 11'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-48.45, 13.62, 29.82]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 0.99, 1.06]}
						/>
						<mesh
							name='Rectangle 8'
							geometry={nodes['Rectangle 8'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-48.45, 13.62, -34.52]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={[1.06, 0.99, 1.06]}
						/>
					</group>
					<group name='stool' position={[13.59, 128.33, -53]} scale={1.06}>
						<mesh
							name='Cube 552'
							geometry={nodes['Cube 552'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-25.48, -1.82, 19.46]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 542'
							geometry={nodes['Cube 542'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[24.53, -1.82, 19.46]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 553'
							geometry={nodes['Cube 553'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-25.48, -1.82, -18.65]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 531'
							geometry={nodes['Cube 531'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[24.53, -1.82, -18.65]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Rectangle 101'
							geometry={nodes['Rectangle 101'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-3.28, 12.85, 17.6]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Rectangle 81'
							geometry={nodes['Rectangle 81'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-1.65, 12.85, -12.68]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
					</group>
					<group name='air conditioner' position={[-67.31, 277.82, -218.39]}>
						<mesh
							name='Rectangle 7'
							geometry={nodes['Rectangle 7'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[27.31, 15.56, 16.69]}
						/>
						<mesh
							name='Ellipse 2'
							geometry={nodes['Ellipse 2'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[-17.49, -0.04, 20.76]}
							scale={[1, 1, 1.27]}
						/>
						<mesh
							name='Ellipse'
							geometry={nodes.Ellipse.geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[-17.49, -0.04, 20.18]}
						/>
						<mesh
							name='Cube 52'
							geometry={nodes['Cube 52'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[0, 0, -2.4]}
						/>
					</group>
					<group name='window-2' position={[54.01, -41.33, 150.5]} rotation={[0, -Math.PI / 2, 0]} scale={1}>
						<mesh
							name='Rectangle 82'
							geometry={nodes['Rectangle 82'].geometry}
							material={materials['Rectangle 82 Material']}
							castShadow
							receiveShadow
							position={[0.73, 0.74, 52.48]}
							rotation={[0, Math.PI / 2, 0]}
							scale={1.28}
						/>
						<mesh
							name='Cube 532'
							geometry={nodes['Cube 532'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[1.75, 18.9, 53.03]}
							rotation={[0, Math.PI / 2, 0]}
							scale={1.28}
						/>
						<mesh
							name='Boolean'
							geometry={nodes.Boolean.geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[0, 0, 52.73]}
							rotation={[0, Math.PI / 2, 0]}
							scale={1}>
							<mesh
								name='Cube 533'
								geometry={nodes['Cube 533'].geometry}
								material={materials['Cube 533 Material']}
								visible={false}
								castShadow
								receiveShadow
								position={[0, 0, 0]}
								rotation={[0, 0, 0]}
								scale={[2.98, 1.28, 1.28]}
							/>
							<mesh
								name='Cube 521'
								geometry={nodes['Cube 521'].geometry}
								material={materials['Cube 521 Material']}
								visible={false}
								castShadow
								receiveShadow
								position={[0, 0, 0]}
								rotation={[0, 0, 0]}
								scale={[2.98, 1.28, 1.28]}
							/>
						</mesh>
					</group>
					<group name='window-1' position={[359.29, 272.92, -403.34]}>
						<mesh
							name='Rectangle 83'
							geometry={nodes['Rectangle 83'].geometry}
							material={materials['Rectangle 83 Material']}
							castShadow
							receiveShadow
							position={[0.73, 0.74, -0.96]}
							rotation={[0, Math.PI / 2, 0]}
							scale={1.28}
						/>
						<mesh
							name='Cube 534'
							geometry={nodes['Cube 534'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[1.75, 18.9, -0.04]}
							rotation={[0, Math.PI / 2, 0]}
							scale={1.28}
						/>
						<mesh
							name='Boolean 2'
							geometry={nodes['Boolean 2'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							scale={1.28}>
							<mesh
								name='Cube 535'
								geometry={nodes['Cube 535'].geometry}
								material={materials['Cube 535 Material']}
								visible={false}
								castShadow
								receiveShadow
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 522'
								geometry={nodes['Cube 522'].geometry}
								material={materials['Cube 522 Material']}
								visible={false}
								castShadow
								receiveShadow
								rotation={[0, Math.PI / 2, 0]}
							/>
						</mesh>
					</group>
					<mesh
						name='Cube 36'
						geometry={nodes['Cube 36'].geometry}
						material={materials['Cube 36 Material']}
						castShadow
						receiveShadow
						position={[289.39, -105.07, 292.47]}
					/>
					<group name='pig' position={[3.69, 255.19, -42.42]} rotation={[0, -Math.PI / 9, 0]} scale={0.52}>
						<mesh
							name='Cube 39'
							geometry={nodes['Cube 39'].geometry}
							material={materials['Cube 39 Material']}
							castShadow
							receiveShadow
							position={[22.27, 34.07, 16.75]}
							rotation={[-0.91, -0.09, 0]}
							scale={0.76}
						/>
						<mesh
							name='Cube 38'
							geometry={nodes['Cube 38'].geometry}
							material={materials['Cube 38 Material']}
							castShadow
							receiveShadow
							position={[-21.38, 34.07, 16.75]}
							rotation={[-0.91, -0.09, 0]}
							scale={0.76}
						/>
						<mesh
							name='Cube 37'
							geometry={nodes['Cube 37'].geometry}
							material={materials['Cube 37 Material']}
							castShadow
							receiveShadow
							position={[4.09, 11.44, 30.08]}
							rotation={[-Math.PI / 9, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 361'
							geometry={nodes['Cube 361'].geometry}
							material={materials['Cube 361 Material']}
							castShadow
							receiveShadow
							position={[6.59, -9.31, 35.07]}
							rotation={[-Math.PI / 9, 0, -1.43]}
							scale={1}
						/>
						<mesh
							name='Cube 331'
							geometry={nodes['Cube 331'].geometry}
							material={materials['Cube 331 Material']}
							castShadow
							receiveShadow
							position={[-2.34, 4.77, -4.02]}
							scale={[1, 1, 0.86]}
						/>
					</group>
					<group name='things-door' position={[-286.68, -109.89, 165.75]}>
						<mesh
							name='Cube 45'
							geometry={nodes['Cube 45'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[2.1, -39.19, 3.12]}
							rotation={[0, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 44'
							geometry={nodes['Cube 44'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-22.16, 0.15, -18.16]}
							rotation={[0, 0, 0]}
							scale={1}
						/>
					</group>
					<group name='fence' position={[195.89, -4.84, 70.3]}>
						<mesh
							name='Cube 43'
							geometry={nodes['Cube 43'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[146.51, 149.09, -296.73]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 381'
							geometry={nodes['Cube 381'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[146.51, 149.09, -204.5]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 42'
							geometry={nodes['Cube 42'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-57.07, -69.82, 204.38]}
							rotation={[Math.PI / 2, -0.94, Math.PI / 2]}
							scale={1}
						/>
						<mesh
							name='Cube 41'
							geometry={nodes['Cube 41'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[86.27, -11.96, 204.38]}
							rotation={[0, -Math.PI / 2, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 441'
							geometry={nodes['Cube 441'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[147.11, 173.21, -250.31]}
							scale={1}
						/>
						<mesh
							name='Cube 40'
							geometry={nodes['Cube 40'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[147.11, -11.96, 146.89]}
							scale={1}
						/>
						<mesh
							name='Cube 391'
							geometry={nodes['Cube 391'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[147.11, 77.1, -56]}
							rotation={[-2.56, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 35'
							geometry={nodes['Cube 35'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[146.51, -33.99, 90.65]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 371'
							geometry={nodes['Cube 371'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-146.51, -150.45, 204.5]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 362'
							geometry={nodes['Cube 362'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[25.02, -33.99, 204.5]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 34'
							geometry={nodes['Cube 34'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[146.51, -33.99, 204.5]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
					</group>
					<group name='drying rack' position={[-64.14, 189.61, 38.59]}>
						<mesh
							name='Cube 351'
							geometry={nodes['Cube 351'].geometry}
							material={materials['Cube 351 Material']}
							castShadow
							receiveShadow
							position={[-66.69, 22.2, 6.69]}
							rotation={[-0.17, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 341'
							geometry={nodes['Cube 341'].geometry}
							material={materials['Cube 341 Material']}
							castShadow
							receiveShadow
							position={[-139.64, 32.13, 7.2]}
							rotation={[-0.17, 0, -0.11]}
							scale={1}
						/>
						<mesh
							name='Cube 332'
							geometry={nodes['Cube 332'].geometry}
							material={materials['Cube 332 Material']}
							castShadow
							receiveShadow
							position={[199.05, 54.26, 0.2]}
						/>
						<mesh
							name='Cylinder 4'
							geometry={nodes['Cylinder 4'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[-204.19, -7.95, 0]}
							rotation={[0, 0, -0.04]}
							scale={[0.73, 0.52, 0.73]}
						/>
						<mesh
							name='Cylinder 3'
							geometry={nodes['Cylinder 3'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[204.19, -7.95, 0]}
							scale={[0.73, 0.52, 0.73]}
						/>
					</group>
					<group name='sign' position={[-497.64, -81.65, 237.17]} scale={0.73}>
						<mesh
							name='Cube 31'
							geometry={nodes['Cube 31'].geometry}
							material={materials['flowerpot-2']}
							castShadow
							receiveShadow
							position={[-1.59, -174.8, 4.35]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1.38}
						/>
						<mesh
							name='Cylinder 2'
							geometry={nodes['Cylinder 2'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[-0.79, -37.16, 3.01]}
							scale={1}
						/>
						<mesh
							name='Rectangle 71'
							geometry={nodes['Rectangle 71'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[0.96, 145.87, 11.77]}
							scale={1.14}
						/>
						<mesh
							name='Cylinder1'
							geometry={nodes.Cylinder1.geometry}
							material={materials['shed-orange']}
							castShadow
							receiveShadow
							position={[0, 144.75, 2.56]}
							rotation={[Math.PI / 2, 0, 0]}
							scale={1.14}
						/>
					</group>
					<group name='Ad' position={[-363.19, 1.91, 64.28]} scale={0.87}>
						<mesh
							name='Cube 32'
							geometry={nodes['Cube 32'].geometry}
							material={materials['flowerpot-1']}
							castShadow
							receiveShadow
							position={[34.22, -59.96, -0.03]}
						/>
						<mesh
							name='Cube 311'
							geometry={nodes['Cube 311'].geometry}
							material={materials['flowerpot-1']}
							castShadow
							receiveShadow
							position={[34.22, 60.09, -0.03]}
						/>
						<mesh
							name='Rectangle 6'
							geometry={nodes['Rectangle 6'].geometry}
							material={materials['Rectangle 6 Material']}
							castShadow
							receiveShadow
							position={[-12.7, 0, -10]}
						/>
					</group>
					<group name='plant' position={[70.95, 138.72, -177.09]}>
						<group name='tree' position={[-362.51, 104.14, -269.25]} rotation={[0, -0.09, 0]} scale={1}>
							<mesh
								name='Cube 29'
								geometry={nodes['Cube 29'].geometry}
								material={materials.tree}
								castShadow
								receiveShadow
								position={[85.76, 77.44, 101.46]}
								rotation={[-1.2, -0.1, 0.16]}
								scale={1}
							/>
							<mesh
								name='Cube 30'
								geometry={nodes['Cube 30'].geometry}
								material={materials.tree}
								castShadow
								receiveShadow
								position={[-22.71, -66.34, -171.81]}
								rotation={[2.76, 0.06, -0.14]}
								scale={1}
							/>
							<mesh
								name='Cube 28'
								geometry={nodes['Cube 28'].geometry}
								material={materials.tree}
								castShadow
								receiveShadow
								position={[-42.13, -69.52, 117.74]}
								rotation={[0.19, 0.03, 0.15]}
								scale={1}
							/>
							<mesh
								name='Cube 27'
								geometry={nodes['Cube 27'].geometry}
								material={materials['Cube 27 Material']}
								castShadow
								receiveShadow
								position={[27.92, -427.63, 28.39]}
							/>
						</group>
						<group name='plant-8' position={[-370.53, -274.42, 427.71]}>
							<mesh
								name='Ellipse1'
								geometry={nodes.Ellipse1.geometry}
								material={materials.earth}
								castShadow
								receiveShadow
								position={[5.42, -10.29, -4.17]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 58'
								geometry={nodes['Cube 58'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[4.4, 15.47, -7.07]}
								rotation={[-0.31, 0.28, 0.1]}
								scale={1}
							/>
							<mesh
								name='Cube 57'
								geometry={nodes['Cube 57'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[15.2, 15.47, 0.33]}
								rotation={[-2.55, -1.09, -2.65]}
								scale={1}
							/>
							<mesh
								name='Cube 56'
								geometry={nodes['Cube 56'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[10.97, 5.56, 13.22]}
								rotation={[-2.57, -0.23, -3.06]}
								scale={1}
							/>
							<mesh
								name='Cube 554'
								geometry={nodes['Cube 554'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-8.2, 6.97, -4.18]}
								rotation={[-0.9, 0.91, 0.92]}
								scale={1}
							/>
							<mesh
								name='Cube 543'
								geometry={nodes['Cube 543'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[9.18, 4.83, -18.26]}
								rotation={[-0.47, -0.07, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 421'
								geometry={nodes['Cube 421'].geometry}
								material={materials['flowerpot-1']}
								castShadow
								receiveShadow
								position={[5.48, -31.16, -4]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='plant-10' position={[53.87, 24.04, -27.91]}>
							<mesh
								name='Ellipse2'
								geometry={nodes.Ellipse2.geometry}
								material={materials.earth}
								castShadow
								receiveShadow
								position={[5.42, -10.29, -4.17]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 581'
								geometry={nodes['Cube 581'].geometry}
								material={materials['green-4']}
								castShadow
								receiveShadow
								position={[-0.85, 24.25, -2.91]}
								rotation={[-0.81, 1.13, 0.74]}
								scale={[1, 1.21, 1.02]}
							/>
							<mesh
								name='Cube 571'
								geometry={nodes['Cube 571'].geometry}
								material={materials['green-4']}
								castShadow
								receiveShadow
								position={[11.26, 24.25, -7.85]}
								rotation={[-0.46, -0.93, -0.39]}
								scale={[1, 1.21, 1.02]}
							/>
							<mesh
								name='Cube 561'
								geometry={nodes['Cube 561'].geometry}
								material={materials['green-4']}
								castShadow
								receiveShadow
								position={[19.7, 12.08, 2.78]}
								rotation={[-1.88, -0.88, -1.92]}
								scale={[1, 1.17, 1.07]}
							/>
							<mesh
								name='Cube 555'
								geometry={nodes['Cube 555'].geometry}
								material={materials['green-4']}
								castShadow
								receiveShadow
								position={[-5.37, 13.81, 9.21]}
								rotation={[-2.33, 0.84, 2.66]}
								scale={[1, 1.18, 1.06]}
							/>
							<mesh
								name='Cube 544'
								geometry={nodes['Cube 544'].geometry}
								material={materials['green-4']}
								castShadow
								receiveShadow
								position={[-7.57, 11.18, -13.05]}
								rotation={[-0.69, 0.76, 0.52]}
								scale={[1, 1.18, 1.05]}
							/>
							<mesh
								name='Cube 422'
								geometry={nodes['Cube 422'].geometry}
								material={materials['flowerpot-1']}
								castShadow
								receiveShadow
								position={[5.48, -31.16, -4]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='plant-9' position={[-417.38, -256.09, 352.08]}>
							<mesh
								name='Ellipse3'
								geometry={nodes.Ellipse3.geometry}
								material={materials.earth}
								castShadow
								receiveShadow
								position={[-9.05, -42.26, 13.07]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 50'
								geometry={nodes['Cube 50'].geometry}
								material={materials['green-3']}
								castShadow
								receiveShadow
								position={[-45.91, 43.17, 39.61]}
								rotation={[-2.01, -0.03, 2.23]}
								scale={1}
							/>
							<mesh
								name='Cube 49'
								geometry={nodes['Cube 49'].geometry}
								material={materials['green-3']}
								castShadow
								receiveShadow
								position={[34.83, 47.64, 4.82]}
								rotation={[-1.13, -0.25, -1.22]}
								scale={1}
							/>
							<mesh
								name='Cube 48'
								geometry={nodes['Cube 48'].geometry}
								material={materials['green-3']}
								castShadow
								receiveShadow
								position={[-33.01, 58.77, -24.44]}
								rotation={[-1.07, 0.29, 0.42]}
								scale={1}
							/>
							<mesh
								name='Cube 47'
								geometry={nodes['Cube 47'].geometry}
								material={materials['Cube 47 Material']}
								castShadow
								receiveShadow
								position={[-9.23, -23.29, 12.91]}
							/>
							<mesh
								name='Cube 46'
								geometry={nodes['Cube 46'].geometry}
								material={materials['Cube 46 Material']}
								castShadow
								receiveShadow
								position={[-9.45, -67.96, 12.83]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='plant-2' position={[362.33, -191.25, -425.19]}>
							<mesh
								name='Ellipse4'
								geometry={nodes.Ellipse4.geometry}
								material={materials.earth}
								castShadow
								receiveShadow
								position={[-18.72, 1.43, 11.21]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 382'
								geometry={nodes['Cube 382'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[54.79, 79.04, 35.75]}
								rotation={[1.76, -0.24, 1.87]}
								scale={1}
							/>
							<mesh
								name='Cube 383'
								geometry={nodes['Cube 383'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-65.35, 107.44, -10.46]}
								rotation={[1.53, -0.04, -1.21]}
								scale={1}
							/>
							<mesh
								name='Cube 372'
								geometry={nodes['Cube 372'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-7.94, 65.33, -41.67]}
								rotation={[Math.PI / 2, -0.16, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 14'
								geometry={nodes['Cube 14'].geometry}
								material={materials['flowerpot-2']}
								castShadow
								receiveShadow
								position={[-20.25, -77.15, 10.26]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='plant-7' position={[-331.64, -303.21, 396.93]} scale={0.81}>
							<mesh
								name='Cube 401'
								geometry={nodes['Cube 401'].geometry}
								material={materials['Cube 401 Material']}
								castShadow
								receiveShadow
								position={[-0.63, 10.15, -1.13]}
								rotation={[0, 0, 0]}
								scale={[0.51, 0.77, 0.51]}
							/>
							<mesh
								name='Ellipse 4'
								geometry={nodes['Ellipse 4'].geometry}
								material={materials.earth}
								castShadow
								receiveShadow
								position={[-0.16, -1.09, 0.31]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={0.51}
							/>
							<mesh
								name='Cube 16'
								geometry={nodes['Cube 16'].geometry}
								material={materials['flowerpot-2']}
								castShadow
								receiveShadow
								position={[0, -19.11, 0]}
								rotation={[0, Math.PI / 2, 0]}
								scale={[0.51, 0.56, 0.51]}
							/>
						</group>
						<group name='plant-11' position={[-1.25, 19.87, -25.21]} rotation={[0, -0.41, 0]} scale={0.72}>
							<mesh
								name='Cube 392'
								geometry={nodes['Cube 392'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[1.78, 57.09, 1.38]}
								rotation={[-Math.PI, -0.17, -Math.PI]}
								scale={[1, 1.49, 1]}
							/>
							<mesh
								name='Ellipse 41'
								geometry={nodes['Ellipse 41'].geometry}
								material={materials['Ellipse 41 Material']}
								castShadow
								receiveShadow
								position={[-0.31, -13.74, 0.6]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 161'
								geometry={nodes['Cube 161'].geometry}
								material={materials['Cube 161 Material']}
								castShadow
								receiveShadow
								position={[0, -49.13, 0]}
								rotation={[0, Math.PI / 2, 0]}
								scale={[1, 1.1, 1]}
							/>
						</group>
						<group name='plant-4' position={[348.95, -277.45, 65.08]}>
							<mesh
								name='Cube 402'
								geometry={nodes['Cube 402'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[9.92, 7.59, -13.89]}
								rotation={[-3.14, -0.17, -3]}
								scale={[1.01, 1.48, 1]}
							/>
							<mesh
								name='Cube 393'
								geometry={nodes['Cube 393'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-12.68, 63.62, 5.55]}
								rotation={[-Math.PI, -0.17, -Math.PI]}
								scale={[1, 1.49, 1]}
							/>
							<mesh
								name='Ellipse 42'
								geometry={nodes['Ellipse 42'].geometry}
								material={materials['Ellipse 42 Material']}
								castShadow
								receiveShadow
								position={[-0.31, -13.74, 0.6]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 162'
								geometry={nodes['Cube 162'].geometry}
								material={materials['flowerpot-1']}
								castShadow
								receiveShadow
								position={[0, -49.13, 0]}
								rotation={[0, Math.PI / 2, 0]}
								scale={[1, 1.1, 1]}
							/>
						</group>
						<group name='plant-6' position={[322.73, -215.92, 417.05]}>
							<mesh
								name='Cube 373'
								geometry={nodes['Cube 373'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[19.25, -30.47, 11.91]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Ellipse5'
								geometry={nodes.Ellipse5.geometry}
								material={materials['Ellipse5 Material']}
								castShadow
								receiveShadow
								position={[18.85, -36.13, 11.14]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cylinder2'
								geometry={nodes.Cylinder2.geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[30.67, 34.05, -28.04]}
								rotation={[1.18, -0.08, 0.11]}
								scale={1.1}
							/>
							<mesh
								name='Cylinder3'
								geometry={nodes.Cylinder3.geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-0.99, 70, -9.92]}
								rotation={[1.43, 0.12, -1.01]}
								scale={1.1}
							/>
							<mesh
								name='Cube 18'
								geometry={nodes['Cube 18'].geometry}
								material={materials['flowerpot-1']}
								castShadow
								receiveShadow
								position={[18.85, -83.45, 10.99]}
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cylinder 21'
								geometry={nodes['Cylinder 21'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[17.54, 18.85, 40.73]}
								rotation={[1.97, 0.11, -2.44]}
								scale={0.88}
							/>
						</group>
						<group name='plant-1' position={[239.96, 1.25, -404.87]}>
							<mesh
								name='Cube 26'
								geometry={nodes['Cube 26'].geometry}
								material={materials.tree}
								castShadow
								receiveShadow
								position={[27.94, 169.69, -42.91]}
								rotation={[-Math.PI / 2, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 19'
								geometry={nodes['Cube 19'].geometry}
								material={materials['Cube 19 Material']}
								castShadow
								receiveShadow
								position={[-56.68, -328.46, -60.04]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={1}
							/>
						</group>
						<group name='plant-3' position={[330.04, -265.92, -332.03]}>
							<mesh
								name='Ellipse6'
								geometry={nodes.Ellipse6.geometry}
								material={materials['Ellipse6 Material']}
								castShadow
								receiveShadow
								position={[-6.66, -35.01, -2.58]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={1}
							/>
							<mesh
								name='Cube 582'
								geometry={nodes['Cube 582'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-14.53, 14.05, 0.72]}
								rotation={[-1.85, 0.98, 1.72]}
								scale={[1.15, 1.73, 1.29]}
							/>
							<mesh
								name='Cube 572'
								geometry={nodes['Cube 572'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-2.57, 13.84, -17.23]}
								rotation={[-0.44, -0.25, -0.16]}
								scale={[1.09, 1.76, 1.21]}
							/>
							<mesh
								name='Cube 562'
								geometry={nodes['Cube 562'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[11.05, -2.82, -15.12]}
								rotation={[-1.05, -0.74, -0.85]}
								scale={[1.16, 1.67, 1.45]}
							/>
							<mesh
								name='Cube 556'
								geometry={nodes['Cube 556'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-4.11, -0.95, 15.98]}
								rotation={[-2.58, 0.15, -2.99]}
								scale={[1.12, 1.68, 1.37]}
							/>
							<mesh
								name='Cube 545'
								geometry={nodes['Cube 545'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-25.84, -5.67, -9.11]}
								rotation={[-0.95, 0.86, 0.77]}
								scale={[1.12, 1.7, 1.34]}
							/>
							<mesh
								name='Cube 17'
								geometry={nodes['Cube 17'].geometry}
								material={materials['flowerpot-1']}
								castShadow
								receiveShadow
								position={[-9.18, -58.77, -4.65]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='plant-5' position={[359.13, -265.11, 240.06]}>
							<mesh
								name='Cube 394'
								geometry={nodes['Cube 394'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[6.8, -13.83, -69.21]}
								rotation={[-2.87, -0.62, -2.31]}
								scale={1}
							/>
							<mesh
								name='Cube 395'
								geometry={nodes['Cube 395'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-2.35, -21.64, 10.09]}
								rotation={[Math.PI, 0.93, -2.27]}
								scale={1}
							/>
							<mesh
								name='Cube 384'
								geometry={nodes['Cube 384'].geometry}
								material={materials['green-1']}
								castShadow
								receiveShadow
								position={[-11.06, 2.94, -37.12]}
								rotation={[0, Math.PI / 2, 0]}
								scale={1.21}
							/>
							<mesh
								name='Cube 403'
								geometry={nodes['Cube 403'].geometry}
								material={materials['green-light']}
								castShadow
								receiveShadow
								position={[-2.13, 29.16, 79.2]}
								rotation={[-2.68, 0.39, -2.96]}
								scale={[1.25, 1.31, 1.44]}
							/>
							<mesh
								name='Cube 374'
								geometry={nodes['Cube 374'].geometry}
								material={materials['green-light']}
								castShadow
								receiveShadow
								position={[-44.24, 11.95, 8.55]}
								rotation={[-1.27, 0.42, 1.1]}
								scale={[1.09, 1.09, 1.17]}
							/>
							<mesh
								name='Cube 375'
								geometry={nodes['Cube 375'].geometry}
								material={materials['green-light']}
								castShadow
								receiveShadow
								position={[-23.09, 13.45, -89.33]}
								rotation={[-1.23, 0.72, 0.48]}
								scale={1.13}
							/>
							<mesh
								name='Ellipse 21'
								geometry={nodes['Ellipse 21'].geometry}
								material={materials['Ellipse 21 Material']}
								castShadow
								receiveShadow
								position={[22.66, 7.73, 36.11]}
								rotation={[-1.3, 0.58, -0.28]}
								scale={1.03}
							/>
							<mesh
								name='Ellipse 3'
								geometry={nodes['Ellipse 3'].geometry}
								material={materials['Ellipse 3 Material']}
								castShadow
								receiveShadow
								position={[45.27, 18.34, -80.43]}
								rotation={[-1.86, 0.81, 0.14]}
								scale={1}
							/>
							<mesh
								name='Ellipse7'
								geometry={nodes.Ellipse7.geometry}
								material={materials['Ellipse7 Material']}
								castShadow
								receiveShadow
								position={[-5.73, 59.36, -23.05]}
								rotation={[-0.79, 0.66, -1.11]}
								scale={0.92}
							/>
							<mesh
								name='Cylinder 22'
								geometry={nodes['Cylinder 22'].geometry}
								material={materials['Cylinder 22 Material']}
								castShadow
								receiveShadow
								position={[19.77, 2.54, 34.03]}
								rotation={[0.11, -0.24, -0.6]}
								scale={1.03}
							/>
							<mesh
								name='Cylinder 31'
								geometry={nodes['Cylinder 31'].geometry}
								material={materials['Cylinder 31 Material']}
								castShadow
								receiveShadow
								position={[41.06, 13.91, -79.96]}
								rotation={[-0.19, 0.09, -0.82]}
								scale={1}
							/>
							<mesh
								name='Cylinder4'
								geometry={nodes.Cylinder4.geometry}
								material={materials['Cylinder4 Material']}
								castShadow
								receiveShadow
								position={[-8.52, 55.88, -26.46]}
								rotation={[-0.1, -Math.PI / 4, -Math.PI / 3]}
								scale={0.92}
							/>
							<mesh
								name='Rectangle 3'
								geometry={nodes['Rectangle 3'].geometry}
								material={materials['Rectangle 3 Material']}
								castShadow
								receiveShadow
								position={[-22.85, -16.48, 10.08]}
								rotation={[-Math.PI / 2, 0, Math.PI / 2]}
								scale={[1, 0.89, 1]}
							/>
							<mesh
								name='Cube 15'
								geometry={nodes['Cube 15'].geometry}
								material={materials['shed-light']}
								castShadow
								receiveShadow
								position={[26.12, -49.99, 9.08]}
								rotation={[0, Math.PI / 2, 0]}
								scale={[1, 1, 0.89]}
							/>
						</group>
					</group>
					<group name='ground' position={[43.59, -198.13, -145.76]}>
						<mesh
							name='Cube 431'
							geometry={nodes['Cube 431'].geometry}
							material={materials['wood-1']}
							castShadow
							receiveShadow
							position={[-235.19, 13.54, 313.88]}
							rotation={[0, 0, 0]}
							scale={1}
						/>
						<mesh
							name='Cube 13'
							geometry={nodes['Cube 13'].geometry}
							material={materials['Cube 13 Material']}
							castShadow
							receiveShadow
							position={[342.99, -5.87, -263.24]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='ground-main'
							geometry={nodes['ground-main'].geometry}
							material={materials['ground-main Material']}
							castShadow
							receiveShadow
							position={[0, -17.56, 0]}
							scale={[0.85, 1, 0.89]}
						/>
						<mesh
							name='ground-pink'
							geometry={nodes['ground-pink'].geometry}
							material={materials['ground-pink Material']}
							castShadow
							receiveShadow
							position={[-175.42, -4.02, 364.42]}
							scale={[0.85, 1, 0.89]}
						/>
					</group>
					<group name='door-2' position={[275.77, 202.3, -233.18]}>
						<mesh
							name='Rectangle 31'
							geometry={nodes['Rectangle 31'].geometry}
							material={materials['Rectangle 31 Material']}
							castShadow
							receiveShadow
							position={[0, 0, -10.61]}
							scale={1}
						/>
						<mesh
							name='Cube 557'
							geometry={nodes['Cube 557'].geometry}
							material={materials['Cube 557 Material']}
							castShadow
							receiveShadow
							position={[-32.39, 8.38, 4.55]}
						/>
						<mesh
							name='Cube 536'
							geometry={nodes['Cube 536'].geometry}
							material={materials['Cube 536 Material']}
							castShadow
							receiveShadow
							position={[-24.02, 8.38, 8.33]}
						/>
					</group>
					<group name='door-1' position={[364.72, -84.28, -407.92]}>
						<mesh
							name='Cube 523'
							geometry={nodes['Cube 523'].geometry}
							material={materials['door-2']}
							castShadow
							receiveShadow
							position={[0.19, 2.28, 31.92]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='Sphere'
							geometry={nodes.Sphere.geometry}
							material={materials['door-2']}
							castShadow
							receiveShadow
							position={[8.48, 2.28, 32.47]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='Rectangle'
							geometry={nodes.Rectangle.geometry}
							material={materials.door}
							castShadow
							receiveShadow
							position={[-10.18, -5.25, -2]}
							rotation={[0, Math.PI / 2, 0]}
						/>
					</group>
					<group name='house' position={[43.8, 127.33, -135.84]}>
						<group name='shed-2' position={[334.76, -72.18, -271.73]}>
							<mesh
								name='Cube 558'
								geometry={nodes['Cube 558'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[0, 0, -84.93]}
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 546'
								geometry={nodes['Cube 546'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[4.68, -0.59, 1.73]}
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 559'
								geometry={nodes['Cube 559'].geometry}
								material={materials['wood-2']}
								castShadow
								receiveShadow
								position={[-1.52, 1.67, -44.75]}
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 537'
								geometry={nodes['Cube 537'].geometry}
								material={materials['wood-2']}
								castShadow
								receiveShadow
								position={[3.79, -0.59, 41.91]}
								rotation={[0, Math.PI / 2, 0]}
							/>
							<mesh
								name='Cube 524'
								geometry={nodes['Cube 524'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[1.53, 1.16, 80.43]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<group name='shed' position={[-155.45, -65.04, 341.82]} rotation={[0.07, 0, 0]} scale={[0.86, 0.86, 0.92]}>
							<mesh
								name='Cube 342'
								geometry={nodes['Cube 342'].geometry}
								material={materials['shed-light']}
								castShadow
								receiveShadow
								position={[160.13, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 333'
								geometry={nodes['Cube 333'].geometry}
								material={materials['shed-light']}
								castShadow
								receiveShadow
								position={[31.98, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 321'
								geometry={nodes['Cube 321'].geometry}
								material={materials['shed-light']}
								castShadow
								receiveShadow
								position={[-96.67, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 352'
								geometry={nodes['Cube 352'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[224.88, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 343'
								geometry={nodes['Cube 343'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[96.67, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 334'
								geometry={nodes['Cube 334'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-31.48, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 312'
								geometry={nodes['Cube 312'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-160.13, 10.65, -9.16]}
								rotation={[-1.48, 0, 0]}
								scale={1}
							/>
						</group>
						<group name='roof' position={[65.83, 278.99, -263]}>
							<mesh
								name='Cube 25'
								geometry={nodes['Cube 25'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, -25.93, -172.3]}
								rotation={[-2, 0, Math.PI]}
								scale={1}
							/>
							<mesh
								name='Cube 24'
								geometry={nodes['Cube 24'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, -25.78, 172.3]}
								rotation={[-1.14, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 251'
								geometry={nodes['Cube 251'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 5.06, -119.62]}
								rotation={[-2, 0, Math.PI]}
								scale={1}
							/>
							<mesh
								name='Cube 23'
								geometry={nodes['Cube 23'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 5.21, 119.62]}
								rotation={[-1.14, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 252'
								geometry={nodes['Cube 252'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 34.81, -68.49]}
								rotation={[-2, 0, Math.PI]}
								scale={1}
							/>
							<mesh
								name='Cube 22'
								geometry={nodes['Cube 22'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 34.97, 68.49]}
								rotation={[-1.14, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 253'
								geometry={nodes['Cube 253'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 64.38, -18.82]}
								rotation={[-2, 0, Math.PI]}
								scale={1}
							/>
							<mesh
								name='Cube 21'
								geometry={nodes['Cube 21'].geometry}
								material={materials['shed-orange']}
								castShadow
								receiveShadow
								position={[-0.63, 64.53, 18.82]}
								rotation={[-1.14, 0, 0]}
								scale={1}
							/>
							<mesh
								name='Cube 20'
								geometry={nodes['Cube 20'].geometry}
								material={materials['house-white']}
								castShadow
								receiveShadow
								position={[0.6, 50.13, -0.16]}
								rotation={[0, Math.PI / 2, 0]}
							/>
						</group>
						<mesh
							name='Cube 51'
							geometry={nodes['Cube 51'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[351.17, 47.41, -265.89]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<mesh
							name='Cube 12'
							geometry={nodes['Cube 12'].geometry}
							material={materials['house-white']}
							castShadow
							receiveShadow
							position={[150.97, 5.94, 268.76]}
							rotation={[-Math.PI / 2, 0, 0]}
							scale={1}
						/>
						<mesh
							name='House-main'
							geometry={nodes['House-main'].geometry}
							material={materials['house-wall']}
							castShadow
							receiveShadow
							position={[-105.07, -179.85, 90.6]}
							scale={[0.85, 1, 0.89]}
						/>
					</group>
				</group>
			</Canvas>
		</main>
	)
}
