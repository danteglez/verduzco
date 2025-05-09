import Plot from 'react-plotly.js';

export default function PolarScatterPlot() {
  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          r: [1, 2, 3, 4, 5],
          theta: [0, 45, 90, 135, 180],
          mode: 'markers',
          marker: { color: 'red', size: 10 }
        }
      ]}
      layout={{ title: 'Polar Scatter Plot', polar: { radialaxis: { visible: true } }, showlegend: false }}
    />
  );
}