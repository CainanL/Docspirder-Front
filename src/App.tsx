import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { SidebarDrawerProvider } from "./hooks/SidebarContext";
import { Routes } from "./routes/index.routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarDrawerProvider>
          <Header />
          <Routes />
          <ToastContainer />
        </SidebarDrawerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
