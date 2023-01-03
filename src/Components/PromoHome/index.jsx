import { Card, Row } from "antd";
import {  useNavigate } from "react-router-dom";
import "./index.css";

const PromoHome = () => {

const navigate = useNavigate()
  
const nav  =() => {
navigate("/destinos")
}

  return (
    <div className="containerPromo">
      <h1>Pacotes para economizar</h1>

      <Row
      className="rowPromo"
      xl={12}
      >
        <Card
        onClick={nav}
        className="CardPromo1"
          bordered={false}
          hoverable="true"
        />
        <Card
            onClick={nav}
          bordered={false}
          hoverable="true"
          className="CardPromo2"
        />
        <Card
            onClick={nav}
          bordered={false}
          hoverable="true"
          className="CardPromo3"
        />
      </Row>
    </div>
  );
};

export default PromoHome;
