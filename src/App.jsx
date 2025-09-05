import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

export function Inicio() {
  return <h1>Bienvenido a la página de inicio</h1>;
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
      <section className="borde_nav">
        <div className="header">
          <img
            src={logo}
            alt=""
          />
          <section>
            <div class="info_navbar">

              <svg class="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1 8V7a1 1 0 1 0-2 0v6a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414L13 12Z" />
              </svg>
              <div>
                <p>Lu - Vi 09:00 - 19:00</p>
                <p>Sab y Do - CERRADO</p>
              </div>
            </div>

            <div class="info_navbar">
              <svg class="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24
             11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 
             3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.21 2.47.59 
             3.68a1 1 0 01-.25 1.01l-2.22 2.1z"/>
              </svg>
              <div>
                <p>Llámanos: +56 9 0000 0000</p>
                <p>correo@gmail.com</p>
              </div>
            </div>


            <button>INICIAR SESION</button>
            <button>REGISTRARSE</button>
          </section>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/denunciar" className={({ isActive }) => (isActive ? "active" : "")}>
                DENUNCIAR SINIESTRO
              </NavLink>
            </li>
            <li>
              <NavLink to="/mi_siniestro" className={({ isActive }) => (isActive ? "active" : "")}>
                MI SINIESTRO
              </NavLink>
            </li>
            <li>
              <NavLink to="/talleres" className={({ isActive }) => (isActive ? "active" : "")}>
                TALLERES
              </NavLink>
            </li>
            <li>
              <NavLink to="/asistencia" className={({ isActive }) => (isActive ? "active" : "")}>
                ASISTENCIA
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}>
                SOBRE NOSOTROS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
                CONTÁCTANOS
              </NavLink>
            </li>
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
