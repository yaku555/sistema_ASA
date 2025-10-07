import React, { useState } from "react";
import '../estilos/gestion.css';

const USUARIOS_INICIALES = [
  {
    rut: "12.345.678-9",
    nombre: "Juane",
    apellido: "Pérez",
    telefono: "+56 9 1234 5678",
    email: "juan.perez@gmail.com",
    direccion: "Av. Siempreviva 123",
    ciudad: "Santiago",
    fechaNacimiento: "1990-05-10",
    licencia: "Clase B",
    rol: "Administrador",
    activo: true,
  },
  {
    rut: "98.765.432-1",
    nombre: "María",
    apellido: "González",
    telefono: "+56 9 8765 4321",
    email: "maria.gonzalez@gmail.com",
    direccion: "Calle Falsa 456",
    ciudad: "Valparaíso",
    fechaNacimiento: "1985-11-22",
    licencia: "Clase C",
    rol: "Operador",
    activo: false,
  },
];

const ROLES = ["Administrador", "Operador", "Supervisor"];

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIALES);
  const [filtros, setFiltros] = useState({ nombre: "", rut: "", rol: "", activo: "" });
  const [modal, setModal] = useState({ open: false, usuario: null });

  // Filtrar usuarios solo al hacer click en FILTRAR
  const filtrar = () => usuarios.filter(u =>
    (!filtros.nombre || u.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())) &&
    (!filtros.rut || u.rut.includes(filtros.rut)) &&
    (!filtros.rol || u.rol === filtros.rol) &&
    (filtros.activo === "" || u.activo === (filtros.activo === "true"))
  );

  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);

  const handleFiltrar = () => setUsuariosFiltrados(filtrar());
  const handleResetFiltros = () => {
    setFiltros({ nombre: "", rut: "", rol: "", activo: "" });
    setUsuariosFiltrados(usuarios);
  };

  const openModal = usuario => setModal({ open: true, usuario });
  const closeModal = () => setModal({ open: false, usuario: null });

  const handleModalChange = e => {
    const { name, value } = e.target;
    setModal(m => ({
      ...m,
      usuario: { ...m.usuario, [name]: name === "activo" ? value === "true" : value }
    }));
  };

  const handleModalSubmit = e => {
    e.preventDefault();
    setUsuarios(us =>
      us.map(u => u.rut === modal.usuario.rut ? modal.usuario : u)
    );
    setUsuariosFiltrados(usuarios =>
      usuarios.map(u => u.rut === modal.usuario.rut ? modal.usuario : u)
    );
    closeModal();
  };

  return (
    <main>
      <div className="contenedor-principal">
        <section className="seccion_siniestros">
          {usuariosFiltrados.map(u => (
            <div className="siniestro-card" key={u.rut} style={{ borderLeft: `5px solid ${u.activo ? "#2ecc71" : "#e74c3c"}` }}>
              <div className="card-header">
                <h2>{u.nombre} {u.apellido}</h2>
                <span className="estado-badge" style={{ background: u.activo ? "#2ecc71" : "#e74c3c", color: "#fff" }}>
                  {u.activo ? "ACTIVO" : "INACTIVO"}
                </span>
              </div>
              <div className="card-details">
                <div>
                  <p>RUT: {u.rut}</p>
                  <p>Teléfono: {u.telefono}</p>
                  <p>Email: {u.email}</p>
                  <p>Dirección: {u.direccion}</p>
                  <p>Ciudad: {u.ciudad}</p>
                  <p>Fecha Nacimiento: {u.fechaNacimiento}</p>
                  <p>Licencia: {u.licencia}</p>
                  <p>Rol: {u.rol}</p>
                </div>
              </div>
              <button className="btn" onClick={() => openModal(u)}>EDITAR</button>
            </div>
          ))}
          {usuariosFiltrados.length === 0 && <p style={{ opacity: 0.7 }}>No hay resultados con estos filtros.</p>}
        </section>

        <aside className="seccion-extra">
          <h2>𖤘 FILTRAR USUARIOS</h2>
          <label>Nombre:</label>
          <input className="filtro" value={filtros.nombre} onChange={e => setFiltros(f => ({ ...f, nombre: e.target.value }))} />
          <label>RUT:</label>
          <input className="filtro" value={filtros.rut} onChange={e => setFiltros(f => ({ ...f, rut: e.target.value }))} />
          <label>Rol:</label>
          <select className="filtro" value={filtros.rol} onChange={e => setFiltros(f => ({ ...f, rol: e.target.value }))}>
            <option value="">Todos</option>
            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <label>Estado:</label>
          <select className="filtro" value={filtros.activo} onChange={e => setFiltros(f => ({ ...f, activo: e.target.value }))}>
            <option value="">Todos</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button className="btn" type="button" onClick={handleResetFiltros}>REESTABLECER</button>
            <button className="btn" type="button" onClick={handleFiltrar}>FILTRAR</button>
          </div>
        </aside>
      </div>

      {modal.open && (
        <div className="modal-panel" style={{ display: "flex" }}>
          <div className="modal-content">
            <span className="close-btn" style={{ cursor: "pointer" }} onClick={closeModal}>&times;</span>
            <h2>Editar Usuario</h2>
            <form onSubmit={handleModalSubmit}>
              {["nombre", "apellido", "rut", "telefono", "email", "direccion", "ciudad", "fechaNacimiento", "licencia"].map(field => (
                <React.Fragment key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    name={field}
                    type={field === "fechaNacimiento" ? "date" : "text"}
                    value={modal.usuario[field]}
                    onChange={handleModalChange}
                  />
                </React.Fragment>
              ))}
              <label>Rol:</label>
              <select name="rol" value={modal.usuario.rol} onChange={handleModalChange}>
                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <label>Activo:</label>
              <select name="activo" value={modal.usuario.activo ? "true" : "false"} onChange={handleModalChange}>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
              <br /><br />
              <button type="submit" className="btn">GUARDAR CAMBIOS</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
