import React, { useMemo, useState } from "react";
import '../estilos/gestion.css';

// ---- Datos iniciales de usuarios ----
import React, { useState } from "react";
import '../estilos/gestion.css';

const USUARIOS_INICIALES = [
  {
    rut: "12.345.678-9",
    nombre: "Juan",
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

const ROLES = [
  { value: "Administrador", label: "Administrador" },
  { value: "Operador", label: "Operador" },
  { value: "Supervisor", label: "Supervisor" },
];

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIALES);
  const [filtros, setFiltros] = useState({
    nombre: "",
    rut: "",
    rol: "",
    activo: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [modalForm, setModalForm] = useState({
    rut: "",
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: "",
    ciudad: "",
    fechaNacimiento: "",
    licencia: "",
    rol: "",
    activo: true,
  });

  // Abrir modal y cargar datos
  const openModal = (usuario) => {
    setModalForm({ ...usuario });
    setModalId(usuario.rut);
    setModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    setModalId(null);
    setModalForm({
      rut: "",
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      direccion: "",
      ciudad: "",
      fechaNacimiento: "",
      licencia: "",
      rol: "",
      activo: true,
    });
  };

  // Guardar cambios del modal
  const handleModalSubmit = (e) => {
    e.preventDefault();
    setUsuarios((prev) =>
      prev.map((u) =>
        u.rut === modalId
          ? { ...modalForm }
          : u
      )
    );
    closeModal();
  };

  // Resetear filtros
  const handleResetFiltros = () => {
    setFiltros({ nombre: "", rut: "", rol: "", activo: "" });
  };

  // Filtrar usuarios
  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((u) => {
      const byNombre = !filtros.nombre || u.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
      const byRut = !filtros.rut || u.rut.includes(filtros.rut);
      const byRol = !filtros.rol || u.rol === filtros.rol;
      const byActivo = filtros.activo === "" || u.activo === (filtros.activo === "true");
      return byNombre && byRut && byRol && byActivo;
    });
  }, [usuarios, filtros]);

  return (
    <main>
      <br />
      <div className="contenedor-principal">
        <section className="seccion_siniestros">
          {usuariosFiltrados.map((u) => (
            <div
              className="siniestro-card"
              key={u.rut}
              style={{ borderLeft: `5px solid ${u.activo ? "#2ecc71" : "#e74c3c"}` }}
            >
              <div className="card-header">
                <h2>{u.nombre} {u.apellido}</h2>
                <span
                  className="estado-badge"
                  style={{
                    backgroundColor: u.activo ? "#2ecc71" : "#e74c3c",
                    color: "#fff",
                  }}
                  aria-label={u.activo ? "Activo" : "Inactivo"}
                  title={u.activo ? "Activo" : "Inactivo"}
                >
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
              <button className="btn" onClick={() => openModal(u)}>
                EDITAR
              </button>
            </div>
          ))}
          {usuariosFiltrados.length === 0 && (
            <p style={{ opacity: 0.7 }}>No hay resultados con estos filtros.</p>
          )}
        </section>

        <aside className="seccion-extra">
          <h2>𖤘 FILTRAR USUARIOS</h2>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            className="filtro"
            placeholder="Buscar nombre..."
            value={filtros.nombre}
            onChange={(e) => setFiltros((f) => ({ ...f, nombre: e.target.value }))}
          />

          <label htmlFor="rut">RUT:</label>
          <input
            type="text"
            id="rut"
            className="filtro"
            placeholder="Buscar RUT..."
            value={filtros.rut}
            onChange={(e) => setFiltros((f) => ({ ...f, rut: e.target.value }))}
          />

          <label htmlFor="rol">Rol:</label>
          <select
            id="rol"
            className="filtro"
            value={filtros.rol}
            onChange={(e) => setFiltros((f) => ({ ...f, rol: e.target.value }))}
          >
            <option value="">Todos</option>
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>

          <label htmlFor="activo">Estado:</label>
          <select
            id="activo"
            className="filtro"
            value={filtros.activo}
            onChange={(e) => setFiltros((f) => ({ ...f, activo: e.target.value }))}
          >
            <option value="">Todos</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button className="btn" id="btn-reset" type="button" onClick={handleResetFiltros}>
              REESTABLECER
            </button>
          </div>
        </aside>
      </div>

      {modalOpen && (
        <div id="modal-panel" className="modal-panel" style={{ display: "flex" }}>
          <div className="modal-content">
            <span id="close-modal" className="close-btn" style={{ cursor: "pointer" }} onClick={closeModal}>
              &times;
            </span>
            <h2>Editar Usuario</h2>
            <form id="gestion-form" onSubmit={handleModalSubmit}>
              <label htmlFor="modal-nombre">Nombre:</label>
              <input
                type="text"
                id="modal-nombre"
                name="nombre"
                value={modalForm.nombre}
                onChange={(e) => setModalForm((f) => ({ ...f, nombre: e.target.value }))}
              />
              <label htmlFor="modal-apellido">Apellido:</label>
              <input
                type="text"
                id="modal-apellido"
                name="apellido"
                value={modalForm.apellido}
                onChange={(e) => setModalForm((f) => ({ ...f, apellido: e.target.value }))}
              />
              <label htmlFor="modal-rut">RUT:</label>
              <input
                type="text"
                id="modal-rut"
                name="rut"
                value={modalForm.rut}
                onChange={(e) => setModalForm((f) => ({ ...f, rut: e.target.value }))}
              />
              <label htmlFor="modal-telefono">Teléfono:</label>
              <input
                type="text"
                id="modal-telefono"
                name="telefono"
                value={modalForm.telefono}
                onChange={(e) => setModalForm((f) => ({ ...f, telefono: e.target.value }))}
              />
              <label htmlFor="modal-email">Email:</label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={modalForm.email}
                onChange={(e) => setModalForm((f) => ({ ...f, email: e.target.value }))}
              />
              <label htmlFor="modal-direccion">Dirección:</label>
              <input
                type="text"
                id="modal-direccion"
                name="direccion"
                value={modalForm.direccion}
                onChange={(e) => setModalForm((f) => ({ ...f, direccion: e.target.value }))}
              />
              <label htmlFor="modal-ciudad">Ciudad:</label>
              <input
                type="text"
                id="modal-ciudad"
                name="ciudad"
                value={modalForm.ciudad}
                onChange={(e) => setModalForm((f) => ({ ...f, ciudad: e.target.value }))}
              />
              <label htmlFor="modal-fechaNacimiento">Fecha Nacimiento:</label>
              <input
                type="date"
                id="modal-fechaNacimiento"
                name="fechaNacimiento"
                value={modalForm.fechaNacimiento}
                onChange={(e) => setModalForm((f) => ({ ...f, fechaNacimiento: e.target.value }))}
              />
              <label htmlFor="modal-licencia">Licencia:</label>
              <input
                type="text"
                id="modal-licencia"
                name="licencia"
                value={modalForm.licencia}
                onChange={(e) => setModalForm((f) => ({ ...f, licencia: e.target.value }))}
              />
              <label htmlFor="modal-rol">Rol:</label>
              <select
                id="modal-rol"
                name="rol"
                value={modalForm.rol}
                onChange={(e) => setModalForm((f) => ({ ...f, rol: e.target.value }))}
              >
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              <label htmlFor="modal-activo">Activo:</label>
              <select
                id="modal-activo"
                name="activo"
                value={modalForm.activo ? "true" : "false"}
                onChange={(e) => setModalForm((f) => ({ ...f, activo: e.target.value === "true" }))}
              >
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
