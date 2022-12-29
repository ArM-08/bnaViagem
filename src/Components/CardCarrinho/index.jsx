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
    width: "30%",
    textAlign: "center",
    border: "none",
  };
  const gridStyle1 = {
    width: "70%",
    minWidth: "240px",
    textAlign: "start",
    border: "none",
    height: "auto",
    paddingBottom: "0",
  };

  return (
    <Card>
      <Card.Grid  hoverable={false} style={gridStyle1}>
        <img width="200px" src={destino.imageUrl} />
        <h3>{destino.name}</h3>
      </Card.Grid>

      <Card.Grid  hoverable={false} style={gridStyle2}>
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
