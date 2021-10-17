import './style.css';
import { Header } from './components/Header';
import { Worth } from './components/Worth';
import { SneakerList } from './components/SneakerList';
import { AddSneaker } from './components/AddSneaker';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <SneakerList />
      </div>
    </GlobalProvider>
  );
}

export default App;