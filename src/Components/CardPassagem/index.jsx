import { CalendarOutlined, CheckOutlined  } from "@ant-design/icons"
import { Card} from "antd";

const { Meta } = Card;

const CardPassagem = ({img, title, diaria, hospedagem, passagemaerea, valor, parcelas}) => {
    return(
        <Card
        bordered={false}
        hoverable="true"
        cover = {<img alt="example" src={img} />}
        style={{
          width: 300,
          height: '450px',}}
          >
<Meta title={title} description={<p><CalendarOutlined /> {diaria}<br/>
<CheckOutlined/> {hospedagem}<br/>
<CheckOutlined/> {passagemaerea}<br/>

A partir de <br/>
{valor}<br/>

{parcelas}</p>} />
          </Card>
    )
}
export default CardPassagem;