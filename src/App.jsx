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



export function RegistrarSin() {
  return <div><h3>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3><p>test</p></div>;
}

export function GestionarSin() {
  return (
    <main>
      <br />
      <div className="contenedor-principal">
        <section className="seccion_siniestros">
          <div className="siniestro-card">
            <div className="card-header">
              <h2>#5593930</h2>
              <p className="estado ret"></p>
            </div>
            <div className="card-details">
              <div>
                <p>GH-KX-32</p>
                <p>Chevrolet Durango</p>
                <p>Fecha Registro: 12/03/2024</p>
                <p>Taller: N/A</p>
                <p>Grua: HG-AK-45</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>Juan Pérez</p>
                <p>22.564.244-4</p>
                <p>+56 9 1234 5678</p>
                <p>correo@gmail.com</p>
              </div>
            </div>
            <button className="btn">GESTIONAR</button>
          </div>
          <div className="siniestro-card">
            <div className="card-header">
              <h2>#5593930</h2>
              <p className="estado ret"></p>
            </div>
            <div className="card-details">
              <div>
                <p>GH-KX-32</p>
                <p>Chevrolet Durango</p>
                <p>Fecha Registro: 12/03/2024</p>
                <p>Taller: N/A</p>
                <p>Grua: HG-AK-45</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>Juan Pérez</p>
                <p>22.564.244-4</p>
                <p>+56 9 1234 5678</p>
                <p>correo@gmail.com</p>
              </div>
            </div>
            <button className="btn">GESTIONAR</button>
          </div>
        </section>
        <aside className="seccion-extra">
          <h2>𖤘 FILTRAR </h2>
          <label htmlFor="fecha">FECHA DE REGISTRO:</label>
          <input type="date" id="fecha" className="filtro" />
          <label htmlFor="estado">ESTADO:</label>
          <select id="estado" className="filtro">
            <option value="" disabled selected>Seleccione estado...</option>
            <option value="evaluacion">En Evaluación</option>
            <option value="reparacion">En reparación</option>
            <option value="retrasado">Retrasado</option>
            <option value="reingresado">Reingresado</option>
            <option value="finalizado">Finalizado</option>
            <option value="entregado">Entregado</option>
          </select>
          <label htmlFor="poliza">POLIZA:</label>
          <input type="text" id="poliza" className="filtro" placeholder="Buscar poliza..." />
          <button className="btn" id="btn-reset">REESTABLECER</button>
          <button type="reset" className="btn">FILTRAR</button>
        </aside>
      </div>
      <div id="modal-panel" className="modal-panel" style={{ display: "none" }}>
        <div className="modal-content">
          <span id="close-modal" className="close-btn">&times;</span>
          <h2>Gestionar Siniestro</h2>
          <form id="gestion-form">
            <label htmlFor="modal-taller">Taller:</label>
            <input type="text" id="modal-taller" name="taller" />
            <label htmlFor="modal-grua">Grúa:</label>
            <input type="text" id="modal-grua" name="grua" />
            <label htmlFor="modal-estado">Estado:</label>
            <select id="modal-estado" name="estado">
              <option value="eva">En Evaluación</option>
              <option value="rep">En reparación</option>
              <option value="ret">Retrasado</option>
              <option value="rein">Reingresado</option>
              <option value="fin">Finalizado</option>
              <option value="ent">Entregado</option>
            </select>
            <br /><br />
            <button type="submit" className="btn">GUARDAR CAMBIOS</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export function ReportesBI() {
  return <div><h3>test3</h3><p>test</p></div>;
}
export function AdminUsuarios() {
  return <div><h3>test4</h3><p>test</p></div>;
}
export default function App() {
  return (
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
              <NavLink to="/AdminUsuarios" className={({ isActive }) => (isActive ? "active" : "")}>
                ADMINISTRAR USUARIOS
              </NavLink>
            </li>

          </ul>
        </nav>
      </section>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarSin" element={<RegistrarSin />} />
          <Route path="/gestionarSin" element={<GestionarSin />} />
          <Route path="/reportesBI" element={<ReportesBI />} />
          <Route path="/adminUsuarios" element={<AdminUsuarios />} />
        </Routes>
      </main>
    </Router>
  );
}
