import { useState } from 'react';
import PolarBarChart from './components/PolarBarChart';
import PolarScatterChart from './components/PolarScatterChart';
import PolarLineChart from './components/PolarLineChart';

function App() {
  const [chart, setChart] = useState('bar');

  const renderChart = () => {
    switch (chart) {
      case 'bar': return <PolarBarChart />;
      case 'scatter': return <PolarScatterChart />;
      case 'line': return <PolarLineChart />;
      default: return null;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gráficas Polares</h1>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setChart('bar')}>Barra</button>
        <button onClick={() => setChart('scatter')}>Dispersión</button>
        <button onClick={() => setChart('line')}>Líneas</button>
      </div>
      {renderChart()}
    </div>
  );
}

export default App;