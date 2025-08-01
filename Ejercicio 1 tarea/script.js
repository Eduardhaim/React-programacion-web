document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("areaForm");
  const limpiarBtn = document.getElementById("limpiarBtn");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);


    if (isNaN(base) || isNaN(altura)) {
      Swal.fire("Error", "Ingrese números válidos en ambos campos.", "error");
      return;
    }

    if (base <= 0 || altura <= 0) {
      Swal.fire("Error", "Los valores deben ser mayores que cero.", "error");
      return;
    }

  
    const area = base * altura;
    resultado.textContent = `${area.toFixed(2)} cm²`;

    Swal.fire("Éxito", "El área fue calculada correctamente.", "success");
  });

  limpiarBtn.addEventListener("click", () => {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    resultado.textContent = "--";
  });
});
