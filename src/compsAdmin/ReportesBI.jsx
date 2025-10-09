import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

// Datos de prueba
const datos_prueba = [
  { siniestro: 29394, estado: "EN EVALUACIÓN", comuna: "Independencia", fecha: "2023-09-15" },
  { siniestro: 29395, estado: "EN REPARACIÓN", comuna: "Providencia", fecha: "2023-09-16" },
  { siniestro: 29396, estado: "FINALIZADO", comuna: "Independencia", fecha: "2023-09-17" },
  { siniestro: 29397, estado: "REINGRESADO", comuna: "Ñuñoa", fecha: "2023-09-18" },
];

// Función para contar ocurrencias por campo
const contar = (arr, campo) =>
  arr.reduce((acc, item) => ((acc[item[campo]] = (acc[item[campo]] || 0) + 1), acc), {});


// Configuración del gráfico
const grafico = conteo => ({
  labels: Object.keys(conteo),
  datasets: [
    {
      data: Object.values(conteo),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8BC34A"],
    },
  ],
});

export default function ReportesBI() {
  return (
    <div className="dashboard-cards">
      <div className="dashboard-card">
        <h3>Siniestros por comunas</h3>
        <div style={{ width: 200, height: 200 }}>
          <Pie data={grafico(contar(datos_prueba, "comuna"))} />
        </div>
      </div>
      <div className="dashboard-card">
        <h3>Siniestros por estado</h3>
        <div style={{ width: 200, height: 200 }}>
          <Pie data={grafico(contar(datos_prueba, "estado"))} />
        </div>
      </div>
    </div>
  );
}