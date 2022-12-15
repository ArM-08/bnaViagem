import { Card, Row } from "antd";
import Roma from "./../../assets/images/roma.png";
import Madrid from "./../../assets/images/madrid.png";
import Bruxelas from "./../../assets/images/bruxelas.png";
import Paris from "./../../assets/images/paris.png";
import { CalendarOutlined, CheckOutlined } from "@ant-design/icons";
import CardPassagem from "../CardPassagem";

const { Meta } = Card;

const HomeInternacional = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%", marginTop: "30px" }}>
      <h1>Viagens internacionais</h1>
      <Row
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <CardPassagem
          img={Roma}
          title="Pacote de Viagem - Roma + Paris + Amsterdam - 2025"
          diaria="15 diarias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 4620"
          parcelas="Em até 12x"
        />

        <CardPassagem
          img={Madrid}
          title="Pacote de Viagem - Madrid + Barcelona + Lisboa - 2025"
          diaria="15 diarias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 3980"
          parcelas="Em até 12x"
        />

        <CardPassagem
          img={Bruxelas}
          title="Pacote de Viagem - Bruxelas + Luxemburgo + Amsterdam - 2025"
          diaria="12 diarias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 8479"
          parcelas="Em até 12x"
        />

        <CardPassagem
          img={Paris}
          title="Pacote de Viagem - Paris + Bruxelas + Bruges - 2024"
          diaria="12 diarias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 9338"
          parcelas="Em até 12x"
        />
      </Row>
    </div>
  );
};

export default HomeInternacional;
