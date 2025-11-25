import { Link } from 'react-router-dom';
import '../styles/stylesPP.css';

const Navbar = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="encabezado">
      <div className="contenedor barra-encabezado">
        <Link to="/" className="logo" aria-label="Inicio">
          <img src="/Imagenes/logo-bg.svg" alt="Hecho en Nuevo Leon" className="logo-img" />
        </Link>
        <h1 className="titulo-sitio">Hecho En NL</h1>
      </div>

      <nav className="nav-principal">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/categorias" className="nav-link">Categorías</Link>
      </nav>

      <nav className="contenedor buscador" aria-label="Buscador">
        <div className="caja-buscar" role="search">
          <input 
            id="q" 
            name="q" 
            type="search" 
            placeholder="Buscar productos o servicios" 
            value={searchTerm}  
            onChange={(e) => onSearchChange(e.target.value)}  
          />
          <button className="btn-buscar" type="button" aria-label="Buscar">
            <img src="/Imagenes/icons8-search.svg" alt="Buscar" className="icono-buscar" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
