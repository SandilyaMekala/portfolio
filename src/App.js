import './App.css';
import { Canvas } from "@react-three/fiber";
import { Experience } from './avatar/Experience';
import Home from './content/Home';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: `url(${process.env.PUBLIC_URL}/textures/images.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        style={{
          width: '65vw',
          height: '100vh',
          padding: '2rem',
          overflowY: 'auto',
        }}
      >
        <Home />
      </div>
      <div
        style={{
          width: '35vw',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Canvas shadows camera={{ position: [0, 2.5, 8], fov: 60 }}>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
