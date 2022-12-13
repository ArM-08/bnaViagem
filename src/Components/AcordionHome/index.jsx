import { Row, Col, Button } from "antd";
import Onibus from "./../../assets/images/passagemOnibus.png"
const AcordionHome= () => {
  return (
    <div>
      <Row
        style={{
          width: "70%",
          backgroundColor: "#006400",
          height: "180px",
          minHeight: "120px",
          minWidth: "200px",
          margin: "0 auto",
          marginTop: "50px",
          borderRadius:"10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",
          justifyContent:"center"
        }}
      >
        <Col
         style={{
          width: "35%",
          }}>
        <img 
        style={{ width:"200px", height:"150px"}}
        src={Onibus}></img>
        </Col>
        <Col
         style={{
          width: "40%",}}>
        <h2 style={{color:"#FFF" }}>
        Compre sua passagem de ônibus
        </h2>
        <h3 style={{color:"#FFF" }}>Viaje de ônibus com o Bruh e conte com mais de 4.800 destinos para curtir!</h3>
        </Col>
        <Col
         style={{
          marginLeft: "10px",
          alignSelf:"center",
          width: "10%",}}>
        <Button>Saiba Mais</Button>
        </Col>
      </Row>
    </div>
  );
};
export default AcordionHome;
