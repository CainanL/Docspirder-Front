import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarDrawerProvider } from "./hooks/SidebarContext";
import { Routes } from "./routes/index.routes";
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarDrawerProvider>
          <Header />
          <Routes />
        </SidebarDrawerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
