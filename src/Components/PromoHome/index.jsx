import { Card, Row } from "antd";
import PortoGalinha from "./../../assets/images/PortoGalinhasPromo.png";
import Ceara from "./../../assets/images/CearaPromo.png";
import Orlando from "./../../assets/images/OrlandoPromo.png";
const PromoHome = () => {
  return (
    <div
    style={{margin: '0 auto', width: "70%"}}
    >
      <h1>Pacotes para economizar</h1>

      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
          gap:"20px"
        }}
      >
        <Card
          bordered={false}
          hoverable="true"
          style={{
            width: 400,
            height: 290,
            backgroundImage: `url(${PortoGalinha})`,
          }}
        />
        <Card
          bordered={false}
          hoverable="true"
          style={{
            width: 400,
            height: 290,
            backgroundImage: `url(${Ceara})`,
          }}
        />
        <Card
          bordered={false}
          hoverable="true"
          style={{
            width: 400,
            height: 290,
            backgroundImage: `url(${Orlando})`,
          }}
        />
      </Row>
    </div>
  );
};

export default PromoHome;
