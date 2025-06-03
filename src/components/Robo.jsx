import { useRef, useGLTF, gsap, useGSAP } from "../imports";

const Robo = (props) => {
  const { nodes, materials } = useGLTF('/models/robo.glb');
  const roboRef = useRef();

  useGSAP(() => {
    gsap.to(roboRef.current.rotation, {
      y: "+=6.283",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <group ref={roboRef} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} >
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.material_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.material_2} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.m7_ref} />
      </group>
    </group>
  );
};

useGLTF.preload('/models/robo.glb');
export default Robo;