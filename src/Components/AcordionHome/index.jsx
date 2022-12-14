import { Row, Col, Button } from "antd";
import Onibus from "./../../assets/images/passagemOnibus.png"
const AcordionHome= () => {
  return (
    <div>
      <Row
      justify="center"
      align="middle"
        style={{
          width: "70%",
          backgroundColor: "#006400",
         height:"auto",
          minHeight: "120px",
          minWidth: "200px",
          margin: "0 auto",
          marginTop: "50px",
          borderRadius:"10px",
          display: "flex",

          padding: "10px",
          
        }}
      >
        <Col xl={8}
        align = "center"
         >
        <img 
        style={{ width:"200px", height:"150px"}}
        src={Onibus}></img>
        </Col>
        <Col xl={9}
         >
        <h2 style={{color:"#FFF" }}>
        Compre sua passagem de ônibus
        </h2>
        <h3 style={{color:"#FFF" }}>Viaje de ônibus com o Bruh e conte com mais de 4.800 destinos para curtir!</h3>
        </Col>
        <Col xl={6}
        align = "center"
         style={{
          marginLeft: "10px",
        }}>
        <Button>Saiba Mais</Button>
        </Col>
      </Row>
    </div>
  );
};
export default AcordionHome;
