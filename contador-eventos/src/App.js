import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContadorClicks from "./components/ContadorClicks";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contador de Clicks</h1>
      <ContadorClicks />
    </div>
  );
}

export default App;
