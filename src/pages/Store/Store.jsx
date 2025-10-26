import { useRef, useState } from "react";
import Product from "../../components/Product/ProductCard"; // tu componente de producto
import "./store.css";
import { Link } from "react-router-dom";

export default function Store() {
  const [catActive, setCatActive] = useState(true);
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add("active"); // opcional para estilo
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
    const walk = (x - startX) * 2; // velocidad del arrastre
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
        <Link to={"/productDetails/1"}>
          <Product />
        </Link>

        <Product />
        <Product />
        <Product />
        <Product />
      </section>

      <p className="nota">
        * <span>Nota</span>: el pedido debe realizarse con un minimo de dos dias
        de antelacion. Envios solo dentro de la provincia de A coruña
      </p>

      <section className="products">
        <h1>Explora Nuestras Creaciones</h1>
        <form className="products__form">
          <label htmlFor="search" className="products__label">
            <img src="src\assets\icons\search.svg" alt="search-icon" />
          </label>
          <input
            type="text"
            placeholder="EJ: Ret Velvet"
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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}
