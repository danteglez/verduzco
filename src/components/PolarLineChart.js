import Plot from 'react-plotly.js';

export default function PolarLineChart() {
  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          mode: 'lines+markers',
          r: [2, 3, 1, 5, 4, 3, 2],
          theta: [0, 60, 120, 180, 240, 300, 360],
          line: {
            color: 'royalblue'
          },
          name: 'Serie A'
        }
      ]}
      layout={{
        title: 'Gráfico Polar de Líneas',
        polar: {
          radialaxis: { visible: true, range: [0, 6] },
          angularaxis: { rotation: 90 }
        },
        showlegend: true,
        responsive: true
      }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler={true}
    />
  );
}
