import Plot from 'react-plotly.js';

export default function PolarBarPlot() {
  return (
    <Plot
      data={[
        {
          type: 'barpolar',
          r: [1, 2, 3, 4],
          theta: [0, 90, 180, 270],
          marker: { color: ['red', 'green', 'blue', 'orange'] }
        }
      ]}
      layout={{ title: 'Polar Bar Plot', polar: { radialaxis: { visible: true } }, showlegend: false }}
    />
  );
}