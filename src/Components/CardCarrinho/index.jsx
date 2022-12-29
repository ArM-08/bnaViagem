import { Button, Card, Image } from "antd";
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

 

  return (
    <Card style={{minWidth: "250px"}} >
      <div style={{alignText:"start", display:"flex", alignItems:"center", gap:"2vh", flexWrap:"wrap" }}>
        <Image width="200px" preview= {false} src={destino.imageUrl} />
        <h3 style={{width:"35%"}}>{destino.name}</h3>
        <h3 style={{width:"35%"}}>R$ {destino.value.toFixed(2).replace(".", ",")}</h3>
        <div>
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
        </div>
        </div>
        <div style={{alignText:"end", display:"flex", flexDirection: "column",}}>
        
        </div>
      

      
    </Card>
  );
};
export default CardCarrinho;
