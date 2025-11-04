import { useEffect, useMemo, useState } from "react";
import "./productDetails.css";
import { useCartStore } from "../../store/cartStore";
export default function ProductDetails() {
  const { addToCart } = useCartStore();
  const [cartItem, setCartItem] = useState({});
  const [product, setProduct] = useState({});
  const [pricesBysize, setPricesBySize] = useState([]);
  const [cat, setCat] = useState({});
  const [activeSize, setActiveSize] = useState(0);
  const urlDetails = window.location.pathname.split("/");
  const idProduct = urlDetails[urlDetails.length - 1];
  const getProduct = async (idProduct) => {
    try {
      const product = await fetch(
        `http://localhost:3000/api/products/${idProduct}`
      );
      setProduct(await product.json());
    } catch (error) {
      console.log(error);
    }
  };
  const getCategory = async (idCat) => {
    try {
      const cat = await fetch(`http://localhost:3000/api/categories/${idCat}`);
      setCat(await cat.json());
    } catch (error) {
      console.log(error);
    }
  };

  const productFound = useMemo(
    () => !Object.keys(product).includes("message"), // true si NO tiene "message"
    [product]
  );

  const responseObtained = useMemo(
    () => Object.keys(product).length > 0, // true si el objeto NO está vacío
    [product]
  );
  useEffect(() => {
    getProduct(idProduct);
  }, [idProduct]);

  useEffect(() => {
    if (responseObtained && productFound) {
      const sizes = product.tamano.split(",");
      const prices = product.precio.split(",");

      // Creamos un objeto clave-valor
      const sizePriceMap = {};
      sizes.forEach((size, index) => {
        sizePriceMap[size.trim()] = parseFloat(prices[index]?.trim());
      });

      setPricesBySize(sizePriceMap);
      setActiveSize(sizes[0]);
      getCategory(product.idCategoria);
      setCartItem({
        id: product.idProducto,
        name: product.nombre,
        color: product.color.split(",")[0],
        size: Object.keys(sizePriceMap)[0],
        clientName: "",
        quantity: 1,
        price: sizePriceMap[Object.keys(sizePriceMap)[0]],
        imgURL: product.imgURL,
      });
    }
  }, [responseObtained, productFound]);

  const handleInputSize = (e) => {
    const objetivo = e.target.closest("input").value;
    setActiveSize(objetivo);
    setCartItem({
      ...cartItem,
      size: objetivo,
      price: pricesBysize[objetivo],
    });
  };

  const handleColor = (e) => {
    setCartItem({ ...cartItem, color: e.target.value });
  };

  const handleName = (e) => {
    setCartItem({ ...cartItem, clientName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(cartItem);
  };
  return (
    <>
      {/* Muestra mientras carga */}
      {!responseObtained && <p>Cargando Detalles del producto...</p>}

      {/* Muestra error si no existe el producto */}
      {responseObtained && !productFound && (
        <p>{`No existe un producto con el ID: ${idProduct}`}</p>
      )}

      {/* Muestra el producto si existe */}
      {responseObtained && productFound && (
        <main className="product container">
          <picture className="product__picture">
            <img src={product.imgURL} alt={product.nombre || "Producto"} />
          </picture>

          <div className="product__details">
            <div className="product__texts">
              <h1 className="product__title">{product.nombre}</h1>
              <p className="product__cat">{cat.nombre}</p>
              <p className="product__price">{pricesBysize[activeSize]}€</p>
            </div>

            <form className="product__form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form__tamano">
                <p>TAMAÑO</p>
                <div className="tamano__inputs">
                  {Object.keys(pricesBysize).map((key) => (
                    <div key={key}>
                      <input
                        type="radio"
                        name="tamano"
                        value={key}
                        id={`tamano${key}`}
                        onChange={(e) => handleInputSize(e)}
                        checked={activeSize == key ? true : false}
                      />
                      <label htmlFor={`tamano${key}`}>
                        {`${key} ${cat.unidadMedida}`}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form__customize">
                {product.color === "" ? (
                  ""
                ) : (
                  <div className="form__color">
                    <label htmlFor="color">Color:</label>
                    <select name="color" onChange={(e) => handleColor(e)}>
                      {product.color.split(",").map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {product.permiteNombre === 0 ? (
                  ""
                ) : (
                  <div className="form__nombre">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      placeholder="EJ: Sophia"
                      onChange={(e) => handleName(e)}
                    />
                  </div>
                )}
              </div>

              <button type="submit" className="form__btn">
                AÑADIR AL CARRITO
              </button>
            </form>

            <div className="product__ingredients">
              <h2>INGREDIENTES</h2>
              <p>{product.ingredientes}</p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
