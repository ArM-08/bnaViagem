import { CalendarOutlined, CheckOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card, message } from "antd";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CardPassagem = ({ destino }) => {
  const context = useContext(CartContext);
  const { adicionaAoCarrinho } = context;
  const { Meta } = Card;

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Adicionado ao Carrinho',
    });
  };
const handleClick = () => {
   adicionaAoCarrinho(destino)
    success()
  }
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
          <div>
          <p>
            <CalendarOutlined /> {destino.diaria}
            <br />
            <CheckOutlined /> {destino.hospedagem}
            <br />
            <CheckOutlined /> {destino.passagemaerea}
            <br />
            
            A partir de
            </p>
            <h2 style={{fontSize:"20px", color:"#D35400"}}>
            R${destino.value}
            </h2>
            </div>
        }
      />
      {contextHolder}
      <Button
        onClick={handleClick} 
        
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
