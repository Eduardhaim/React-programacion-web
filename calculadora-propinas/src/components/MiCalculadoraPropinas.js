import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function MiCalculadoraPropinas() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  const [percentage, setPercentage] = useState(15);

  const calculateTip = () => {
    if (!amount || amount <= 0) {
      Swal.fire("Error", "Por favor ingresa un monto válido", "error");
      return;
    }

    const propina = (amount * percentage) / 100;
    const totalFinal = parseFloat(amount) + propina;

    setTip(propina.toFixed(2));
    setTotal(totalFinal.toFixed(2));

    Swal.fire(
      "Cálculo exitoso",
      `La propina es L.${propina.toFixed(2)} y el total a pagar es L.${totalFinal.toFixed(2)}`,
      "success"
    );
  };

  return (
    <div className="card p-4">
      <div className="mb-3">
        <label className="form-label">Monto de la cuenta (Lempiras)</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ejemplo: 500"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Porcentaje de propina</label>
        <select
          className="form-select"
          value={percentage}
          onChange={(e) => setPercentage(parseInt(e.target.value))}
        >
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" onClick={calculateTip}>
        Calcular Propina
      </button>

      {tip && total && (
        <div className="mt-4 alert alert-info">
          <p>Propina: <strong>L.{tip}</strong></p>
          <p>Total a pagar: <strong>L.{total}</strong></p>
        </div>
      )}
    </div>
  );
}

export default MiCalculadoraPropinas;
