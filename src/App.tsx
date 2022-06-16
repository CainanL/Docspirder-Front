import { Header } from "./components/Header";
import { Routes } from "./routes/index.routes";
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
