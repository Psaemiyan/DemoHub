import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import Scene from './components/Scene.jsx'
import './App.css'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render( <>
  <Canvas>
    <Scene />
  </Canvas>

  <div className="app">
    <App />
  </div>
  
</>)