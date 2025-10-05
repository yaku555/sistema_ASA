import React, { useMemo, useState } from "react";
import '../estilos/gestion.css'; 

const ESTADOS = [
  { value: "ing", label: "INGRESADO", color: "#70a766ff" },
  { value: "eva", label: "EN EVALUACIÓN", color: "#C0D900" },
  { value: "rep", label: "EN REPARACIÓN", color: "#009CD9" },
  { value: "ret", label: "RETRASADO", color: "#D94800" },
  { value: "rein", label: "REINGRESADO", color: "#1200D9" },
  { value: "fin", label: "FINALIZADO", color: "#00D904" },
  { value: "ent", label: "ENTREGADO", color: "#D2D900" },
];

const GRUAS = [
  { patente: "HG-AK-45", nombre: "Grúa Andes" },
  { patente: "JK-LM-11", nombre: "Grúa Pacífico" },
  { patente: "PQ-RS-22", nombre: "Grúa Cordillera" },
  { patente: "TU-VW-33", nombre: "Grúa Sur" },
];

const TALLERES = [
  { taller: "Poniente B", direccion: "Avenida siempreviva 131" },
  { taller: "Poniente C", direccion: "Calle hola 123" },
  { taller: "Oriente B", direccion: "Avenida calle 77" },
  { taller: "Central", direccion: "Calle Sur 76" },
];

// visibilidad de campos por estado
const VISIBILIDAD = {
  grua: (estado) => ["ing", "eva"].includes(estado),
  taller: () => true,
};
const shouldShow = (campo, estado) =>
  VISIBILIDAD[campo] ? VISIBILIDAD[campo](estado) : true;

// ---- Datos iniciales (agregamos archivoNombre y archivoURL) ----
const SINIESTROS_INICIALES = [
  {
    patente: "GH-KX-32",
    modelo: "Chevrolet Durango",
    cliente: "Juan Pérez",
    rut: "22.564.244-4",
    telefono: "+56 9 1234 5678",
    email: "correo@gmail.com",
    numeroSiniestro: "5593930",
    estadoClase: "ret",
    fecha: "12/03/2024",
    poliza: "99994839",
    taller: "Sin asignar",
    grua: "Sin asignar",
    presupuesto: "",
    archivoNombre: "",
    archivoURL: "",
  },
  {
    patente: "00000",
    modelo: "Mercedez",
    cliente: "Javiz",
    rut: "777",
    telefono: "+499393",
    email: "correo2@gmail.com",
    numeroSiniestro: "1000234",
    estadoClase: "fin",
    fecha: "17-10-2004",
    poliza: "99994839",
    taller: "Sin asignar",
    grua: "Sin asignar",
    presupuesto: "",
    archivoNombre: "",
    archivoURL: "",
  },
];

