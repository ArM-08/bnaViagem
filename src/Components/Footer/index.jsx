import {Col, Row} from "antd"
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons"


const Footer = () => {
    return (
      <div>
        <Row
        style={{
          textAlign: "center",
          width:"100%",
          borderTop: "1px solid",
          borderBottom: "1px solid",
          display: "flex",
          flexDirection: "Row"
        }}
      >
        <Col
        style={{
          textAlign: "start",
          width:"50%",
         
        }}>
          <h4> Bruh Viagem ©2022 </h4>
       
        </Col>
        <Col
        style={{
         textAlign:"end",
          width:"50%",

        }}>
        <h6 style={{fontSize: "16px"}}>Redes Sociais </h6>
        </Col>
      </Row>
      <Row 
      style={{
          textAlign: 'center',
          width:"100%",
        }}>
         Footer
      </Row>

      </div>
    )
}
export default Footer