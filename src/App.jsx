import "./App.css";
import "antd/dist/reset.css";
import { AuthProvider } from "./Context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./Components/ProtectedLayout";

import Home from "./Pages/Home";
import Destinos from "./Pages/Destinos";
import Promocoes from "./Pages/Promocoes";
import Contato from "./Pages/Contato"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <h2>Bem vindo</h2>
              </ProtectedLayout>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos/>} />
          <Route path="/promocoes" element={<Promocoes/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
