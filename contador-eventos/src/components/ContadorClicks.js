import React, { useState } from "react";
import Swal from "sweetalert2";

function ContadorClicks() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
    Swal.fire({
      icon: "success",
      title: "Click registrado",
      text: `Has hecho ${contador + 1} clicks.`,
      timer: 1000,
      showConfirmButton: false
    });
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      Swal.fire({
        icon: "info",
        title: "Click removido",
        text: `Ahora tienes ${contador - 1} clicks.`,
        timer: 1000,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "No puedes bajar más",
        text: "El contador de clicks ya está en cero."
      });
    }
  };

  const reiniciar = () => {
    Swal.fire({
      title: "¿Reiniciar contador?",
      text: "Se pondrá en 0 el número de clicks.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, reiniciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        setContador(0);
        Swal.fire({
          icon: "success",
          title: "Reiniciado",
          text: "El contador de clicks se reinició."
        });
      }
    });
  };

  return (
    <div className="text-center mt-4">
      <h2>{contador} clicks</h2>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
        <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
        <button className="btn btn-secondary" onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
}

export default ContadorClicks;
