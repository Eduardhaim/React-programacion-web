import React, { useState } from "react";

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({});

  const [exito, setExito] = useState(false);

  const validar = () => {
    let erroresTemp = {};

    if (!nombre.trim()) {
      erroresTemp.nombre = "El nombre es obligatorio";
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      erroresTemp.correo = "El correo no es válido";
    }

    if (!mensaje.trim()) {
      erroresTemp.mensaje = "El mensaje no puede estar vacío";
    }

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (validar()) {
      setExito(true);

      setNombre("");
      setCorreo("");
      setMensaje("");
      setErrores({});
    } else {
      setExito(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Formulario de Contacto</h2>

      {/* Mensaje de éxito */}
      {exito && (
        <div className="alert alert-success">
          ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
        </div>
      )}

      <form onSubmit={manejarEnvio} className="p-4 border rounded bg-light shadow-sm">
        {/* Campo Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </div>

        {/* Campo Correo */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className={`form-control ${errores.correo ? "is-invalid" : ""}`}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
        </div>

        {/* Campo Mensaje */}
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className={`form-control ${errores.mensaje ? "is-invalid" : ""}`}
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
        </div>

        {/* Botón */}
        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}
