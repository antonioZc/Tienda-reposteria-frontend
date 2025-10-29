import "./cartItem.css";
export default function CartItem() {
  return (
    <div className="cart__item">
      <div className="item__product">
        <h3 className="item__title">Red Velvet</h3>

        <div className="item__details">
          <img
            src="\src\assets\img\products\purpura.svg"
            alt="tarta purpura"
            className="item__img"
          />

          <div className="item__texts">
            <p>
              Color: <span>Rosado</span>
            </p>
            <p>
              Tamaño: <span>10/t</span>
            </p>
            <p>
              Nombre: <span>Rosado</span>
            </p>
          </div>
        </div>
      </div>

      <div className="item__quantity">
        <button className="item__minus">
          <img src="\src\assets\icons\minus.svg" alt="minus" />
        </button>
        <span>5</span>
        <button className="item__plus">
          <img src="\src\assets\icons\plus.svg" alt="plus" />
        </button>
      </div>

      <div className="item__total">
        <p>50€</p>
      </div>

      <button className="item__btn">
        <img src="\src\assets\icons\x-redondo.svg" alt="x" />
      </button>
    </div>
  );
}
