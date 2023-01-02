import { Button, Card, message, Popconfirm } from "antd";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  MinusCircleTwoTone,
  PlusCircleTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import "./index.css"

const CardCarrinho = ({ destino }) => {
  const context = useContext(CartContext);
  const {
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = context;

  const totalPorItem = destino.value * destino.quantidade;

 

  const confirm = (e) => {
    deletaDoCarrinho(destino)
    console.log(e);
    message.success('Deletado com sucesso');
  };



  return (
    <Card className="cardCarrinho">
      <Card.Grid  hoverable={false} className="cardGrid1">
        <img src={destino.imageUrl} />
        <h3>{destino.name}</h3>
      </Card.Grid>

      <Card.Grid  hoverable={false} className="cardGrid2">
        <h3>R$ {destino.value.toFixed(2).replace(".", ",")}</h3>
        {destino.quantidade > 1 && (
          <Button
            size="small"
            shape="circle"
            icon={<MinusCircleTwoTone />}
            onClick={() => diminuiQuantidadeNoCarrinho(destino)}
          />
        )}
        {
          <Button
            size="small"
            shape="circle"
            icon={<PlusCircleTwoTone />}
            onClick={() => adicionaQuantidadeNoCarrinho(destino)}
          />
        }
        {<span>Quant: {destino.quantidade}</span>}
        {
          <Popconfirm
          title="Deseja deletar o item do carrinho?"
          description="Deseja deletar do carrinho?"
          onConfirm={confirm}
          okText="Sim"
          cancelText="Não"
        >
          <Button
            size="small"
            shape="circle"
            icon={<DeleteTwoTone />}
            
          />
        </Popconfirm>
          
        }
        <h4>
          Subtotal ({destino.quantidade} itens) R${" "}
          {totalPorItem.toFixed(2).replace(".", ",")}
        </h4>
      </Card.Grid>
    </Card>
  );
};
export default CardCarrinho;
