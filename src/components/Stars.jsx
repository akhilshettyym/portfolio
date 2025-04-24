import { useRef, useGLTF, useAnimations } from "../imports"

const Stars = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/stars.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="c0d234900f694cb2b1f4f457c9f91791fbx" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="StarCluster3" scale={100}>
                  <group name="Object_5" position={[-0.703, 0, 0]}>
                    <mesh
                      name="StarCluster3_03_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['StarCluster3_03_-__0'].geometry}
                      material={materials['03_-_']}
                    />
                  </group>
                </group>
                <group name="StarCluster2" scale={49.606}>
                  <group name="Object_8" position={[-1.549, 0, 0]}>
                    <mesh
                      name="StarCluster2_02_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['StarCluster2_02_-__0'].geometry}
                      material={materials['02_-_']}
                    />
                  </group>
                </group>
                <group name="StarCluster1" scale={24.803}>
                  <group name="Object_11" position={[-1.993, 0, 0]}>
                    <mesh
                      name="StarCluster1_01_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['StarCluster1_01_-__0'].geometry}
                      material={materials['01_-_']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/stars.glb')

export default Stars;