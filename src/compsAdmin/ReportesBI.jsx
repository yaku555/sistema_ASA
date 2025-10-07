import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const datos_prueba = [
  { siniestro: 29394, estado: "EN EVALUACIÓN", comuna: "Independencia", fecha: "2023-09-15" },
  { siniestro: 29395, estado: "EN REPARACIÓN", comuna: "Providencia", fecha: "2023-09-16" },
  { siniestro: 29396, estado: "FINALIZADO", comuna: "Independencia", fecha: "2023-09-17" },
  { siniestro: 29397, estado: "EN EVALUACIÓN", comuna: "Ñuñoa", fecha: "2023-09-18" },
];

export default function ReportesBI() {
  const conteo = {};
  datos_prueba.forEach(dato => {
    if (conteo[dato.comuna]) {
      conteo[dato.comuna] += 1;
    } else {
      conteo[dato.comuna] = 1;
    }
  });

  const data = {
    labels: Object.keys(conteo),
    datasets: [
      {
        data: Object.values(conteo),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8BC34A"],
      },
    ],
  };

  return (
    <div>
      <h3>Siniestros por comunas</h3>
      <div style={{ width: 200, height: 200 }}>
        <Pie data={data} />

      </div>
    </div>
  );
}