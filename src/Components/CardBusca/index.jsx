import { Button, Card } from "antd";
import {
    SwapRightOutlined,
    SwapLeftOutlined,
    
  } from "@ant-design/icons";
  import "./index.css"

const CardBusca = (infos)=>{

const { origem, destino, value, ida, volta} = infos;
    return(
        
<Card className="cardBusca" >
    <h3 >{origem} <SwapRightOutlined className="iconIda"/></h3>
  
    <h3 >{destino} <SwapLeftOutlined className="iconVolta"/></h3>
    <p>Ida: {ida}</p>
    <p>Volta: {volta}</p>
    <h3 className="precoBusca">{value}</h3>
   
    <Button href="/destinos">Comprar</Button>
</Card>

    )
}
export default CardBusca;