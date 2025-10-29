import CartItem from "../../components/cartItem/CartItem";
import "./cart.css";
export default function Cart() {
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
          <CartItem />
        </div>
        <div className="cart__review">
          <p className="cart__total">
            Total Carrito: <span>76€</span>
          </p>
          <div className="cart__btns">
            <button className="cart__btn cart__btn--empty ">
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
