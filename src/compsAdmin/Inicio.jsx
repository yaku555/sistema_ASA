import React from "react";

export default function Inicio() {
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
    </main>
  );
}