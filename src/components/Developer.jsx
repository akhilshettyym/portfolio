// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// const Developer = (props) => {
//   const { nodes, materials } = useGLTF('/models/developer.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <lineSegments geometry={nodes.Object_2.geometry} material={materials.Hand} />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_3.geometry}
//           material={materials['Material.008']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials['Material.008']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_5.geometry}
//           material={materials['Tors.003']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials.Hand}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_7.geometry}
//           material={materials.Hand}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials.Hand}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_9.geometry}
//           material={materials.Legs}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_10.geometry}
//           material={materials.Legs}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_11.geometry}
//           material={materials.Legs}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_12.geometry}
//           material={materials.Tors}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_13.geometry}
//           material={materials.Tors}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_14.geometry}
//           material={materials['Tors.002']}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/models/developer.glb')

// export default Developer;

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Developer = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/developer.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e2e044d7214743d2900b767fd67712c1fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="boss5_gunR_controlgun001" position={[-42.795, 75.887, -0.066]} />
                <group name="boss5_gunL_controlgun001" position={[42.795, 75.887, -0.066]} />
                <group name="boss5_body001" />
                <group name="boss5" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_8">
                    <group name="Object_9" position={[-42.795, 75.887, -0.066]} />
                    <group name="Object_11" position={[42.795, 75.887, -0.066]} />
                    <group name="Object_13" />
                    <primitive object={nodes.spine1_00} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_10"
            geometry={nodes.Object_10.geometry}
            material={materials.boss5}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            name="Object_12"
            geometry={nodes.Object_12.geometry}
            material={materials.boss5}
            skeleton={nodes.Object_12.skeleton}
          />
          <skinnedMesh
            name="Object_14"
            geometry={nodes.Object_14.geometry}
            material={materials.boss5}
            skeleton={nodes.Object_14.skeleton}
          />
          <skinnedMesh
            name="Object_15"
            geometry={nodes.Object_15.geometry}
            material={materials.screen}
            skeleton={nodes.Object_15.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/developer.glb')

export default Developer;