import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render( <>
  <Canvas>
    <Scene />
  </Canvas>

  <Navbar />

  <div className="app">
    <ProductInfo />
  </div>
  
</>)