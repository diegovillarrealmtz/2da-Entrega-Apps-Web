import '../styles/stylesPP.css';

const ProductCard = ({ nombre, precio, imagen, alt }) => {
  return (
    <article className="tarjeta">
      <div className="tarjeta-imagen">
        <img src={imagen} alt={alt} className="imagen-tarjeta" />
      </div>
      <div className="tarjeta-cuerpo">
        <h3 className="tarjeta-titulo">{nombre}</h3>
        <p className="tarjeta-precio">${precio}</p>
      </div>
    </article>
  );
};

export default ProductCard;