import './style.css';
import { Header } from './components/Header';
import { Worth } from './components/Worth';
import { SneakerList } from './components/SneakerList';
import { AddSneaker } from './components/AddSneaker';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Worth />
        <SneakerList />
        <AddSneaker />
      </div>
    </div>
  );
}

export default App;
