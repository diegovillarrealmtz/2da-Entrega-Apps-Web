import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/stylesC.css';

const CategoriaEspecifica = () => {
  const { nombreCategoria } = useParams();

  // normalizamos el nombre de la categoría para que funcione con
  // /categorias/Alimentos, /categorias/alimentos, etc.
  const categoriaKey = (nombreCategoria || '').toLowerCase();

  const productosPorCategoria = {
    artesanias: [
      {
        id: 1,
        nombre: 'Mermelada artesanal Calabaza & Nuez',
        precio: 120, // del PDF
        imagen: '/Imagenes/Calabaza.png',
        alt: 'Mermelada artesanal de calabaza y nuez',
      },
      {
        id: 2,
        nombre: 'Miel de abeja artesanal (La Monita)',
        precio: 180, // del PDF
        imagen: '/Imagenes/Miel.png',
        alt: 'Miel de abeja artesanal La Monita',
      },
      {
        id: 3,
        nombre: 'Cacao garapiñado Olartesanal',
        precio: 50, // del PDF
        imagen: '/Imagenes/Chimichurri.png', // usamos foto de producto como placeholder
        alt: 'Cacao garapiñado Olartesanal',
      },
      {
        id: 4,
        nombre: 'Glorias Dulces Finos Victoria',
        precio: 130, // del PDF
        imagen: '/Imagenes/Dona Macha.png', // placeholder
        alt: 'Glorias Dulces Finos Victoria',
      },
    ],

    alimentos: [
      {
        id: 5,
        nombre: 'Chimichurri Somos Sabores',
        precio: 65, // del PDF
        imagen: '/Imagenes/Chimichurri.png',
        alt: 'Chimichurri Somos Sabores',
      },
      {
        id: 6,
        nombre: 'Salsa Verde Cremosa La Compita',
        precio: 55, // del PDF
        imagen: '/Imagenes/Salsa Verde.png',
        alt: 'Salsa verde cremosa La Compita',
      },
      {
        id: 7,
        nombre: 'Salsa Cambray Los Cavazos',
        precio: 60, // del PDF
        imagen: '/Imagenes/Cavazos.png',
        alt: 'Salsa Cambray Los Cavazos',
      },
      {
        id: 8,
        nombre: 'Miel Abellamia',
        precio: 79, // del PDF
        imagen: '/Imagenes/Miel.png',
        alt: 'Miel Abellamia',
      },
    ],

    servicios: [
      {
        id: 9,
        nombre: 'Servicio de envío ILV local (área metropolitana)',
        precio: 150,
        imagen: '/Imagenes/Calabaza.png', // solo para ilustrar
        alt: 'Servicio de envío ILV local',
      },
      {
        id: 10,
        nombre: 'Servicio de envío ILV foráneo (noreste)',
        precio: 250,
        imagen: '/Imagenes/Cavazos.png',
        alt: 'Servicio de envío ILV foráneo',
      },
      {
        id: 11,
        nombre: 'Servicio de armado de canasta personalizada',
        precio: 300,
        imagen: '/Imagenes/Miel.png',
        alt: 'Servicio de armado de canasta',
      },
      {
        id: 12,
        nombre: 'Servicio corporativo ILV para empresas',
        precio: 500,
        imagen: '/Imagenes/Chimichurri.png',
        alt: 'Servicio corporativo ILV',
      },
    ],
  };

  const productos = productosPorCategoria[categoriaKey] || [];

  return (
    <>
      <div className="subheader">
        <div className="contenedor">
          <Link to="/categorias" className="btn-volver" aria-label="Volver">
            ←
          </Link>
          <h2 className="titulo-pagina">
            Categoría: {nombreCategoria}
          </h2>
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
