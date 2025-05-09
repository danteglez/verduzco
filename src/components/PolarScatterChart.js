import Plot from 'react-plotly.js';

export default function PolarScatterChart() {
  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          mode: 'markers',
          r: [1, 2, 3, 4, 5, 6],
          theta: [0, 45, 90, 135, 180, 225],
          marker: {
            color: 'tomato',
            size: 12,
            symbol: 'circle'
          },
          name: 'Muestras'
        }
      ]}
      layout={{
        title: 'Gráfico Polar de Dispersión',
        polar: {
          radialaxis: { visible: true, range: [0, 7] },
          angularaxis: { direction: 'counterclockwise' }
        },
        showlegend: true,
        responsive: true
      }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler={true}
    />
  );
}
