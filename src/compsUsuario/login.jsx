import React, { useState } from "react";
import "../estilos/registro.css";

const user = { usuario: "admin", contrasena: "1234" };

export default function Login() {
  const [form, setForm] = useState({
    usuario: "",
    contrasena: "",
    nombre: "",
    email: "",
    patente: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.usuario.trim() || !form.contrasena.trim()) {
      alert("Completa todos los campos para iniciar sesión");
      return;
    }
    if (form.usuario === user.usuario && form.contrasena === user.contrasena) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !form.usuario.trim() ||
      !form.contrasena.trim() ||
      !form.nombre.trim() ||
      !form.email.trim() ||
      !form.patente.trim()
    ) {
      alert("Completa todos los campos para registrarte");
      return;
    }
    alert("Registro exitoso");
    // Aquí podrías agregar lógica para guardar el usuario
  };

  return (
    <main>
      <h1>Login / Registro</h1>
      <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
        {/* Login */}
        <div className="registro-card">
          <form className="registro-grid" onSubmit={handleLogin}>
            <div className="registro-row two">
              <div className="registro-group">
                <label>Usuario *</label>
                <input
                  type="text"
                  className="filtro"
                  placeholder="Usuario"
                  name="usuario"
                  value={form.usuario}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="registro-group">
                <label>Contraseña *</label>
                <input
                  type="password"
                  className="filtro"
                  placeholder="Contraseña"
                  name="contrasena"
                  value={form.contrasena}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="registro-actions">
              <button type="submit" className="btn">
                INGRESAR
              </button>
            </div>
          </form>
        </div>

        {/* Registro */}
        <div className="registro-card">
          <form className="registro-grid" onSubmit={handleRegister}>
            <div className="registro-row two">
              <div className="registro-group">
                <label>Usuario *</label>
                <input
                  type="text"
                  className="filtro"
                  placeholder="Usuario"
                  name="usuario"
                  value={form.usuario}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="registro-group">
                <label>Contraseña *</label>
                <input
                  type="password"
                  className="filtro"
                  placeholder="Contraseña"
                  name="contrasena"
                  value={form.contrasena}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="registro-row two">
              <div className="registro-group">
                <label>Nombre *</label>
                <input
                  type="text"
                  className="filtro"
                  placeholder="Nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="registro-group">
                <label>Email *</label>
                <input
                  type="email"
                  className="filtro"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="registro-row one">
              <div className="registro-group">
                <label>Patente *</label>
                <input
                  type="text"
                  className="filtro"
                  placeholder="Patente"
                  name="Patente"
                  value={form.patente}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="registro-actions">
              <button type="submit" className="btn">
                REGISTRARSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}