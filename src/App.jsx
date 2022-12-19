import "./App.css";
import "antd/dist/reset.css";
import { AuthProvider } from "./Context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./Components/ProtectedLayout";

import Home from "./Pages/Home";
import Destinos from "./Pages/Destinos";
import Promocoes from "./Pages/Promocoes";
import Contato from "./Pages/Contato"
import Cadastro from "./Pages/Cadastro";
import DashBoard from "./Pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <DashBoard/>
              </ProtectedLayout>
            }
          />
          <Route path="/" element={<Contato />} />
          <Route path="/destinos" element={<Destinos/>} />
          <Route path="/promocoes" element={<Promocoes/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
