import React, { useState } from "react";
import "../estilos/registro.css";


// Componente para registrar un nuevo siniestro
export default function RegistrarSin() {
  const [form, setForm] = useState({
    patente: "",
    modelo: "",
    cliente: "",
    rut: "",
    telefono: "",
    email: "",
    numeroSiniestro: "",
    poliza: "",
    fecha: "",
    descripcion: "",
    archivo: null,
  });

  // Manejo de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const datosCompletos = {
      patente: form.patente,
      modelo: form.modelo,
      cliente: form.cliente,
      rut: form.rut,
      telefono: form.telefono,
      email: form.email,
      numeroSiniestro: form.numeroSiniestro,
      poliza: form.poliza,
      fecha: form.fecha,
      descripcion: form.descripcion,
      estadoClase: "",
      taller: "Sin asignar",
      grua: "Sin asignar",
      archivoNombre: form.archivo ? form.archivo.name : "",

    };

    console.log("📋 Datos del nuevo siniestro registrado:");
    console.log(datosCompletos);
    alert("✅ Siniestro registrado (revisa la consola)");
  };

  return (
    <main>
      <h1>Registrar Siniestro</h1>

      <div className="registro-card">
        <form className="registro-grid" onSubmit={handleSubmit}>
          {/* --- Vehículo --- */}
          <div className="registro-row two">
            <div className="registro-group">
              <label>Patente *</label>
              <input
                type="text"
                className="filtro"
                placeholder="AA-BB-11"
                name="patente"
                value={form.patente}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-group">
              <label>Modelo</label>
              <input
                type="text"
                className="filtro"
                placeholder="Chevrolet, Toyota..."
                name="modelo"
                value={form.modelo}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr className="registro-divider" />

          {/* --- Cliente --- */}
          <div className="registro-row two">
            <div className="registro-group">
              <label>Cliente *</label>
              <input
                type="text"
                className="filtro"
                placeholder="Nombre y apellido"
                name="cliente"
                value={form.cliente}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-group">
              <label>RUT</label>
              <input
                type="text"
                className="filtro"
                placeholder="12.345.678-9"
                name="rut"
                value={form.rut}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="registro-row two">
            <div className="registro-group">
              <label>Teléfono</label>
              <input
                type="tel"
                className="filtro"
                placeholder="+56 9 ..."
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="registro-group">
              <label>Email</label>
              <input
                type="email"
                className="filtro"
                placeholder="correo@dominio.com"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr className="registro-divider" />

          {/* --- Siniestro --- */}
          <div className="registro-row two">
            <div className="registro-group">
              <label>N° de Siniestro *</label>
              <input
                type="text"
                className="filtro"
                placeholder="Ej. 5593930"
                name="numeroSiniestro"
                value={form.numeroSiniestro}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-group">
              <label>N° de Póliza *</label>
              <input
                type="text"
                className="filtro"
                placeholder="Ej. 99994839"
                name="poliza"
                value={form.poliza}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="registro-row two">
            <div className="registro-group">
              <label>Fecha de registro *</label>
              <input
                type="date"
                className="filtro"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registro-group">
              <label>Descripción (opcional)</label>
              <textarea
                className="filtro registro-textarea"
                rows={3}
                placeholder="Breve descripción..."
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* --- Archivo --- */}
          <div className="registro-row one">
            <div className="registro-group">
              <label>Archivo adjunto (opcional)</label>
              <input
                type="file"
                className="filtro"
                name="archivo"
                accept="application/pdf,image/*"
                onChange={handleChange}
              />
              {form.archivo && (
                <small className="hint">📎 {form.archivo.name}</small>
              )}
            </div>
          </div>

          <div className="registro-actions">
            <button type="submit" className="btn">
              REGISTRAR
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
