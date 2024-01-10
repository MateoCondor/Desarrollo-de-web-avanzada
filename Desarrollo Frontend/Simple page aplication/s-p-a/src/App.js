import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="contacto" element={<Contacto/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
