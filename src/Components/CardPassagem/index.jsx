import { CalendarOutlined, CheckOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CardPassagem = ({ destino }) => {
  const context = useContext(CartContext);
  const { adicionaAoCarrinho } = context;
  const { Meta } = Card;

  return (
    <Card
      key={destino.id}
      bordered={false}
      hoverable="true"
      cover={<img alt="example" src={destino.imageUrl} />}
      style={{
        width: 300,
        height: "470px",
      }}
    >
      <Meta
        title={destino.name}
        description={
          <p>
            <CalendarOutlined /> {destino.diaria}
            <br />
            <CheckOutlined /> {destino.hospedagem}
            <br />
            <CheckOutlined /> {destino.passagemaerea}
            <br />
            A partir de <br />
            R${destino.value}
            <br />
            {destino.parcelas}
          </p>
        }
      />
      <Button
        onClick={() => adicionaAoCarrinho(destino)} 
        type="primary"
        style={{ marginBottom: "10px", 
        fontWeight: "bold" }}
      >
        <PlusCircleOutlined /> Carrinho
      </Button>
    </Card>
  );
};
export default CardPassagem;
