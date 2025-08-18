import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Registro() {
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [errores, setErrores] = useState({});

  
  const [exito, setExito] = useState("");

  
  const validar = () => {
    let tempErrores = {};

    if (!nombre.trim() || nombre.length < 3) {
      tempErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      tempErrores.correo = "El correo no es válido.";
    }

    const regexContrasena = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexContrasena.test(contrasena)) {
      tempErrores.contrasena =
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.";
    }

    setErrores(tempErrores);
    return Object.keys(tempErrores).length === 0;
  };


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validar()) {
      setExito(`¡Registro exitoso! ¡Bienvenido, ${nombre}!`);
      setNombre("");
      setCorreo("");
      setContrasena("");
      setErrores({});
    } else {
      setExito("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow rounded">
            <h2 className="text-center mb-4">Registro de Usuario</h2>

            {exito && <Alert variant="success">{exito}</Alert>}

            <form onSubmit={manejarEnvio}>
              {/* Nombre */}
              <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input
                  type="text"
                  className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                {errores.nombre && (
                  <div className="invalid-feedback">{errores.nombre}</div>
                )}
              </div>

              {/* Correo */}
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className={`form-control ${errores.correo ? "is-invalid" : ""}`}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
                {errores.correo && (
                  <div className="invalid-feedback">{errores.correo}</div>
                )}
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className={`form-control ${errores.contrasena ? "is-invalid" : ""}`}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
                {errores.contrasena && (
                  <div className="invalid-feedback">{errores.contrasena}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
