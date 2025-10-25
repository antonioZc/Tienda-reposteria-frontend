import Product from "../components/Product/ProductCard";

export default function Store() {
  return (
    <div className="container">
      <h1>Productos Más Vendidos</h1>
      <section className="mostSold">
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
}
