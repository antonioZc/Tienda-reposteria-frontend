import "./productCard.css";
import { formatCurrency } from "../../helpers";
export default function Product({ product }) {
  const precioMostrar = parseFloat(product.precio.split(",")[0]);
  return (
    <button className="item">
      <img src={product.imgUrl} alt="tarta" />
      <h3>{product.nombre}</h3>
      <p>{formatCurrency(precioMostrar)}</p>
    </button>
  );
}
