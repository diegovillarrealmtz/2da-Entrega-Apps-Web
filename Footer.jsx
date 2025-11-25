import '../styles/stylesPP.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor footer-contenido">
        <p className="footer-titulo">Footer</p>
        <nav aria-label="Redes Sociales" className="redes">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="X / Twitter">Twitter</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;