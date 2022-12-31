import { Card, Row } from "antd";
import "./index.css";

const PromoHome = () => {
  return (
    <div className="containerPromo">
      <h1>Pacotes para economizar</h1>

      <Row
      className="rowPromo"
      xl={12}
      >
        <Card
        className="CardPromo1"
          bordered={false}
          hoverable="true"
          
        />
        <Card
          bordered={false}
          hoverable="true"
          className="CardPromo2"
        />
        <Card
          bordered={false}
          hoverable="true"
          className="CardPromo3"
        />
      </Row>
    </div>
  );
};

export default PromoHome;
