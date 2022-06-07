import {
  BrowserRouter as Router,
  Routes,
  Route
  
}from 'react-router-dom';
import Canales from './Pages/Canales';
import Espacio from './Pages/Espacio';
import Home from './Pages/Home';
import Tienda from './Pages/Tienda';
import Video from './Pages/Video';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/canales" element={<Canales/>}/>
        <Route path="/espacio" element={<Espacio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
