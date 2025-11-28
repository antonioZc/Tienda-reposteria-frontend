import "./purchase.css";
import DateInput from "../../components/dateinput/DateInput";
export default function Purchase() {
  return (
    <main className="main__purchase container">
      <div className="form__container">
        <h1 className="form__title">
          Formulario de Entrega{" "}
          <img src="/src/assets/img/borde-corazon.svg" alt="border-corazon" />
        </h1>
        <form className="form form__userInformation">
          <p className="nota">
            * <span>Nota</span>: el pedido debe realizarse con un mínimo de dos
            días de antelación. Envíos solo dentro de la provincia de A Coruña.
          </p>

          <div className="form__radios">
            <div className="form__radio">
              <input type="radio" name="envio" value="envio" id="casa" />
              <label htmlFor="casa">Entrega a Domicilio</label>
            </div>
            <div className="form__radio">
              <input type="radio" name="envio" value="recoge" id="recoge" />
              <label htmlFor="recoge">Recogida en Tienda</label>
            </div>
          </div>

          <div className="form__names">
            <div className="form__div">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" name="nombre" />
            </div>

            <div className="form__div">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" name="apellidos" />
            </div>
          </div>

          <div className="form__div">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" name="direccion" />
          </div>

          <div className="form__CPFecha">
            <div className="form__div">
              <label htmlFor="cp">CP:</label>
              <input type="text" name="cp" />
            </div>
            <DateInput />
          </div>

          <div className="form__div">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" name="telefono" />
          </div>
          <div className="form__div">
            <label htmlFor="mail">Correo:</label>
            <input type="email" name="mail" />
          </div>

          <div className="form__div form__details">
            <label htmlFor="detalles">Detalles Adicionales</label>
            <textarea name="detalles" className="form__detail"></textarea>
          </div>
        </form>
      </div>

      <div className="form__container">
        <h1 className="form__title">
          Formulario de Pago{" "}
          <img src="/src/assets/img/borde-corazon.svg" alt="border-corazon" />
        </h1>
        <form className="form form__payment">
          <div className="form__method">
            <p htmlFor="metodo">Metodo de pago</p>
            <div className="method__inputs">
              <label>
                Visa <input type="radio" value="visa" name="method" />
              </label>

              <label>
                MasterCard{" "}
                <input type="radio" value="masterCard" name="method" />
              </label>

              <label>
                Paypal <input type="radio" value="paypal" name="method" />
              </label>
            </div>
          </div>

          <div className="payment__details">
            <h3 className="payment__title">Detalles de Pago</h3>
            <div className="form__div">
              <label htmlFor="titular">
                Nombre y apellidos del propietario:
              </label>
              <input type="text" name="titular" />
            </div>

            <div className="form__div">
              <label htmlFor="numeroTarjeta">Numero de la tarjeta</label>
              <input type="text" name="numeroTarjeta" />
            </div>

            <div className="form__div">
              <label htmlFor="fechaExp">Fecha de expiración</label>
              <input type="date" name="fechaExp" />
            </div>

            <div className="form__div">
              <label htmlFor="cv">CV</label>
              <input type="number" name="cv" />
            </div>
          </div>

          <div className="form__total">
            <div className="total__information">
              <p>
                Subtotal: <span>75€</span>
              </p>
              <p>
                Gastos de Envío: <span>5€</span>
              </p>
              <p>
                Total a Pagar: <span>80€</span>
              </p>
            </div>

            <button type="submit">Pagar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
