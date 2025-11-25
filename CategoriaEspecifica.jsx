 import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/stylesC.css';

const CategoriaEspecifica = () => {
  const { nombreCategoria } = useParams();

  const productosPorCategoria = {
  "artesanias": [
    { 
      id: 1, 
      nombre: "Chimichurri", 
      precio: "120.00", 
      imagen: "/Imagenes/Chimichurri.png",
      alt: "Chimichurri" 
    },
    {
      id: 2,
      nombre: "Cavazos",
      precio: 150,
      imagen: "/Imagenes/Cavazos.png",
      alt: "Salsa Cavazos"
    },
    {
      id: 3,
      nombre: "Doña Macha",
      precio: 180,
      imagen: "/Imagenes/Dona Macha.png",
      alt: "Doña Macha"
    },
    {
      id: 4,
      nombre: "Calabaza",
      precio: 90,
      imagen: "/Imagenes/Calabaza.png",
      alt: "Calabaza"
    }
  ],

  "alimentos": [
    {
      id: 5,
      nombre: "Miel",
      precio: 95,
      imagen: "/Imagenes/Miel.png",
      alt: "Miel de abeja"
    },
    {
      id: 6,
      nombre: "Salsa Verde",
      precio: 70,
      imagen: "/Imagenes/Salsa Verde.png",
      alt: "Salsa verde"
    },
    {
      id: 7,
      nombre: "Chimichurri",
      precio: 120,
      imagen: "/Imagenes/Chimichurri.png",
      alt: "Chimichurri"
    },
    {
      id: 8,
      nombre: "Cavazos",
      precio: 150,
      imagen: "/Imagenes/Cavazos.png",
      alt: "Cavazos"
    }
  ],

  "servicios": [
    {
      id: 9,
      nombre: "Servicio 1",
      precio: 300,
      imagen: "/Imagenes/Dona Macha.png",
      alt: "Servicio"
    },
    {
      id: 10,
      nombre: "Servicio 2",
      precio: 450,
      imagen: "/Imagenes/Calabaza.png",
      alt: "Servicio"
    },
    {
      id: 11,
      nombre: "Servicio 3",
      precio: 500,
      imagen: "/Imagenes/Miel.png",
      alt: "Servicio"
    },
    {
      id: 12,
      nombre: "Servicio 4",
      precio: 650,
      imagen: "/Imagenes/Salsa Verde.png",
      alt: "Servicio"
    }
  ]
};

  const productos = productosPorCategoria[nombreCategoria] || [];

  return (
    <>
      <div className="subheader">
        <div className="contenedor">
          <Link to="/categorias" className="btn-volver" aria-label="Volver">←</Link>
          <h2 className="titulo-pagina">Categoría: {nombreCategoria}</h2>
        </div>
      </div>

      <main className="contenedor seccion">
        <div className="tarjetas">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              alt={producto.alt}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default CategoriaEspecifica;
