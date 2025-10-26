import "./productDetails.css";
export default function ProductDetails() {
  return (
    <main className="product container">
      <picture className="product__picture">
        <img src="\src\assets\img\products\red-velvet.svg" alt="tarta" />
      </picture>

      <div className="product__details">
        <div className="product__texts">
          <h1 className="product__title">Red Velvet</h1>
          <p className="product__cat">TARTAS</p>
          <p className="product__price">50€</p>
        </div>
        <form className="product__form">
          <div className="form__tamano">
            <p>TAMAÑO</p>
            <div className="tamano__inputs">
              <input type="radio" name="tamano" value={"1"} id="tamano1" />
              <label htmlFor="tamano1">10 Trozos</label>

              <input type="radio" name="tamano" value={"2"} id="tamano2" />
              <label htmlFor="tamano2">16 Trozos</label>
            </div>
          </div>

          <div className="form__customize">
            <div className="form__color">
              <label htmlFor="color">Color:</label>
              <select name="color">
                <option value="rosa">Rosa</option>
                <option value="azul">Azúl</option>
              </select>
            </div>

            <div className="form__nombre">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" placeholder="EJ: Sophia" />
            </div>
          </div>
          <button type="submit" className="form__btn">
            AÑADIR AL CARRITO
          </button>
        </form>

        <div className="product__ingredients">
          <h2>INGREDIENTES</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            obcaecati maxime nesciunt assumenda sint aut distinctio cupiditate
            alias quas, suscipit perferendis maiores.
          </p>
        </div>
      </div>
    </main>
  );
}
