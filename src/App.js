import { useState } from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Experience } from './avatar/Experience';
import Home from './content/Home';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started && (
        <div className="overlay">
          <button className="start-button" onClick={() => setStarted(true)}>
            Click to view my portfolio
          </button>
        </div>
      )}

      {started && (
        <div className="main-container"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/textures/images.jpg)`}}>
          <div className="home-section">
            <Home />
          </div>
          <div className="canvas-section">
            <Canvas shadows camera={{ position: [0, 2.5, 8], fov: 60 }}>
              <Experience />
            </Canvas>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
