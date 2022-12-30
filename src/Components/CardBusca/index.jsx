import { Button, Card } from "antd";
import {
    SwapRightOutlined,
    SwapLeftOutlined,
    
  } from "@ant-design/icons";

const CardBusca = (infos)=>{

const { origem, destino, value, ida, volta} = infos;
    return(
<Card style={{width:"300px", backgroundColor:"#B0C4DE", textAlign:"center"}}>
    <h3 style={{ fontSize:"20px"}}>{origem} <SwapRightOutlined style={{color:"#B22222", fontSize:"30px"}} /></h3>
  
    <h3 style={{fontSize:"20px"}}>{destino} <SwapLeftOutlined style={{color:"#00FF00", fontSize:"30px"}}/></h3>
    <p>Ida: {ida}</p>
    <p>Volta: {volta}</p>
    <h3 style={{fontSize:"20px", color:"#CD853F"}}>{value}</h3>
   
    <Button href="/destinos">Comprar</Button>
</Card>
    )
}
export default CardBusca;