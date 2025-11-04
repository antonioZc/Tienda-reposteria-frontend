import { useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { useCartStore } from "../../store/cartStore";
import "./cart.css";
import { formatCurrency } from "../../helpers";
export default function Cart() {
  const { cart, totalCart, calcTotal, clearCart } = useCartStore();
  useEffect(() => {
    calcTotal();
  }, [cart]);
  return (
    <main className="main container">
      <h1 className="cart__title">
        Tu carrito{" "}
        <img src="\src\assets\img\borde-corazon.svg" alt="borde-corazon" />
      </h1>
      <div className="cart container">
        <div className="cart__container">
          <div className="cart__header">
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Total</p>
          </div>

          {cart.map((item) => (
            <CartItem
              key={`${item.id}-${item.size}-${item.color}`}
              item={item}
            />
          ))}
        </div>
        <div className="cart__review">
          <p className="cart__total">
            Total Carrito: <span>{formatCurrency(totalCart)}</span>
          </p>
          <div className="cart__btns">
            <button
              className="cart__btn cart__btn--empty "
              onClick={() => clearCart()}
            >
              VACIAR CARRITO
            </button>
            <button className="cart__btn cart__btn--end ">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
