import Plot from 'react-plotly.js';

export default function PolarBarChart() {
  return (
    <Plot
      data={[
        {
          type: 'barpolar',
          r: [77, 88, 70, 60, 90, 110, 130, 105, 95, 85, 80, 75],
          theta: [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
          ],
          name: 'Temperatura promedio',
          marker: {
            color: [
              '#FFB6C1', '#FFA07A', '#FFD700', '#ADFF2F',
              '#7FFFD4', '#40E0D0', '#1E90FF', '#4169E1',
              '#8A2BE2', '#DA70D6', '#FF69B4', '#FF6347'
            ]
          }
        }
      ]}
      layout={{
        title: 'Gráfico Polar de Barras – Temperaturas',
        font: { size: 16 },
        polar: {
          radialaxis: { ticksuffix: '°C', angle: 45 },
          angularaxis: { direction: "clockwise" }
        },
        showlegend: true,
        responsive: true
      }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler={true}
    />
  );
}
