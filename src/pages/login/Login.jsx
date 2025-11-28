import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // 🔹 Hook para redirigir

  // Estado global de usuario
  const { setUser } = useAuthStore();
  // Estados del formulario de login
  const [loginData, setLoginData] = useState({
    mail: "",
    password: "",
  });

  // Estados del formulario de registro
  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "", // ✅ añadido
    mail: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errorLogin, setErrorLogin] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const [statusLogin, setStatusLogin] = useState("");
  const [statusRegister, setStatusRegister] = useState("");

  // 🔹 Actualizar campos dinámicamente
  const handleChange = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else if (formType === "register") {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🔹 Enviar datos de login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusLogin(data.message || "Error al iniciar sesión");
        setErrorLogin(true);
        return;
      }
      setErrorLogin(false);
      setStatusLogin("");
      setUser(data);
      navigate("/store");
    } catch (err) {
      console.error("❌ Error en login:", err);
      setErrorLogin(true);
      setStatusLogin("Error de conexión con el servidor");
    }
  };

  // 🔹 Enviar datos de registro
  const handleRegister = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      setErrorRegister(true);
      setStatusRegister("Las contraseñas no coinciden");
      return;
    }

    // ✂️ Excluir confirmPassword del objeto que se envía
    const { confirmPassword: _, ...userData } = registerData;

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("✅ Register response:", data);

      if (!res.ok) {
        setErrorRegister(true);
        setStatusRegister(data.message || "Error al registrarse");
        return;
      }

      setErrorRegister(false);
      setStatusRegister(data.message);
      setRegisterData({
        name: "",
        surname: "",
        mail: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("❌ Error en register:", err);
      setErrorRegister(true);
      setStatusRegister("Error de conexión con el servidor");
    }
  };

  return (
    <>
      {searchParams.get("session") === "closed" ? (
        <p className="param">Sesión Cerrada Correctamente</p>
      ) : (
        ""
      )}

      {searchParams.get("session") === "none" ? (
        <p className="param">Debe Iniciar Sesión para Continuar</p>
      ) : (
        ""
      )}

      <main className="login__container container">
        {/* FORM LOGIN */}
        <div className="form__container">
          <h1 className="form__title">
            Login{" "}
            <img src="/src/assets/img/borde-corazon.svg" alt="border-corazon" />
          </h1>
          <form className="form login" onSubmit={handleLogin}>
            {statusLogin !== "" ? (
              <p className={errorLogin ? "form-status error" : "form-status"}>
                {statusLogin}
              </p>
            ) : (
              ""
            )}
            <div className="form__div">
              <label className="label">Correo:</label>
              <input
                type="email"
                placeholder="correo@correo.com"
                className="input"
                name="mail"
                value={loginData.mail}
                onChange={(e) => handleChange(e, "login")}
              />
            </div>
            <div className="form__div">
              <label className="label">Contraseña:</label>
              <input
                type="password"
                placeholder="Tu contraseña..."
                className="input"
                name="password"
                value={loginData.password}
                onChange={(e) => handleChange(e, "login")}
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>

        {/* FORM REGISTRO */}
        <div className="form__container">
          <h1 className="form__title">
            Registrarse{" "}
            <img src="/src/assets/img/borde-corazon.svg" alt="border-corazon" />
          </h1>
          <form className="form register" onSubmit={handleRegister}>
            {statusRegister !== "" ? (
              <p
                className={errorRegister ? "form-status error" : "form-status"}
              >
                {statusRegister}
              </p>
            ) : (
              ""
            )}
            <div className="form__div">
              <label className="label" htmlFor="name">
                Nombre:
              </label>
              <input
                type="text"
                placeholder="Tu Nombre"
                className="input"
                name="name"
                value={registerData.name}
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <div className="form__div">
              <label className="label" htmlFor="surname">
                Apellidos:
              </label>
              <input
                type="text"
                placeholder="Tus Apellidos"
                className="input"
                name="surname"
                value={registerData.surname} // ✅ corregido
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <div className="form__div">
              <label className="label" htmlFor="mail">
                Correo:
              </label>
              <input
                type="email"
                placeholder="correo@correo.com"
                className="input"
                name="mail"
                value={registerData.mail}
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <div className="form__div">
              <label className="label" htmlFor="phone">
                Teléfono:
              </label>
              <input
                type="tel"
                placeholder="123456789"
                className="input"
                name="phone"
                value={registerData.phone}
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <div className="form__div">
              <label className="label" htmlFor="password">
                Contraseña:
              </label>
              <input
                type="password"
                placeholder="Tu contraseña..."
                className="input"
                name="password"
                value={registerData.password}
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <div className="form__div">
              <label className="label" htmlFor="confirmPassword">
                Repetir Contraseña:
              </label>
              <input
                type="password"
                placeholder="Repite tu contraseña..."
                className="input"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={(e) => handleChange(e, "register")}
              />
            </div>

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </main>
    </>
  );
}
