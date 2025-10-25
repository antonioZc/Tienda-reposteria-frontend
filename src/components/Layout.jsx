import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> |{" "}
        <Link to="/contact">Contacto</Link>
      </nav>
      <hr />
      <Outlet /> {/* Aquí se renderizarán las páginas */}
    </div>
  );
}

export default Layout;
