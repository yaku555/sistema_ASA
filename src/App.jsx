import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Inicio() {
  return (

    <h1>Bienvenido a la página de inicio</h1>

  );
}


export function Denunciar() {
  return <div><h3>test1</h3><p>test</p></div>;
}

export function Mi_Siniestro() {
  return <div><h3>test2</h3><p>test</p></div>;
}

export function Talleres() {
  return <div><h3>test3</h3><p>test</p></div>;
}

export default function App() {
  return (
    <Router>
      <section class="borde_nav">
        <div class = "header">
          <img src="https://whatthelogo.com/storage/logos/international-marketing-group-55780.png" alt="" />
          <div>
            <h1>hola</h1>
          </div>
        </div>
        
        <nav className="navbar">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/denunciar">DENUNCIAR</Link></li>
            <li><Link to="/mi_siniestro">MI SINIESTRO</Link></li>
            <li><Link to="/talleres">TALLERES</Link></li>
          </ul>
        </nav>
      </section>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/denunciar" element={<Denunciar />} />
          <Route path="/mi_siniestro" element={<Mi_Siniestro />} />
          <Route path="/talleres" element={<Talleres />} />
        </Routes>
      </main>
    </Router>
  );
}
