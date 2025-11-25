import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // useState
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Categorias from './pages/Categorias';
import CategoriaEspecifica from './pages/CategoriaEspecifica';
import Footer from './components/Footer';
import './styles/stylesPP.css';
import './styles/stylesC.css';
import './styles/stylesE.css';
import './styles/desktop.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app">
        {/* Pasar estado y funcion al Navbar */}
        <Navbar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <Routes>
          {/* Pasar searchTerm al Catalogo */}
          <Route path="/" element={<Catalogo searchTerm={searchTerm} onSearchChange={setSearchTerm} />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoria/:nombreCategoria" element={<CategoriaEspecifica />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
