import './style.css';
import { Header } from './components/Header';
import { Worth } from './components/Worth';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Worth />
      </div>
    </div>
  );
}

export default App;
