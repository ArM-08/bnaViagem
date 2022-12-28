import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CardCarrinho from "../CardCarrinho";

const Carrinho = () => {
  const context = useContext(CartContext);
  const { carrinho } = context;
  const total = carrinho.reduce(
    (acc, produto) => produto.value * produto.quantidade + acc,
    0
  );

  return (
    <div>
      {carrinho.map((destino) => (
        <CardCarrinho destino={destino} key={destino.id} />
      ))}
      {carrinho.length >= 1 && (
        <div>
          <h3> Valor Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
        </div>
      )}
      {carrinho.length === 0 && <h2>Carrinho Vazio</h2>}
    </div>
  );
};

export default Carrinho;