// ---- Helpers ----
const toISO = (raw) => {
  if (!raw) return "";
  const sep = raw.includes("/") ? "/" : "-";
  const [dd, mm, yyyy] = raw.split(sep);
  if (!yyyy || !mm || !dd) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${yyyy}-${pad(mm)}-${pad(dd)}`;
};

const getEstado = (value) =>
  ESTADOS.find((e) => e.value === value) ?? { label: value, color: "#999999", value };

export default function GestionarSin() {
  const [data, setData] = useState(
    SINIESTROS_INICIALES.map((s) => ({ ...s, fechaISO: toISO(s.fecha) }))
  );

  const [filtros, setFiltros] = useState({
    fecha: "",
    estado: "",
    numeroSiniestro: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [modalForm, setModalForm] = useState({
    taller: "",
    grua: "",
    estado: "",
    archivo: null,        // File seleccionado en el modal
    archivoURL: "",       // Object URL del File
  });

  const openModal = (siniestro) => {
    setModalForm({
      taller: siniestro.taller ?? "",
      grua: siniestro.grua ?? "",
      estado: siniestro.estadoClase ?? "",
      archivo: null, // archivo nuevo (si se elige)
      archivoURL: siniestro.archivoURL || "", // si ya hay archivo, se mantiene
      archivoNombre: siniestro.archivoNombre || "", // nombre existente
    });
    setModalId(siniestro.numeroSiniestro);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalId(null);
    setModalForm({ taller: "", grua: "", estado: "", archivo: null, archivoURL: "" });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setData((prev) =>
      prev.map((s) =>
        s.numeroSiniestro === modalId
          ? {
            ...s,
            taller: modalForm.taller,
            grua: modalForm.grua,
            estadoClase: modalForm.estado,
            // Si hay nuevo archivo → usa ese, si no → mantiene el anterior
            archivoNombre:
              modalForm.archivo?.name || modalForm.archivoNombre || s.archivoNombre || "",
            archivoURL:
              modalForm.archivoURL || modalForm.archivoURL || s.archivoURL || "",
          }
          : s
      )
    );
    closeModal();
  };


  const handleResetFiltros = () => {
    setFiltros({ fecha: "", estado: "", numeroSiniestro: "" });
  };

  const siniestrosFiltrados = useMemo(() => {
    const pol = filtros.numeroSiniestro.trim().toLowerCase();
    return data.filter((s) => {
      const byFecha = !filtros.fecha || s.fechaISO === filtros.fecha;
      const byEstado = !filtros.estado || s.estadoClase === filtros.estado;
      const bySiniestro = !pol || String(s.numeroSiniestro).toLowerCase().includes(pol);
      return byFecha && byEstado && bySiniestro;
    });
  }, [data, filtros]);

  return (
    <main>
      <br />
      <div className="contenedor-principal">
        <section className="seccion_siniestros">
          {siniestrosFiltrados.map((s) => {
            const estado = getEstado(s.estadoClase);
            return (
              <div
                className="siniestro-card"
                key={s.numeroSiniestro}
                style={{ borderLeft: `5px solid ${estado.color}` }}
              >
                <div className="card-header">
                  <h2>#{s.numeroSiniestro}</h2>

                  <span
                    className="estado-badge"
                    style={{ backgroundColor: estado.color, color: "#fff" }}
                    aria-label={estado.label}
                    title={estado.label}
                  >
                    {estado.label.toUpperCase()}
                  </span>
                </div>

                <div className="card-details">
                  <div>
                    <p>{s.patente}</p>
                    <p>Póliza: {s.poliza}</p>
                    <p>Fecha Registro: {s.fecha}</p>
                    <p>Taller: {s.taller}</p>
                    {shouldShow("grua", s.estadoClase) && <p>Grúa: {s.grua}</p>}
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p>{s.cliente}</p>
                    <p>{s.rut}</p>
                    <p>{s.telefono}</p>
                    <p>{s.email}</p>

                    {/* DESCARGA DEL ARCHIVO GUARDADO */}
                    {s.archivoURL ? (
                      <p style={{ fontSize: 13 }}>
                        
                        <a href={s.archivoURL} download={s.archivoNombre}>
                          DESCARGAR PRESPUESTO
                        </a>
                      </p>
                    ) : (
                      <p style={{ fontSize: 13, opacity: 0.6 }}>📁 Sin presupuesto</p>
                    )}
                  </div>
                </div>

                <button className="btn" onClick={() => openModal(s)}>
                  GESTIONAR
                </button>
              </div>
            );
          })}
          {siniestrosFiltrados.length === 0 && (
            <p style={{ opacity: 0.7 }}>No hay resultados con estos filtros.</p>
          )}
        </section>

        <aside className="seccion-extra">
          <h2>𖤘 FILTRAR</h2>

          <label htmlFor="fecha">FECHA DE REGISTRO:</label>
          <input
            type="date"
            id="fecha"
            className="filtro"
            value={filtros.fecha}
            onChange={(e) => setFiltros((f) => ({ ...f, fecha: e.target.value }))}
          />

          <label htmlFor="estado">ESTADO:</label>
          <select
            id="estado"
            className="filtro"
            value={filtros.estado}
            onChange={(e) => setFiltros((f) => ({ ...f, estado: e.target.value }))}
          >
            <option value="">Seleccione estado...</option>
            {ESTADOS.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>

          <label htmlFor="numeroSiniestro">N° Siniestro:</label>
          <input
            type="text"
            id="numeroSiniestro"
            className="filtro"
            placeholder="Buscar póliza..."
            value={filtros.numeroSiniestro}
            onChange={(e) => setFiltros((f) => ({ ...f, numeroSiniestro: e.target.value }))}
          />

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
            <h2>Gestionar Siniestro</h2>

            <form id="gestion-form" onSubmit={handleModalSubmit}>
              {/* Taller con datalist */}
              <label htmlFor="modal-taller">Taller:</label>
              <input
                list="lista-talleres"
                id="modal-taller"
                name="taller"
                placeholder="Taller..."
                value={modalForm.taller}
                onChange={(e) => setModalForm((f) => ({ ...f, taller: e.target.value }))}
              />
              <datalist id="lista-talleres">
                {TALLERES.map((g) => (
                  <option key={g.taller} value={g.taller} label={`${g.direccion}`} />
                ))}
              </datalist>
              <small className="hint">Puedes elegir una de la lista o tipear otro taller.</small>

              {/* Grúa (visible según estado) */}
              {shouldShow("grua", modalForm.estado) && (
                <>
                  <label htmlFor="modal-grua">Grúa:</label>
                  <select
                    id="modal-grua"
                    name="grua"
                    value={modalForm.grua}
                    onChange={(e) => setModalForm((f) => ({ ...f, grua: e.target.value }))}
                  >
                    <option value="">Seleccione grúa…</option>
                    {GRUAS.map((g) => (
                      <option key={g.patente} value={g.patente}>
                        {g.patente} - {g.nombre}
                      </option>
                    ))}
                  </select>
                  <small className="hint">Elegir grúa por patente</small>
                </>
              )}

              {/* Estado */}
              <label htmlFor="modal-estado">Estado:</label>
              <select
                id="modal-estado"
                name="estado"
                value={modalForm.estado}
                onChange={(e) => setModalForm((f) => ({ ...f, estado: e.target.value }))}
              >
                {ESTADOS.map((e) => (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>

              {/* Archivo adjunto -> generamos Object URL para descargar en la card */}
              <br /><br />
              <br /><br />
              <label htmlFor="modal-archivo">Archivo adjunto:</label>
              <input
                type="file"
                id="modal-archivo"
                name="archivo"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  const url = file ? URL.createObjectURL(file) : modalForm.archivoURL || "";
                  setModalForm((f) => ({
                    ...f,
                    archivo: file,
                    archivoURL: url,
                    archivoNombre: file ? file.name : f.archivoNombre,
                  }));
                }}
                accept="application/pdf,image/*"
              />

              {/* Si ya hay archivo guardado */}
              {(modalForm.archivoNombre || modalForm.archivo) && (
                <p style={{ fontSize: 13, marginTop: 5 }}>
                  📎 Archivo actual:{" "}
                  <a
                    href={modalForm.archivoURL}
                    download={modalForm.archivoNombre}
                    style={{ color: "#007BFF", textDecoration: "underline" }}
                  >
                    {modalForm.archivoNombre}
                  </a>
                </p>
              )}

              <br /><br />
              <button type="submit" className="btn">GUARDAR CAMBIOS</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
