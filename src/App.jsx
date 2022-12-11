import "./App.css";
import "antd/dist/reset.css";
import { AuthProvider } from "./Context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./Components/ProtectedLayout";

import Home from "./Pages/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <h2>Bem VIndo</h2>
              </ProtectedLayout>
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
