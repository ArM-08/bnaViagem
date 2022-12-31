import { Row, Col, Button } from "antd";
import Onibus from "./../../assets/images/passagemOnibus.png";
import "./index.css"


const AcordionHome = () => {
  return (
    <div>
      <Row
        className="acordionHome"
        justify="center"
        align="middle"
      >
        <Col xl={8} align="center">
          <img className="imgAcordion" src={Onibus}></img>
        </Col>
        <Col xl={9}>
          <h2 className="textAcordion">Compre sua passagem de ônibus</h2>
          <h3 className="textAcordion">
            Viaje de ônibus com o BNA Viagem e conte com mais de 2.800 destinos para
            curtir!
          </h3>
        </Col>
        <Col
        className="colButton"
          xl={6}
          align="center"
        >
          <Button>Saiba Mais</Button>
        </Col>
      </Row>
    </div>
  );
};
export default AcordionHome;
