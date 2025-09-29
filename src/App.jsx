import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

export function Inicio() {
  return (
    <main>
      <h1>Bienvenido al Portal de Administración de Autex</h1>
      <p>Utiliza las opciones en el menú para gestionar los siniestros y consultar los reportes del sistema.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Siniestros Activos</h3>
          <p>10 Siniestros pendientes de atención</p>
        </div>
        <div className="dashboard-card">
          <h3>Reparaciones en Curso</h3>
          <p>5 Reparaciones en progreso</p>
        </div>
        <div className="dashboard-card">
          <h3>Alertas de Seguimiento</h3>
          <p>3 siniestros retrasados en reparación</p>
        </div>
      </div>
      <footer>
        <p>Desarrollado por <span>djdkjskds</span></p>
        <p>Copyright &copy; 2050 - Derechos reservados</p>
        <p>Sistema Asistencia Siniestro Automotriz</p>
      </footer>
    </main>
  );
}

export function registrarSin() {
  return <div><h3>test1</h3><p>test</p></div>;
}

export function gestionarSin() {
  return <div><h3>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3><p>test</p></div>;
}

export function reportesBI() {
  return <div><h3>test3</h3><p>test</p></div>;
}
export function adminUsuarios() {
  return <div><h3>test4</h3><p>test</p></div>;
}
export default function App() {
  return (
    <Router>
      <section className="borde_nav">
        <div className="header">
          <img src={logo} alt="Logo" style={{borderRadius: "5px"}}/>
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

            <button><a href="">INICIAR SESIÓN</a></button>
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
              <NavLink to="/registrarSin" className={({ isActive }) => (isActive ? "active" : "")}>
                REGISTRAR SINIESTRO
              </NavLink>
            </li>
            <li>
              <NavLink to="/gestionarSin" className={({ isActive }) => (isActive ? "active" : "")}>
                GESTIONAR SINIESTROS
              </NavLink>
            </li>
            <li>
              <NavLink to="/reportesBI" className={({ isActive }) => (isActive ? "active" : "")}>
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
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarSin" element={<registrarSin />} />
          <Route path="/gestionarSin" element={<gestionarSin />} />
          <Route path="/reportesBI" element={<reportesBI />} /> 
          <Route path="/adminUsuarios" element={<adminUsuarios />} />
        </Routes>
      </main>
    </Router>
  );
}
