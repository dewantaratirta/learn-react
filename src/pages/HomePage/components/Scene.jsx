import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

export const Scene = () => {
  return <Canvas>
    <directionalLight position={[0, 3, 2]} intensity={3} />
    <Environment preset='city' />
    <Model />
  </Canvas>
}

export default Scene
