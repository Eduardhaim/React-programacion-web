import React, { useState } from "react";
import Swal from "sweetalert2";

function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState(0);
  const [result, setResult] = useState(null);

  const calculateTip = () => {
    if (!amount || amount <= 0) {
      Swal.fire("Error", "Por favor ingresa un monto válido", "error");
      return;
    }
    const tipAmount = (amount * tip) / 100;
    const total = parseFloat(amount) + tipAmount;
    setResult({ tipAmount, total });
  };

  return (
    <div className="container mt-5">
      <h1>Calculadora de Propinas</h1>
      <input
        type="number"
        className="form-control"
        placeholder="Monto de la cuenta"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="mt-3">
        {[10, 15, 20].map((p) => (
          <button
            key={p}
            className="btn btn-primary m-1"
            onClick={() => setTip(p)}
          >
            {p}%
          </button>
        ))}
      </div>
      <button className="btn btn-success mt-3" onClick={calculateTip}>
        Calcular
      </button>

      {result && (
        <div className="mt-4">
          <h4>Propina: L{result.tipAmount.toFixed(2)}</h4>
          <h4>Total: L{result.total.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}

export default TipCalculator;
