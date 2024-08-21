import './App.css'
import {Canvas} from "@react-three/fiber";
import {Scene} from "./components/Scene.jsx";

const creatingCanvasHandler = (state) => {
    state.gl.setClearColor("dark gray", 1.0)
}

function App() {
    return (
        <Canvas
            gl={{
                antialias: true,
                alpha: true,
            }}
            //orthographic
            camera={{
                fov: 75,
                near: 0.1,
                far: 100,
                position: [2, 2, 5]
            }}
            onCreated={creatingCanvasHandler}
        >
            <Scene />
        </Canvas>
    )
}

export default App
