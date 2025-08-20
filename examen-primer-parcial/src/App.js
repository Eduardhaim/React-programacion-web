import React, { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [productos, setProductos] = useState(["", "", "", "", ""]);
  const [subtotal, setSubtotal] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);
  const [etiquetaDescuento, setEtiquetaDescuento] = useState("");

  
  const handleChange = (index, value) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index] = value;
    setProductos(nuevosProductos);
  };

  
  const calcular = () => {
    
    for (let i = 0; i < productos.length; i++) {
      if (productos[i] === "" || isNaN(productos[i])) {
        Swal.fire({
          icon: "error",
          title: "Campo inválido",
          text: `El producto ${i + 1} debe ser un número válido`,
        });
        return;
      }
    }

    const valoresNumericos = productos.map((p) => parseFloat(p));
    const sub = valoresNumericos.reduce((acc, val) => acc + val, 0);
    setSubtotal(sub);

    let porc = 0;
    if (sub >= 1000 && sub <= 4999.99) porc = 10;
    else if (sub >= 5000 && sub <= 8999.99) porc = 20;
    else if (sub >= 9000 && sub <= 12999.99) porc = 30;
    else if (sub >= 13000) porc = 40;

    setDescuento(porc);
    setEtiquetaDescuento(`Descuento ${porc}%`);
    setTotal(sub - sub * (porc / 100));
  };

  
  const limpiar = () => {
    setProductos(["", "", "", "", ""]);
    setSubtotal(0);
    setDescuento(0);
    setTotal(0);
    setEtiquetaDescuento("");
    Swal.fire({
      icon: "info",
      title: "Formulario limpio",
      text: "Todos los campos fueron restablecidos",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">🛒 Calculadora de Descuentos</h2>
        <form>
          <div className="row">
            {productos.map((valor, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <label className="form-label">Producto {index + 1}</label>
                <input
                  type="text"
                  className="form-control"
                  value={valor}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder="Ingrese precio"
                />
              </div>
            ))}
          </div>
        </form>
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-success me-2"
            onClick={calcular}
          >
            Calcular
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={limpiar}
          >
            Limpiar
          </button>
        </div>

        {/* Resultados */}
        <div className="mt-4">
          <h5>Resultados de la Compra</h5>
          <p><strong>Subtotal:</strong> L{subtotal.toFixed(2)}</p>
          <p><strong>{etiquetaDescuento}:</strong> L{(subtotal * (descuento / 100)).toFixed(2)}</p>
          <p><strong>Total a Pagar:</strong> L{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
