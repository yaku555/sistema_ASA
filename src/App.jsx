import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

// Importación de componentes
import Inicio from "./compsAdmin/Inicio";
import RegistrarSin from "./compsAdmin/RegistrarSin";
import ReportesBI from "./compsAdmin/ReportesBI";
import AdminUsuarios from "./compsAdmin/AdminUsuarios";
import GestionarSin from "./compsAdmin/GestionarSin";
import Login from "./compsUsuario/login";


export default function App() {
  return (
    // Definición del Router
    <Router>
      <section className="borde_nav">
        <div className="header">
          <img src={logo} alt="Logo" style={{ borderRadius: "5px" }} />
          <section>
            <div className="info_navbar">
              <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1 8V7a1 1 0 1 0-2 0v6a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414L13 12Z" />
              </svg>
              <div>
                <p>Lu - Vi 09:00 - 19:00</p>
                <p>Sab y Do - CERRADO</p>
              </div>
            </div>

            <div className="info_navbar">
              <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.21 2.47.59 3.68a1 1 0 01-.25 1.01l-2.22 2.1z" />
              </svg>
              <div>
                <p>Llámanos: +56 9 0000 0000</p>
                <p>correo@gmail.com</p>
              </div>
            </div>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active " : "") + "btn"}>
              REGISTRO / LOGIN
            </NavLink>
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
              <NavLink to="/RegistrarSin" className={({ isActive }) => (isActive ? "active" : "")}>
                REGISTRAR SINIESTRO
              </NavLink>
            </li>
            <li>
              <NavLink to="/GestionarSin" className={({ isActive }) => (isActive ? "active" : "")}>
                GESTIONAR SINIESTROS
              </NavLink>
            </li>
            <li>
              <NavLink to="/ReportesBI" className={({ isActive }) => (isActive ? "active" : "")}>
                REPORTES BI
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminUsuarios" className={({ isActive }) => (isActive ? "active" : "")}>
                ADMINISTRAR USUARIOS
              </NavLink>
            </li>


          </ul>
        </nav>
      </section>

      <main>
        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarSin" element={<RegistrarSin />} />
          <Route path="/gestionarSin" element={<GestionarSin />} />
          <Route path="/reportesBI" element={<ReportesBI />} />
          <Route path="/adminusuarios" element={<AdminUsuarios />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}
