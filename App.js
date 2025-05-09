import React, { useState } from 'react';
import PolarScatterPlot from './PolarScatterPlot';
import PolarLinePlot from './PolarLinePlot';
import PolarBarPlot from './PolarBarPlot';

function App() {
  const [plot, setPlot] = useState('scatter');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Gráficos Polares con Plotly</h1>
      <button onClick={() => setPlot('scatter')}>Scatter</button>
      <button onClick={() => setPlot('line')}>Line</button>
      <button onClick={() => setPlot('bar')}>Bar</button>

      <div style={{ marginTop: 20 }}>
        {plot === 'scatter' && <PolarScatterPlot />}
        {plot === 'line' && <PolarLinePlot />}
        {plot === 'bar' && <PolarBarPlot />}
      </div>
    </div>
  );
}

export default App;