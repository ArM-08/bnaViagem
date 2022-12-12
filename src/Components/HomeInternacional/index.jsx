import { Card, Row } from "antd";
import Roma from "./../../assets/images/roma.png"
import Madrid from "./../../assets/images/madrid.png"
import Bruxelas from "./../../assets/images/bruxelas.png"
import Paris from "./../../assets/images/paris.png"
import { CalendarOutlined, CheckOutlined  } from "@ant-design/icons"


const { Meta } = Card;

const HomeInternacional = () => {
   
    return (
        <div
        style={{margin: '0 auto', width: "70%", marginTop: "30px"}}
        >
            <h1>Viagens internacionais</h1>
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
          cover = {<img alt="example" src={Roma} />}
          style={{
            width: 300,
            height: 'auto',}}
            >
 <Meta title="Pacote de Viagem - Roma + Paris + Amsterdam - 2025" description={<p><CalendarOutlined />15 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 4620<br/>

Em até 12x</p>} />
            </Card>
        
    
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Madrid} />}
          style={{
            width: 300,
            height: 'auto',}}
            >
 <Meta title="Pacote de Viagem - Madrid + Barcelona + Lisboa - 2025" description={<p><CalendarOutlined />15 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 3980<br/>

Em até 12x</p>}/>
            </Card>
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Bruxelas} />}
          style={{
            width: 300,
            height: 'auto',
            }}
            >
            <Meta title="Pacote de Viagem - Bruxelas + Luxemburgo + Amsterdam - 2025" description={<p><CalendarOutlined />12 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 8479<br/>

+ taxas | Em até 12x</p>}
style={{display: "flex",
overflowWrap: "break-word",
flexWrap: "wrap"}}
/>
        </Card>
        <Card
          bordered={false}
          hoverable="true"
          cover = {<img alt="example" src={Paris} />}
          style={{
            width: 300,
            height: 'auto',}}
        >
 <Meta title="Pacote de Viagem - Paris + Bruxelas + Bruges - 2024"description={<p><CalendarOutlined />12 diárias<br/>
<CheckOutlined /> Hospedagem<br/>
<CheckOutlined /> Passagem Aérea<br/>

A partir de 
R$ 9338<br/>

+ taxas | Em até 12x</p>} />
            </Card>
      </Row>

        </div>


    )
}

export default HomeInternacional;