import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/MRt17A31cw5xjn5J/scene.splinecode"
  );
  return (
    <>
      <directionalLight
        name="Directional Light"
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-500}
        shadow-camera-right={500}
        shadow-camera-top={500}
        shadow-camera-bottom={-500}
        color="#becfd8"
        position={[-1033.39, 1054.37, 582.88]}
      />
      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.25}
        color="#eaeaea"
      />
      {/* @ts-ignore */}
      <OrthographicCamera
        name="Room"
        makeDefault
        zoom={0.6}
        position={[517.99, 974.03, 660.98]}
        rotation={[-0.29, 0.63, 0.18]}
      />

      <group {...props} dispose={null}>
        <group name="Group 11" position={[-340.1, 731.51, -335.45]}>
          <mesh
            name="Cube 29"
            geometry={nodes["Cube 29"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[188.44, -23.98, 161.55]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 28"
            geometry={nodes["Cube 28"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-193.97, -23.98, 161.55]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 291"
            geometry={nodes["Cube 291"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[188.44, -23.98, -161.47]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 27"
            geometry={nodes["Cube 27"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-193.97, -23.98, -161.47]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 25"
            geometry={nodes["Cube 25"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-194.08, 0, 0.05]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 24"
            geometry={nodes["Cube 24"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[188.52, 0, 0.05]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Cube 26"
            geometry={nodes["Cube 26"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-2.77, 0, -161.46]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 23"
            geometry={nodes["Cube 23"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-2.71, 0, 161.56]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
        <group
          name="umbrella"
          position={[-465.56, 774.32, -417.43]}
          rotation={[0, 1.48, 0]}
          scale={0.38}
        >
          <mesh
            name="white"
            geometry={nodes.white.geometry}
            material={materials.line}
            castShadow
            receiveShadow
            position={[13.75, 0.52, -0.1]}
            rotation={[0, 0, 0.32]}
            scale={[1.41, 0.81, 1.41]}
          />
          <mesh
            name="red"
            geometry={nodes.red.geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[13.75, 0.52, -0.1]}
            rotation={[0, 0, 0.32]}
            scale={[1.41, 0.81, 1.41]}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes["Cylinder 2"].geometry}
            material={materials.Earth}
            castShadow
            receiveShadow
            position={[-10.02, 72.2, 0.5]}
            rotation={[0, 0, 0.34]}
            scale={[0.8, 1.01, 0.8]}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials.Earth}
            castShadow
            receiveShadow
            position={[9.44, -29.38, -0.18]}
            rotation={[0, 0, 0.18]}
            scale={[0.61, 0.77, 0.61]}
          />
        </group>
        <group
          name="beach"
          position={[-462.38, 755.61, -418.15]}
          rotation={[0, 1.48, 0]}
          scale={0.3}
        >
          <mesh
            name="sand"
            geometry={nodes.sand.geometry}
            material={materials["G-orange"]}
            castShadow
            receiveShadow
            position={[-0.07, -204.02, 0.05]}
            rotation={[0, 0, 0]}
            scale={1.28}
          />
        </group>
        <group
          name="Gallery"
          position={[-98.56, 300, 100]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
        >
          <mesh
            name="Text"
            geometry={nodes.Text.geometry}
            material={materials.line}
            castShadow
            receiveShadow
            position={[0, 10, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials["G-yellow"]}
            castShadow
            receiveShadow
            position={[0, -0.5, -0.01]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
        </group>
        <group name="Stair" position={[464.32, 138.42, -12.46]}>
          <mesh
            name="Boolean 2"
            geometry={nodes["Boolean 2"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-157.18, 98.69, -218.73]}
          >
            <mesh
              name="Cube 241"
              geometry={nodes["Cube 241"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-17.12, 8.22, 0]}
            />
            <mesh
              name="Wall 2"
              geometry={nodes["Wall 2"].geometry}
              material={materials["Wall 2 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[299.66, 158.14, -315.23]}
              scale={[0.7, 0.7, 1.25]}
            />
          </mesh>
          <mesh
            name="Wall"
            geometry={nodes.Wall.geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[430.14, 21.86, 355.1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.25}
          />
          <mesh
            name="Boolean"
            geometry={nodes.Boolean.geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-107.52, 211.58, -235.1]}
          >
            <mesh
              name="Cube 231"
              geometry={nodes["Cube 231"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-75, -110.46, 16.37]}
            />
            <mesh
              name="Cube 22"
              geometry={nodes["Cube 22"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[24.8, 0, 0]}
            />
            <mesh
              name="Cube 13"
              geometry={nodes["Cube 13"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
            />
          </mesh>
        </group>

        <group
          name="game"
          position={[219.89, 684.31, -404.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        >
          <group
            name="handle"
            position={[-99.72, -25.86, -19.86]}
            rotation={[-1.53, 0.28, 0.26]}
            scale={0.7}
          >
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[3.4, 20.39, 24.57]}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes["Cylinder 21"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[62.73, 56.83, 7.86]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[-59.24, 56.83, 7.86]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Ellipse 8"
              geometry={nodes["Ellipse 8"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[64.77, 29.28, 28.54]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Ellipse 7"
              geometry={nodes["Ellipse 7"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[51.91, 16.12, 28.54]}
              scale={1}
            />
            <mesh
              name="Ellipse 81"
              geometry={nodes["Ellipse 81"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[38.45, 29.28, 28.54]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Ellipse 4"
              geometry={nodes["Ellipse 4"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[51.91, 42.44, 28.54]}
              scale={1}
            />
            <mesh
              name="Rectangle 4"
              geometry={nodes["Rectangle 4"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[-36.57, 29.28, 28.54]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Rectangle 3"
              geometry={nodes["Rectangle 3"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[-48.96, 16.89, 28.54]}
              scale={1}
            />
            <mesh
              name="Rectangle 41"
              geometry={nodes["Rectangle 41"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[-61.36, 29.28, 28.54]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes["Rectangle 21"].geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[-48.96, 41.68, 28.54]}
              scale={1}
            />
            <mesh
              name="Ellipse 3"
              geometry={nodes["Ellipse 3"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[51.61, 28.68, 27.46]}
              scale={1}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes["Ellipse 2"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[-48.93, 28.68, 27.46]}
              scale={1}
            />
            <mesh
              name="Ellipse 31"
              geometry={nodes["Ellipse 31"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[51.61, 28.68, 26.38]}
              scale={1}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[-48.93, 28.68, 26.38]}
              scale={1}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.blue}
              castShadow
              receiveShadow
              position={[-0.02, 26.93, -4.21]}
            />
          </group>
          <mesh
            name="Text1"
            geometry={nodes.Text1.geometry}
            material={materials.line}
            castShadow
            receiveShadow
            position={[0, 10, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Rectangle1"
            geometry={nodes.Rectangle1.geometry}
            material={materials["G-yellow"]}
            castShadow
            receiveShadow
            position={[0, -0.5, -0.01]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
        </group>
        <group name="Group 2" position={[-15.75, 613.22, -365.2]}>
          <group
            name="Big 2"
            position={[-18.31, -41.12, 47.21]}
            rotation={[-3.14, Math.PI / 6, 2.83]}
            scale={0.1}
          >
            <mesh
              name="Body"
              geometry={nodes.Body.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-19.44, -31.2, -23.27]}
              scale={1}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes["Sphere 3"].geometry}
              material={materials["Sphere 3 Material"]}
              castShadow
              receiveShadow
              position={[51.11, 82.72, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes["Sphere 2"].geometry}
              material={materials["Sphere 2 Material"]}
              castShadow
              receiveShadow
              position={[-112.82, 68.48, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-8.1, -165.45, -186.91]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes["Cube 7"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[71.21, -197.72, 36.96]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.8}
            />
            <mesh
              name="Cube 6"
              geometry={nodes["Cube 6"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-101.62, -197.14, 41.89]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.8}
            />
            <mesh
              name="Cube 3"
              geometry={nodes["Cube 3"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-1.42, 210.2, -8.87]}
              rotation={[0, 0, -0.49]}
              scale={0.93}
            />
            <mesh
              name="Cube 2"
              geometry={nodes["Cube 2"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-56.12, 220.05, -8.87]}
              rotation={[0, 0, 0.44]}
              scale={0.93}
            />
          </group>
          <group
            name="Big 21"
            position={[31.19, -40.54, 49.75]}
            rotation={[3.14, -0.52, -2.74]}
            scale={0.1}
          >
            <mesh
              name="Body1"
              geometry={nodes.Body1.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-19.44, -31.2, -23.27]}
              scale={1}
            />
            <mesh
              name="Sphere 31"
              geometry={nodes["Sphere 31"].geometry}
              material={materials["Sphere 31 Material"]}
              castShadow
              receiveShadow
              position={[51.11, 82.72, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere 21"
              geometry={nodes["Sphere 21"].geometry}
              material={materials["Sphere 21 Material"]}
              castShadow
              receiveShadow
              position={[-112.82, 68.48, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere1"
              geometry={nodes.Sphere1.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-8.1, -165.45, -186.91]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Cube 71"
              geometry={nodes["Cube 71"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[71.21, -197.72, 36.96]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.8}
            />
            <mesh
              name="Cube 61"
              geometry={nodes["Cube 61"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-101.62, -197.14, 41.89]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.8}
            />
            <mesh
              name="Cube 31"
              geometry={nodes["Cube 31"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-1.42, 210.2, -8.87]}
              rotation={[0, 0, -0.49]}
              scale={0.93}
            />
            <mesh
              name="Cube 21"
              geometry={nodes["Cube 21"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-56.12, 220.05, -8.87]}
              rotation={[0, 0, 0.44]}
              scale={0.93}
            />
          </group>
          <group
            name="Furnitures"
            position={[7.17, -45.5, 56.97]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.4, 0.44, 0.39]}
          >
            <mesh
              name="Furnitures1"
              geometry={nodes.Furnitures1.geometry}
              material={materials.blue}
              receiveShadow
              position={[291.88, 139.45, 219.21]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.16, 1.03, 1.16]}
            />
            <mesh
              name="Metal"
              geometry={nodes.Metal.geometry}
              material={materials.Wood2}
              castShadow
              receiveShadow
              position={[62.7, -60.06, 111.64]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.16, 1.03, 1.16]}
            />
          </group>
          <group name="TV" position={[6, 36.64, -116.71]} scale={0.5}>
            <mesh
              name="line 2"
              geometry={nodes["line 2"].geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[2.61, -241.34, 154.85]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={2}
            />
            <mesh
              name="line"
              geometry={nodes.line.geometry}
              material={materials.Blue}
              castShadow
              receiveShadow
              position={[2.61, -143.72, -4.76]}
              scale={2}
            />
            <mesh
              name="Screen"
              geometry={nodes.Screen.geometry}
              material={materials["Screen Material"]}
              position={[0, 0, 3.5]}
            />
            <mesh
              name="Hover"
              geometry={nodes.Hover.geometry}
              material={materials["Hover Material"]}
              position={[0, 0, 3.5]}
            />
            <mesh
              name="TV1"
              geometry={nodes.TV1.geometry}
              material={materials.dark}
              position={[0, 0, -4.5]}
            />
          </group>
          <mesh
            name="Cube 19"
            geometry={nodes["Cube 19"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-0.46, 0, -126.57]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name="Cube 20"
            geometry={nodes["Cube 20"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-0.96, -92.5, 3.75]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name="Boolean 21"
            geometry={nodes["Boolean 21"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-100.27, 2.02, 50.88]}
          >
            <mesh
              name="Cylinder 22"
              geometry={nodes["Cylinder 22"].geometry}
              material={materials["Cylinder 22 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 13.14, -5.02]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cube 18"
              geometry={nodes["Cube 18"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-17.23, -2.02, -47.13]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group
          name="Group 8"
          position={[-343.2, 613.22, -352.56]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1.2, 1.2, 1]}
        >
          <group
            name="Big 22"
            position={[-5.58, 72.43, 64.24]}
            rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
            scale={0.1}
          >
            <group
              name="Lifebuoy"
              position={[-3.72, -102.47, -13.26]}
              rotation={[-1.57, 0, 0.52]}
              scale={4}
            >
              <mesh
                name="Torus 8"
                geometry={nodes["Torus 8"].geometry}
                material={materials.Blue}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, -0.26]}
                scale={1}
              />
              <mesh
                name="Torus 6"
                geometry={nodes["Torus 6"].geometry}
                material={materials.Blue}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, -1.83]}
                scale={1}
              />
              <mesh
                name="Torus 4"
                geometry={nodes["Torus 4"].geometry}
                material={materials.Blue}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, 2.88]}
                scale={1}
              />
              <mesh
                name="Torus 2"
                geometry={nodes["Torus 2"].geometry}
                material={materials.Blue}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, 1.31]}
                scale={1}
              />
              <mesh
                name="Torus 7"
                geometry={nodes["Torus 7"].geometry}
                material={materials.line}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, -Math.PI / 3]}
                scale={1}
              />
              <mesh
                name="Torus 5"
                geometry={nodes["Torus 5"].geometry}
                material={materials.line}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, -2.62]}
                scale={1}
              />
              <mesh
                name="Torus 3"
                geometry={nodes["Torus 3"].geometry}
                material={materials.line}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, 2.09]}
                scale={1}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.line}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, Math.PI / 6]}
                scale={1}
              />
            </group>
            <mesh
              name="Body2"
              geometry={nodes.Body2.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-19.44, -31.2, -23.27]}
              scale={1}
            />
            <mesh
              name="Sphere 32"
              geometry={nodes["Sphere 32"].geometry}
              material={materials["Sphere 32 Material"]}
              castShadow
              receiveShadow
              position={[51.11, 82.72, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere 22"
              geometry={nodes["Sphere 22"].geometry}
              material={materials["Sphere 22 Material"]}
              castShadow
              receiveShadow
              position={[-112.82, 68.48, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere2"
              geometry={nodes.Sphere2.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-8.1, -165.45, -186.91]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Cube 72"
              geometry={nodes["Cube 72"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[71.21, -197.72, 36.96]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.8}
            />
            <mesh
              name="Cube 62"
              geometry={nodes["Cube 62"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-101.62, -197.14, 41.89]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.8}
            />
            <mesh
              name="Cube 32"
              geometry={nodes["Cube 32"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-1.42, 210.2, -8.87]}
              rotation={[0, 0, -0.49]}
              scale={0.93}
            />
            <mesh
              name="Cube 210"
              geometry={nodes["Cube 210"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-56.12, 220.05, -8.87]}
              rotation={[0, 0, 0.44]}
              scale={0.93}
            />
          </group>
          <group
            name="Big 23"
            position={[57.19, 94.4, 20.91]}
            rotation={[-2.68, -0.48, -2.92]}
            scale={0.1}
          >
            <mesh
              name="Body3"
              geometry={nodes.Body3.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-19.44, -31.2, -23.27]}
              scale={1}
            />
            <mesh
              name="Sphere 33"
              geometry={nodes["Sphere 33"].geometry}
              material={materials["Sphere 33 Material"]}
              castShadow
              receiveShadow
              position={[51.11, 82.72, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere 23"
              geometry={nodes["Sphere 23"].geometry}
              material={materials["Sphere 23 Material"]}
              castShadow
              receiveShadow
              position={[-112.82, 68.48, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name="Sphere3"
              geometry={nodes.Sphere3.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-8.1, -165.45, -186.91]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Cube 73"
              geometry={nodes["Cube 73"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[71.21, -197.72, 36.96]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.8}
            />
            <mesh
              name="Cube 63"
              geometry={nodes["Cube 63"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-101.62, -197.14, 41.89]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.8}
            />
            <mesh
              name="Cube 33"
              geometry={nodes["Cube 33"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-1.42, 210.2, -8.87]}
              rotation={[0, 0, -0.49]}
              scale={0.93}
            />
            <mesh
              name="Cube 211"
              geometry={nodes["Cube 211"].geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[-56.12, 220.05, -8.87]}
              rotation={[0, 0, 0.44]}
              scale={0.93}
            />
          </group>
          <mesh
            name="Cube 242"
            geometry={nodes["Cube 242"].geometry}
            material={materials["Cube 242 Material"]}
            castShadow
            receiveShadow
            position={[0, 59.59, -17.56]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Cube 261"
            geometry={nodes["Cube 261"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-1.32, 57.49, 131.02]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name="Cube 251"
            geometry={nodes["Cube 251"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-1.32, 57.49, -165.92]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name="Cube 243"
            geometry={nodes["Cube 243"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[95.72, 57.49, -17.56]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Boolean 22"
            geometry={nodes["Boolean 22"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
          >
            <mesh
              name="Sphere 24"
              geometry={nodes["Sphere 24"].geometry}
              material={materials["Sphere 24 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-152.34, -18.76, -21.86]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.83, 1, 0.83]}
            />
            <mesh
              name="Sphere4"
              geometry={nodes.Sphere4.geometry}
              material={materials["Sphere4 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[-9.02, 76.1, -17.71]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.83, 1, 0.83]}
            />
            <mesh
              name="Cube 221"
              geometry={nodes["Cube 221"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-0.8, 0, -207.76]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 232"
              geometry={nodes["Cube 232"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 70.51, -17.56]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 16"
              geometry={nodes["Cube 16"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, -1.88, -17.56]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group
          name="Group 7"
          position={[-343.2, 429.89, -363.56]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1.2, 1, 1]}
        >
          <mesh
            name="Boolean 23"
            geometry={nodes["Boolean 23"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
          >
            <mesh
              name="Cube 222"
              geometry={nodes["Cube 222"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 1.74]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 161"
              geometry={nodes["Cube 161"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group
          name="POST"
          position={[-602.21, 657.61, -138.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        >
          <mesh
            name="Text2"
            geometry={nodes.Text2.geometry}
            material={materials.line}
            castShadow
            receiveShadow
            position={[0.43, 10, 0.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Rectangle2"
            geometry={nodes.Rectangle2.geometry}
            material={materials["G-yellow"]}
            castShadow
            receiveShadow
            position={[0, -0.5, -0.01]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
        </group>
        <group
          name="Post-00"
          position={[-451.05, 605.51, -78.85]}
          rotation={[-0.2, 1.07, 0.14]}
          scale={0.17}
        >
          <group
            name="Group 13"
            position={[62.38, 102.03, 22.59]}
            rotation={[-2.88, 1.33, -0.17]}
            scale={0}
          >
            <mesh
              name="Rectangle 31"
              geometry={nodes["Rectangle 31"].geometry}
              material={materials["L-red"]}
              castShadow
              receiveShadow
              position={[8.28, -0.17, 3.52]}
              scale={[1, 0.85, 1]}
            />
            <mesh
              name="Rectangle 22"
              geometry={nodes["Rectangle 22"].geometry}
              material={materials["L-red"]}
              castShadow
              receiveShadow
              position={[-0.72, 10.09, 3.52]}
              scale={[1, 0.85, 1]}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials["L-red"]}
              castShadow
              receiveShadow
              position={[35.82, 4.69, 3.52]}
            />
            <mesh
              name="Rectangle 32"
              geometry={nodes["Rectangle 32"].geometry}
              material={materials["G-red"]}
              castShadow
              receiveShadow
              position={[23.29, 4.97, -5.52]}
            />
          </group>
          <mesh
            name="music"
            geometry={nodes.music.geometry}
            material={materials["G-red"]}
            castShadow
            receiveShadow
            position={[-168.27, 38.52, -63.97]}
            rotation={[0.32, -0.32, 2.88]}
            scale={0}
          />
          <mesh
            name="Body4"
            geometry={nodes.Body4.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-19.44, -31.2, -23.27]}
            scale={1}
          />
          <mesh
            name="Sphere 34"
            geometry={nodes["Sphere 34"].geometry}
            material={materials.eye}
            castShadow
            receiveShadow
            position={[51.11, 82.72, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere 25"
            geometry={nodes["Sphere 25"].geometry}
            material={materials.eye}
            castShadow
            receiveShadow
            position={[-112.82, 68.48, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere5"
            geometry={nodes.Sphere5.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-8.1, -165.45, -186.91]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            name="Cube 74"
            geometry={nodes["Cube 74"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[71.21, -197.72, 36.96]}
            rotation={[3.02, -0.03, -0.45]}
            scale={0.8}
          />
          <mesh
            name="Cube 64"
            geometry={nodes["Cube 64"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-101.62, -197.14, 41.89]}
            rotation={[3.02, -0.03, 0.13]}
            scale={0.8}
          />
          <mesh
            name="Cube 34"
            geometry={nodes["Cube 34"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-1.42, 210.2, -8.87]}
            rotation={[0, 0, -0.49]}
            scale={0.93}
          />
          <mesh
            name="Cube 212"
            geometry={nodes["Cube 212"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-56.12, 220.05, -8.87]}
            rotation={[0, 0, 0.44]}
            scale={0.93}
          />
        </group>
        <group
          name="Post-01"
          position={[-374.08, 537.93, -23.06]}
          rotation={[-Math.PI, 0.59, -Math.PI]}
          scale={0.1}
        >
          <mesh
            name="heart-01"
            geometry={nodes["heart-01"].geometry}
            material={materials["G-red"]}
            castShadow
            receiveShadow
            position={[-15.91, 57.23, -40.87]}
            rotation={[-Math.PI, 0.11, Math.PI]}
            scale={[2.3, 2, 2.33]}
          />
          <mesh
            name="Body5"
            geometry={nodes.Body5.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-19.44, -31.2, -23.27]}
            scale={1}
          />
          <mesh
            name="Sphere 35"
            geometry={nodes["Sphere 35"].geometry}
            material={materials["Sphere 35 Material"]}
            castShadow
            receiveShadow
            position={[51.11, 82.72, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere 26"
            geometry={nodes["Sphere 26"].geometry}
            material={materials["Sphere 26 Material"]}
            castShadow
            receiveShadow
            position={[-112.82, 68.48, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere6"
            geometry={nodes.Sphere6.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-8.1, -165.45, -186.91]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            name="Cube 75"
            geometry={nodes["Cube 75"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[71.21, -197.72, 36.96]}
            rotation={[3.02, -0.03, -0.45]}
            scale={0.8}
          />
          <mesh
            name="Cube 65"
            geometry={nodes["Cube 65"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-101.62, -197.14, 41.89]}
            rotation={[3.02, -0.03, 0.13]}
            scale={0.8}
          />
          <mesh
            name="Cube 35"
            geometry={nodes["Cube 35"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-1.42, 210.2, -8.87]}
            rotation={[0, 0, -0.49]}
            scale={0.93}
          />
          <mesh
            name="Cube 213"
            geometry={nodes["Cube 213"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-56.12, 220.05, -8.87]}
            rotation={[0, 0, 0.44]}
            scale={0.93}
          />
        </group>
        <group
          name="Post-02"
          position={[-324.07, 537.93, 9.9]}
          rotation={[-Math.PI, -0.25, -Math.PI]}
          scale={0.1}
        >
          <mesh
            name="Rectangle3"
            geometry={nodes.Rectangle3.geometry}
            material={materials["G-purple"]}
            castShadow
            receiveShadow
            position={[-17.82, 144.58, -29.74]}
            rotation={[-2.85, 0.24, 3.07]}
            scale={1}
          >
            <mesh
              name="Sphere 4"
              geometry={nodes["Sphere 4"].geometry}
              material={materials["L-purple"]}
              castShadow
              receiveShadow
              position={[11.83, 1.78, 6.47]}
              rotation={[0, 0, 0]}
              scale={[0.9, 0.9, 0.91]}
            />
            <mesh
              name="Sphere 36"
              geometry={nodes["Sphere 36"].geometry}
              material={materials["L-purple"]}
              castShadow
              receiveShadow
              position={[0.47, 1.76, 6.38]}
              rotation={[0, 0, 0]}
              scale={[0.9, 0.9, 0.91]}
            />
            <mesh
              name="Sphere 27"
              geometry={nodes["Sphere 27"].geometry}
              material={materials["L-purple"]}
              castShadow
              receiveShadow
              position={[-11.34, 1.75, 6.28]}
              rotation={[0, 0, 0]}
              scale={[0.9, 0.9, 0.91]}
            />
          </mesh>
          <mesh
            name="Body6"
            geometry={nodes.Body6.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-19.44, -31.2, -23.27]}
            scale={1}
          />
          <mesh
            name="Sphere 37"
            geometry={nodes["Sphere 37"].geometry}
            material={materials["Sphere 37 Material"]}
            castShadow
            receiveShadow
            position={[51.11, 82.72, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere 28"
            geometry={nodes["Sphere 28"].geometry}
            material={materials["Sphere 28 Material"]}
            castShadow
            receiveShadow
            position={[-112.82, 68.48, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere7"
            geometry={nodes.Sphere7.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-8.1, -165.45, -186.91]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            name="Cube 76"
            geometry={nodes["Cube 76"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[71.21, -197.72, 36.96]}
            rotation={[3.02, -0.03, -0.45]}
            scale={0.8}
          />
          <mesh
            name="Cube 66"
            geometry={nodes["Cube 66"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-101.62, -197.14, 41.89]}
            rotation={[3.02, -0.03, 0.13]}
            scale={0.8}
          />
          <mesh
            name="Cube 36"
            geometry={nodes["Cube 36"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-1.42, 210.2, -8.87]}
            rotation={[0, 0, -0.49]}
            scale={0.93}
          />
          <mesh
            name="Cube 214"
            geometry={nodes["Cube 214"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-56.12, 220.05, -8.87]}
            rotation={[0, 0, 0.44]}
            scale={0.93}
          />
        </group>
        <group
          name="Post-03"
          position={[-282.46, 537.93, -26.36]}
          rotation={[-Math.PI, -0.98, -Math.PI]}
          scale={0.1}
        >
          <mesh
            name="heart-03"
            geometry={nodes["heart-03"].geometry}
            material={materials["G-red"]}
            castShadow
            receiveShadow
            position={[-15.91, 57.23, -40.87]}
            rotation={[-Math.PI, 0.11, Math.PI]}
            scale={[2.3, 2, 2.33]}
          />
          <mesh
            name="Body7"
            geometry={nodes.Body7.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-19.44, -31.2, -23.27]}
            scale={1}
          />
          <mesh
            name="Sphere 38"
            geometry={nodes["Sphere 38"].geometry}
            material={materials["Sphere 38 Material"]}
            castShadow
            receiveShadow
            position={[51.11, 82.72, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere 29"
            geometry={nodes["Sphere 29"].geometry}
            material={materials["Sphere 29 Material"]}
            castShadow
            receiveShadow
            position={[-112.82, 68.48, 117.21]}
            rotation={[0, 0, 0.09]}
          />
          <mesh
            name="Sphere8"
            geometry={nodes.Sphere8.geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-8.1, -165.45, -186.91]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            name="Cube 77"
            geometry={nodes["Cube 77"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[71.21, -197.72, 36.96]}
            rotation={[3.02, -0.03, -0.45]}
            scale={0.8}
          />
          <mesh
            name="Cube 67"
            geometry={nodes["Cube 67"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-101.62, -197.14, 41.89]}
            rotation={[3.02, -0.03, 0.13]}
            scale={0.8}
          />
          <mesh
            name="Cube 37"
            geometry={nodes["Cube 37"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-1.42, 210.2, -8.87]}
            rotation={[0, 0, -0.49]}
            scale={0.93}
          />
          <mesh
            name="Cube 215"
            geometry={nodes["Cube 215"].geometry}
            material={materials.body}
            castShadow
            receiveShadow
            position={[-56.12, 220.05, -8.87]}
            rotation={[0, 0, 0.44]}
            scale={0.93}
          />
        </group>
        <group
          name="Group 4"
          position={[-343.2, 429.89, -81]}
          scale={[1.2, 1, 1.12]}
        >
          <group
            name="table-2"
            position={[-93.64, 109.81, 0.23]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.15, 0.17, 0.13]}
          >
            <mesh
              name="Merged Geometry"
              geometry={nodes["Merged Geometry"].geometry}
              material={materials["Untitled Material2222"]}
              castShadow
              receiveShadow
              position={[0.52, -20.48, -3.67]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[6.38, 5.96, 5.96]}
            />
            <mesh
              name="Cube 5"
              geometry={nodes["Cube 5"].geometry}
              material={materials["yellow-light-2"]}
              castShadow
              receiveShadow
              position={[0, 131.01, -3.46]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
          </group>
          <group
            name="video-ui"
            position={[73.81, 178, -52.2]}
            scale={[0.2, 0.24, 0.21]}
          >
            <mesh
              name="Rectangle 7"
              geometry={nodes["Rectangle 7"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-17.34, -156.4, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 6"
              geometry={nodes["Rectangle 6"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-81.37, -111.26, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 5"
              geometry={nodes["Rectangle 5"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-54.41, -63.9, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 33"
              geometry={nodes["Rectangle 33"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-55.01, 90.21, 0.09]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 23"
              geometry={nodes["Rectangle 23"].geometry}
              material={materials["G-orange"]}
              castShadow
              receiveShadow
              position={[0, 0, -15.35]}
            />
          </group>
          <group
            name="video-ui1"
            position={[9.35, 220, -38.8]}
            scale={[0.3, 0.36, 0.32]}
          >
            <mesh
              name="Rectangle 71"
              geometry={nodes["Rectangle 71"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-17.34, -156.4, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 61"
              geometry={nodes["Rectangle 61"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-81.37, -111.26, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 51"
              geometry={nodes["Rectangle 51"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-54.41, -63.9, 1.42]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 34"
              geometry={nodes["Rectangle 34"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-0.08, 90.21, 0.09]}
              rotation={[0, 0, 0]}
              scale={[0.96, 1, 1]}
            />
            <mesh
              name="Rectangle 24"
              geometry={nodes["Rectangle 24"].geometry}
              material={materials["G-orange"]}
              castShadow
              receiveShadow
              position={[0, 0, -15.53]}
            />
          </group>
          <mesh
            name="Cube 244"
            geometry={nodes["Cube 244"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-153.53, 0, 114.99]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Boolean 24"
            geometry={nodes["Boolean 24"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
          >
            <mesh
              name="Cube 245"
              geometry={nodes["Cube 245"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[29.98, 0, 114.99]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 233"
              geometry={nodes["Cube 233"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-7.17, 9.23, 114.99]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 223"
              geometry={nodes["Cube 223"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-190.35, 0, 1.74]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 162"
              geometry={nodes["Cube 162"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group
          name="Group 6"
          position={[-18.2, 431.74, -337.5]}
          scale={[1, 1.3, 1]}
        >
          <mesh
            name="Cube 271"
            geometry={nodes["Cube 271"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-115, 49.18, 234.87]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.77, 1, 1]}
          />
          <mesh
            name="Cube 252"
            geometry={nodes["Cube 252"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-109.37, 38.37, 234.87]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.77, 1, 1]}
          />
          <mesh
            name="Cube 262"
            geometry={nodes["Cube 262"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[5.62, 51.22, 98.51]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[0.77, 1, 1]}
          />
          <mesh
            name="Cube 216"
            geometry={nodes["Cube 216"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[5.62, 39.77, 115.89]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={[0.77, 1, 1]}
          />
          <mesh
            name="Cube 246"
            geometry={nodes["Cube 246"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-43.27, -58.36, 107.61]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Boolean 25"
            geometry={nodes["Boolean 25"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[0, 0, -30.89]}
            scale={[1, 1, 1.31]}
          >
            <mesh
              name="Cube 224"
              geometry={nodes["Cube 224"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[2, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 15"
              geometry={nodes["Cube 15"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group name="Group 3" position={[-18.2, 412.5, -139.07]}>
          <mesh
            name="Cube 247"
            geometry={nodes["Cube 247"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
            position={[-43.27, -58.36, 107.61]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1}
          />
          <mesh
            name="Boolean 26"
            geometry={nodes["Boolean 26"].geometry}
            material={materials.Blue}
            castShadow
            receiveShadow
          >
            <mesh
              name="Cube 234"
              geometry={nodes["Cube 234"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-42.4, 0, 89.11]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.19]}
            />
            <mesh
              name="Cube 225"
              geometry={nodes["Cube 225"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[2, 0, -23.52]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cube 151"
              geometry={nodes["Cube 151"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            />
          </mesh>
        </group>
        <group name="Group" position={[-343.2, 225, -36.91]}>
          <mesh
            name="Cube 226"
            geometry={nodes["Cube 226"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[-176.66, -0.29, 248.75]}
          />
          <mesh
            name="Boolean 3"
            geometry={nodes["Boolean 3"].geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[0, 0, 255.86]}
            scale={[1, 1, 1.42]}
          >
            <mesh
              name="Cube 235"
              geometry={nodes["Cube 235"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[58.82, 19.88, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name="Cube 227"
              geometry={nodes["Cube 227"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[-129.08, -0.35, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name="Cube 14"
              geometry={nodes["Cube 14"].geometry}
              material={materials.line}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, -254.11]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
          </mesh>
        </group>
        <group
          name="Group 5"
          position={[106.8, 225, -241.31]}
          scale={[1, 1, 1.21]}
        >
          <group
            name="picture 3"
            position={[-233.34, -1.72, -113.46]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.25, 0.3, 0.3]}
          >
            <mesh
              name="Rectangle 25"
              geometry={nodes["Rectangle 25"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-0.21, 0.99, 8.15]}
            />
            <mesh
              name="Triangle"
              geometry={nodes.Triangle.geometry}
              material={materials["G-red"]}
              castShadow
              receiveShadow
              position={[12.57, -34.06, 10.05]}
              rotation={[0, 0, -Math.PI / 9]}
              scale={1.06}
            />
            <mesh
              name="Rectangle 26"
              geometry={nodes["Rectangle 26"].geometry}
              material={materials["blue-b-1"]}
              castShadow
              receiveShadow
              position={[1.27, 24.12, 9.08]}
              rotation={[0, 0, 0.87]}
              scale={1}
            />
            <mesh
              name="Ellipse2"
              geometry={nodes.Ellipse2.geometry}
              material={materials["G-orange"]}
              castShadow
              receiveShadow
              position={[-11.67, 28.21, 9.51]}
            />
            <mesh
              name="Cube 217"
              geometry={nodes["Cube 217"].geometry}
              material={materials.Wood}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
          </group>
          <group
            name="picture 2"
            position={[-233.34, -1.72, -25.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.25, 0.3, 0.3]}
          >
            <mesh
              name="Rectangle 27"
              geometry={nodes["Rectangle 27"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-0.21, 0.99, 8.15]}
            />
            <mesh
              name="Triangle1"
              geometry={nodes.Triangle1.geometry}
              material={materials["G-orange"]}
              castShadow
              receiveShadow
              position={[12.57, -34.06, 10.05]}
              rotation={[0, 0, -Math.PI / 9]}
              scale={1.06}
            />
            <mesh
              name="Rectangle 28"
              geometry={nodes["Rectangle 28"].geometry}
              material={materials["G-red"]}
              castShadow
              receiveShadow
              position={[1.27, 24.12, 9.08]}
              rotation={[0, 0, 0.87]}
              scale={1}
            />
            <mesh
              name="Ellipse3"
              geometry={nodes.Ellipse3.geometry}
              material={materials["blue-b-1"]}
              castShadow
              receiveShadow
              position={[-11.67, 28.21, 9.51]}
            />
            <mesh
              name="Cube 218"
              geometry={nodes["Cube 218"].geometry}
              material={materials.Wood}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
          </group>
          <group
            name="picture"
            position={[-233.34, -1.72, 67.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.25, 0.3, 0.3]}
          >
            <mesh
              name="Rectangle 29"
              geometry={nodes["Rectangle 29"].geometry}
              material={materials["L-orange"]}
              castShadow
              receiveShadow
              position={[-0.21, 0.99, 8.15]}
            />
            <mesh
              name="Triangle2"
              geometry={nodes.Triangle2.geometry}
              material={materials["blue-b-1"]}
              castShadow
              receiveShadow
              position={[12.57, -34.06, 10.05]}
              rotation={[0, 0, -Math.PI / 9]}
              scale={1.06}
            />
            <mesh
              name="Rectangle 210"
              geometry={nodes["Rectangle 210"].geometry}
              material={materials["G-orange"]}
              castShadow
              receiveShadow
              position={[1.27, 24.12, 9.08]}
              rotation={[0, 0, 0.87]}
              scale={1}
            />
            <mesh
              name="Ellipse4"
              geometry={nodes.Ellipse4.geometry}
              material={materials["G-red"]}
              castShadow
              receiveShadow
              position={[-11.67, 28.21, 9.51]}
            />
            <mesh
              name="Cube 219"
              geometry={nodes["Cube 219"].geometry}
              material={materials.Wood}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
          </group>
          <mesh
            name="Boolean1"
            geometry={nodes.Boolean1.geometry}
            material={materials.blue}
            castShadow
            receiveShadow
            position={[0, -1.72, -7.25]}
            scale={[1, 0.99, 1.04]}
          >
            <mesh
              name="Cube 11"
              geometry={nodes["Cube 11"].geometry}
              material={materials.blue}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, 6.74]}
            />
            <mesh
              name="Cube 10"
              geometry={nodes["Cube 10"].geometry}
              material={materials.blue}
              visible={false}
              castShadow
              receiveShadow
            />
          </mesh>
        </group>
        <mesh
          name="Cube 9"
          geometry={nodes["Cube 9"].geometry}
          material={materials["Untitled Material2222"]}
          castShadow
          receiveShadow
          position={[-21.6, 87.21, -35.19]}
        />
        <mesh
          name="Cube 2110"
          geometry={nodes["Cube 2110"].geometry}
          material={materials.blue}
          castShadow
          receiveShadow
          position={[-77.5, -323.49, -1186.97]}
          scale={[1, 1, 0.67]}
        />
        <mesh
          name="Cube 201"
          geometry={nodes["Cube 201"].geometry}
          material={materials.blue}
          castShadow
          receiveShadow
          position={[673.5, -128.34, -585.97]}
          scale={1}
        />
        <mesh
          name="Cube 228"
          geometry={nodes["Cube 228"].geometry}
          material={materials.blue}
          castShadow
          receiveShadow
          position={[-1303.68, -443.34, -230.23]}
        />
        <mesh
          name="Cube 12"
          geometry={nodes["Cube 12"].geometry}
          material={materials.blue}
          castShadow
          receiveShadow
          position={[-1067.19, -175.74, 8.09]}
          scale={[1.25, 1, 1]}
        />
        <mesh
          name="Cube 17"
          geometry={nodes["Cube 17"].geometry}
          material={materials.Blue}
          castShadow
          receiveShadow
          position={[0, -425, 0]}
        />
      </group>
    </>
  );
}
