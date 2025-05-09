import Plot from 'react-plotly.js';

export default function PolarLinePlot() {
  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          r: [1, 2, 3, 4, 5],
          theta: [0, 45, 90, 135, 180],
          mode: 'lines',
          line: { color: 'blue' }
        }
      ]}
      layout={{ title: 'Polar Line Plot', polar: { radialaxis: { visible: true } }, showlegend: false }}
    />
  );
}