import { useEffect, useRef, useState } from "react";
import Product from "../../components/Product/ProductCard";
import "./store.css";
import { Link } from "react-router-dom";

export default function Store() {
  const [productos, setProductos] = useState([]);
  const [catActive] = useState(true);
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Función para obtener productos
  const getProducts = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/products");
      const products = await data.json();
      setProductos(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // useEffect para cargar productos al montar el componente
  useEffect(() => {
    getProducts();
  }, []);

  // Eventos del carrusel
  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add("active");
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    carouselRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="store__container container">
      <h1>Productos Más Vendidos</h1>

      <section
        ref={carouselRef}
        className="mostSold"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {productos.length > 0 ? (
          productos.map((product) => (
            <Link to={`/productDetails/${product.idProducto}`}>
              <Product key={product.id} product={product} />
            </Link>
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </section>

      <p className="nota">
        * <span>Nota</span>: el pedido debe realizarse con un mínimo de dos días
        de antelación. Envíos solo dentro de la provincia de A Coruña.
      </p>

      <section className="products">
        <h1>Explora Nuestras Creaciones</h1>
        <form className="products__form">
          <label htmlFor="search" className="products__label">
            <img src="src/assets/icons/search.svg" alt="search-icon" />
          </label>
          <input
            type="text"
            placeholder="EJ: Red Velvet"
            className="products__input"
          />
          <button className="btn">Buscar</button>
        </form>

        <div className="categorias">
          <button className={`btn ${catActive ? "btn--active" : ""}`}>
            Todos
          </button>
          <button className="btn">Tartas</button>
          <button className="btn">Cupcakes</button>
          <button className="btn">Galletas</button>
        </div>

        <div className="products__grid">
          {productos.length > 0 ? (
            productos.map((product) => (
              <Link to={`/productDetails/${product.idProducto}`}>
                <Product key={product.id} product={product} />
              </Link>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </section>
    </div>
  );
}
