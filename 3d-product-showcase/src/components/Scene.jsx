import { useGLTF } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Scene() {
    const model = useGLTF('./model.gltf')
    const modelRef = useRef()

    useFrame((state, delta) => {
        modelRef.current.rotation.y += delta * 0.2
    })
    return <>

        <OrbitControls 
            enableZoom={false} // Disable zoom
            enablePan={false}  // Optional: Disable panning
            maxPolarAngle={Math.PI / 2} // Optional: Restrict vertical rotation
            minPolarAngle={0}
        />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } shadow-normalBias = {0.04} />
        <ambientLight intensity={ 1.5 } />

        <primitive 
            object={model.scene}
            ref={modelRef}
            position={[0, -1.5, 0]}
        />
    </>
}