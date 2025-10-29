import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenuClick(e) {
    if (e.target.closest("button").dataset.action === "open-menu") {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }
  return (
    <>
      <header>
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <img src="/src\assets\img\logo.svg" alt="Logo" />
          </Link>

          <div
            className={`nav__links ${showMenu ? "nav__links--active" : ""}`}
            onClick={() => setShowMenu(false)}
          >
            <div
              className={`nav__links__container ${
                showMenu ? "nav__links__container--active" : ""
              }`}
            >
              <Link to="/" className="nav__link">
                Inicio
              </Link>
              <Link to="/login" className="nav__link">
                Login
              </Link>
              <Link to="/store" className="nav__link">
                Tienda
              </Link>
              <Link to="/about" className="nav__link">
                Acerca de
              </Link>
              <Link to="/contact" className="nav__link">
                Contactar
              </Link>
            </div>
          </div>

          <div className="nav__icons">
            <Link to="/cart" className="nav__icon">
              <img src="\src\assets\icons\cart.svg" alt="cart" />
            </Link>
            <div className="nav__menu--icons">
              <button
                className={`btn__menu btn-open ${
                  !showMenu ? "btn__menu--active" : ""
                }`}
                data-action="open-menu"
                onClick={(e) => handleMenuClick(e)}
              >
                <img src="\src\assets\icons\hamburger.svg" alt="open-menu" />
              </button>
              <button
                className={`btn__menu btn-close ${
                  showMenu ? "btn__menu--active" : ""
                }`}
                data-action="close-menu"
                onClick={(e) => handleMenuClick(e)}
              >
                <img src="\src\assets\icons\x.svg" alt="open-menu" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <hr />
      <Outlet /> {/* Aquí se renderizarán las páginas */}
      <footer className="footer">
        <div className="footer__container container">
          <picture className="footer__logo">
            <img src="\src\assets\img\logo-rosa.svg" alt="logo-rosado" />
          </picture>

          <div className="footer__links">
            <h2>
              Menú
              <img
                src="\src\assets\img\borde-corazon.svg"
                alt="borde-corazon"
              />
            </h2>

            <div className="footer__links__container">
              <Link to="/" className="footer__link">
                Inicio
              </Link>
              <Link to="/store" className="footer__link">
                Tienda
              </Link>
              <Link to="/about" className="footer__link">
                Acerca de
              </Link>
              <Link to="/contact" className="footer__link">
                Contactar
              </Link>
            </div>
          </div>

          <div className="footer__links">
            <h2>
              Contacto
              <img
                src="\src\assets\img\borde-corazon.svg"
                alt="borde-corazon"
              />
            </h2>

            <div className="footer__links__container">
              <a href="#" className="footer__link">
                <img
                  src="\src\assets\icons\instagram.svg"
                  alt="instagram-icon"
                />
                Mary's_Sweets
              </a>
              <a href="tel:900110154" className="footer__link">
                <img src="\src\assets\icons\phone.svg" alt="phone-icon" />
                900 110 154
              </a>
              <a href="mailto:marys@sweets.com" className="footer__link">
                <img src="\src\assets\icons\mail.svg" alt="email-icon" />
                marys@sweets.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

{
  /* <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> |{" "}
        <Link to="/contact">Contacto</Link> */
}
export default Layout;
