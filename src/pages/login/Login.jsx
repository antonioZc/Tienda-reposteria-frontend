import "./login.css";
export default function Login() {
  return (
    <main className="login__container container">
      <div className="form__container">
        <h1 className="form__title">
          Login{" "}
          <img src="\src\assets\img\borde-corazon.svg" alt="border-corazon" />
        </h1>
        <form className="form login">
          <div>
            <label htmlFor="mail" className="label">
              Correo:
            </label>
            <input
              type="email"
              placeholder="correo@correo.com"
              className="input"
              name="mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              type="password"
              placeholder="Tu contraseña..."
              className="input"
              name="password"
            />
          </div>
          <button>Entrar</button>
        </form>
      </div>

      <div className="form__container">
        <h1 className="form__title">
          Registrarse{" "}
          <img src="\src\assets\img\borde-corazon.svg" alt="border-corazon" />
        </h1>
        <form className="form register">
          <div>
            <label htmlFor="name" className="label">
              Nombre:
            </label>
            <input
              type="text"
              placeholder="Tu Nombre"
              className="input"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="mail" className="label">
              Correo:
            </label>
            <input
              type="email"
              placeholder="Tu contraseña..."
              className="input"
              name="mail"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Teléfono:
            </label>
            <input
              type="tel"
              placeholder="123456789"
              className="input"
              name="phone"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              type="password"
              placeholder="Tu contraseña..."
              className="input"
              name="password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="label">
              Repetir Contraseña:
            </label>
            <input
              type="password"
              placeholder="Repite tu contraseña..."
              className="input"
              name="confirm-password"
            />
          </div>
          <button>Registrarse</button>
        </form>
      </div>
    </main>
  );
}
