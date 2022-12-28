import { Button, Card } from "antd";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  MinusCircleTwoTone,
  PlusCircleTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";

const CardCarrinho = ({ destino }) => {
  const context = useContext(CartContext);
  const {
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = context;

  const totalPorItem = destino.value * destino.quantidade;
  const gridStyle2 = {
    width: "50%",
    textAlign: "end",
    border: "1px solid #EEE",
  };
  const gridStyle1 = {
    width: "50%",
    textAlign: "center",
    border: "1px solid #EEE",
  };

  return (
    <Card hoverable={false}>
      <Card.Grid style={gridStyle1}>
        <img width="200px" src={destino.imageUrl} />
        <h3>{destino.name}</h3>
      </Card.Grid>

      <Card.Grid style={gridStyle2}>
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
          <Button
            size="small"
            shape="circle"
            icon={<DeleteTwoTone />}
            onClick={() => deletaDoCarrinho(destino)}
          />
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
