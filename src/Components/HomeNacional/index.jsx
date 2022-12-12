import { Card, Row } from "antd";
import Vitoria from "./../../assets/images/vitoria.png"
import JP from "./../../assets/images/joaopessoa.png"
import Rio from "./../../assets/images/rio.png"
import Noronha from "./../../assets/images/noronha.png"
import { CalendarOutlined, CheckOutlined,  } from "@ant-design/icons"

const { Meta } = Card;


const HomeNacional = () => {
   
    return (
        <div
        style={{margin: '0 auto', width: "70%", marginTop: "30px"}}
        >
            <h1>Viagens nacionais</h1>
            <Row
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap:"20px"
        }}
      >
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Noronha} />}
          style={{
            width: 300,
            height: 'auto',}}
            >
 <Meta title="Pacote de Viagem - Fernando de Noronha - 2024" description={<p><CalendarOutlined /> 4 diárias<br/>
 <CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 1860<br/>

Em até 12x</p>} />
            </Card>
        
    
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Vitoria} />}
          style={{
            width: 300,
            height: 'auto',}}
            >
 <Meta title="Pacote de Viagem - Vitória + Passeio a Praia de Guarapari - 2023" description={<p><CalendarOutlined /> 3, 4 ou 5 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 1499<br/>

Em até 12x</p>}/>
            </Card>
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={JP} />}
          style={{
            width: 300,
            height: 'auto',
            }}
            >
            <Meta title="Pacote de Viagem - João Pessoa - Viaje em Março ou Abril - 2023" description={<p><CalendarOutlined /> 3 ou 5 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 2399<br/>

Em até 12x</p>}
style={{display: "flex",
overflowWrap: "break-word",
flexWrap: "wrap"}}
/>
        </Card>
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Rio} />}
          style={{
            width: 300,
            height: 'auto',}}
        >
 <Meta title="Pacote de Viagem - CDesign Hotel (Rio de Janeiro) - 2023"description={<p><CalendarOutlined /> 3 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 1196<br/>

Em até 12x</p>} />
            </Card>
      </Row>

        </div>


    )
}

export default HomeNacional;