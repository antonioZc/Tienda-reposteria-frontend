import "./cartItem.css";
import { formatCurrency } from "../../helpers";
import { useCartStore } from "../../store/cartStore";
export default function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
  return (
    <div className="cart__item">
      <div className="item__product">
        <h3 className="item__title">{item.name}</h3>

        <div className="item__details">
          <img src={item.imgURL} alt="tarta purpura" className="item__img" />

          <div className="item__texts">
            <p>
              Color: <span>{item.color}</span>
            </p>
            <p>
              Tamaño: <span>{item.size}</span>
            </p>
            <p>
              Nombre: <span>{item.clientName}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="item__quantity">
        <button
          className="item__minus"
          onClick={() => decreaseQuantity(item.id, item.size, item.color)}
        >
          <img src="\src\assets\icons\minus.svg" alt="minus" />
        </button>
        <span>{item.quantity}</span>
        <button
          className="item__plus"
          onClick={() => increaseQuantity(item.id, item.size, item.color)}
        >
          <img src="\src\assets\icons\plus.svg" alt="plus" />
        </button>
      </div>

      <div className="item__total">
        <p>{formatCurrency(item.price * item.quantity)}</p>
      </div>

      <button
        className="item__btn"
        onClick={() => removeFromCart(item.id, item.size, item.color)}
      >
        <img src="\src\assets\icons\x-redondo.svg" alt="x" />
      </button>
    </div>
  );
}
