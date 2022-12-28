import "antd/dist/reset.css";
import { AuthProvider } from "./Context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./Components/ProtectedLayout";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Destinos from "./Pages/Destinos";
import Promocoes from "./Pages/Promocoes";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import DashBoard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { CartContext } from "./Context/CartContext";
import destino from "./Components/BdDestinos/destino.json";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const [quantidade, setQuantidade] = useState(0);

  const adicionaAoCarrinho = (destinoAAdicionar) => {
    const novoCarrinho = [...carrinho];

    const destinoAchado = novoCarrinho.find(
      (destinoNoCarrinho) => destinoNoCarrinho.id === destinoAAdicionar.id
    );

    if (!destinoAchado) {
      const novodestino = {
        ...destinoAAdicionar,
        quantidade: 1,
      };
      setQuantidade(quantidade + 1);
      novoCarrinho.push(novodestino);
    } else {
      setQuantidade(quantidade + 1);
      destinoAchado.quantidade++;
    }

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const adicionaQuantidadeNoCarrinho = (destinoASomar) => {
    const novoCarrinho = [...carrinho];
    const destinoAchado = novoCarrinho.find(
      (destinoNoCarrinho) => destinoNoCarrinho.id === destinoASomar.id
    );

    destinoAchado.quantidade++;

    setQuantidade(quantidade + 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const diminuiQuantidadeNoCarrinho = (destinoADiminuir) => {
    const novoCarrinho = [...carrinho];
    const destinoAchado = novoCarrinho.find(
      (destinoNoCarrinho) => destinoNoCarrinho.id === destinoADiminuir.id
    );

    destinoAchado.quantidade--;

    setQuantidade(quantidade - 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const deletaDoCarrinho = (destinoADeletar) => {
    const novoCarrinho = [...carrinho];

    const indexAchado = novoCarrinho.findIndex(
      (destinoNoCarrinho) => destinoNoCarrinho.id === destinoADeletar.id
    );
    setQuantidade(quantidade - carrinho[indexAchado].quantidade);
    novoCarrinho.splice(indexAchado, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade - 1));
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("carrinho"));
    if (listaJson) {
      setCarrinho(listaJson);
    }
  }, []);

  useEffect(() => {
    if (quantidade > 0) {
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }
  }, [quantidade]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("quantidade"));
    if (listaJson) {
      setQuantidade(listaJson);
    }
  }, []);

  const context = {
    carrinho,
    setCarrinho,
    adicionaAoCarrinho,
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
    destino,
    quantidade,
  };

  return (
    <CartContext.Provider value={context}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="promocoes" element={<Promocoes />} />
            <Route path="contato" element={<Contato />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <ProtectedLayout>
                  <DashBoard />
                </ProtectedLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CartContext.Provider>
  );
}

export default App;
