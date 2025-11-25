import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/stylesPP.css';

const Catalogo = ({ searchTerm, onSearchChange }) => {
  // Datos hardcoded de productos
  const [productos] = useState([
    {
      id: 1,
      nombre: "Chimichurri",
      precio: "150.00",
      imagen: "/Imagenes/Chimichurri.png",
      alt: "Chimichurri",
      categoria: "Alimentos"
    },
    {
      id: 2,
      nombre: "Cavazos",
      precio: "80.00",
      imagen: "/Imagenes/Cavazos.png",
      alt: "Cavazos",
      categoria: "Alimentos"
    },
    {
      id: 3,
      nombre: "Doña Matcha",
      precio: "180.00",
      imagen: "/Imagenes/Dona Macha.png",
      alt: "Doña Matcha",
      categoria: "Alimentos"
    },
    {
      id: 4,
      nombre: "Miel",
      precio: "60.00",
      imagen: "/Imagenes/Miel.png",
      alt: "Miel",
      categoria: "Alimentos"
    },
    {
      id: 5,
      nombre: "Calabaza",
      precio: "200.00",
      imagen: "/Imagenes/Calabaza.png",
      alt: "Calabaza",
      categoria: "Artesanias"
    },
    {
      id: 6,
      nombre: "Salsa Verde",
      precio: "100.00",
      imagen: "/Imagenes/Salsa Verde.png",
      alt: "Salsa Verde",
      categoria: "Alimentos"
    },
    {
    id: 7,
    nombre: "Servicio 1",
    precio: "500.00",
    imagen: "/Imagenes/Dona Macha.png",
    alt: "Servicio 1",
    categoria: "Servicios"
  },
  {
    id: 8,
    nombre: "Servicio 2",
    precio: "1200.00",
    imagen: "/Imagenes/Cavazos.png",
    alt: "Servicio 2",
    categoria: "Servicios"
  },
  {
    id: 9,
    nombre: "Servicio 3",
    precio: "150.00",
    imagen: "/Imagenes/Miel.png",
    alt: "Servicio 3",
    categoria: "Servicios"
  }
  ]);

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorias = ["Artesanias", "Alimentos", "Servicios"];

  return (
    <main>
      {/* Categorias */}
      <section className="contenedor seccion">
        <header className="cabecera-seccion">
          <h2>Categorias</h2>
        </header>

        <nav className="categorias" aria-label="Categorias">
          {categorias.map((categoria, index) => (
            <button 
              key={index} 
              className="etiqueta" 
              type="button"
              onClick={() => onSearchChange(categoria)}
            >
              {categoria}
            </button>
          ))}
        </nav>
      </section>

      {/* Destacados */}
      <section className="contenedor seccion">
        <header className="cabecera-seccion">
          <h2>
            {searchTerm ? `Resultados para: "${searchTerm}"` : 'Destacados'}
            {searchTerm && (
              <button 
                onClick={() => onSearchChange('')}
                style={{
                  marginLeft: '10px',
                  background: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                ✕ Limpiar
              </button>
            )}
          </h2>
        </header>

        <div className="tarjetas">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                alt={producto.alt}
              />
            ))
          ) : (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              padding: '40px',
              color: '#666'
            }}>
              <p>No se encontraron productos para "{searchTerm}"</p>
              <button 
                onClick={() => onSearchChange('')}
                style={{
                  background: '#e67e22',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
        
        {/* Contador de resultados */}
        {searchTerm && (
          <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
            {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
          </p>
        )}
      </section>
    </main>
  );
};

export default Catalogo;
