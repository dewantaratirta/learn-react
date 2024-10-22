import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useLayoutEffect, useRef } from 'react'
import { useControls } from 'leva'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Model = (props) => {
  const { nodes, materials } = useGLTF('/assets/test-coin.glb')
  const { viewport } = useThree()
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y -= 0.02
  });

  const materialPropsDefault = {
    thickness: 1,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    chromaticAberration: 0.62,
    backside: true
  }

  return (
    <>
      <Text scale={[viewport.width / 16, viewport.width / 16, viewport.width / 16]} position={[0, 0, -0.2]}>
        The first Meme Coin
      </Text>
      <group {...props} dispose={null} scale={[viewport.width / 16, viewport.width / 16, viewport.width / 16]}>
        <group rotation={[-3.141, 0.016, 3.126]} ref={group}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 10]}>
              <mesh castShadow receiveShadow geometry={nodes.Coin_Gold_0.geometry}>
                <MeshTransmissionMaterial {...materialPropsDefault} />
              </mesh>
              <mesh castShadow receiveShadow geometry={nodes.Coin_SmothGold_0.geometry}>
                <MeshTransmissionMaterial {...materialPropsDefault} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </>
  )
}

export default Model
