document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("notaForm");
  const limpiarBtn = document.getElementById("limpiarBtn");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      Swal.fire("Error", "Todos los campos deben estar llenos y ser números.", "error");
      return;
    }
    if (nota1 < 0 || nota1 > 30) {
      Swal.fire("Error", "La nota del 1.er Parcial debe estar entre 0 y 30.", "error");
      return;
    }
    if (nota2 < 0 || nota2 > 30) {
      Swal.fire("Error", "La nota del 2.º Parcial debe estar entre 0 y 30.", "error");
      return;
    }
    if (nota3 < 0 || nota3 > 40) {
      Swal.fire("Error", "La nota del 3.er Parcial debe estar entre 0 y 40.", "error");
      return;
    }

    const total = nota1 + nota2 + nota3;
    let mensaje = "";

    if (total < 60) mensaje = "Reprobado";
    else if (total < 80) mensaje = "Bueno";
    else if (total < 90) mensaje = "Muy Bueno";
    else mensaje = "Sobresaliente";

    resultado.textContent = `Nota final: ${total} - ${mensaje}`;
    Swal.fire("Éxito", "Cálculo realizado correctamente.", "success");
  });

  limpiarBtn.addEventListener("click", () => {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    resultado.textContent = "--";
  });
});
