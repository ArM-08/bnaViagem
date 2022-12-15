import { Row } from "antd";
import Vitoria from "./../../assets/images/vitoria.png";
import JP from "./../../assets/images/joaopessoa.png";
import Rio from "./../../assets/images/rio.png";
import Noronha from "./../../assets/images/noronha.png";
import CardPassagem from "../CardPassagem";

const HomeNacional = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%", marginTop: "30px" }}>
      <h1>Viagens nacionais</h1>
      <Row
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <CardPassagem
          img={Noronha}
          title="Pacote de Viagem - Fernando de Noronha - 2024"
          diaria="4 diarias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 1860"
          parcelas="Em até 12x"
        />
        <CardPassagem
          img={Vitoria}
          title="Pacote de Viagem - Vitória + Passeio a Praia de Guarapari - 2023"
          diaria="3, 4 ou 5 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 1499"
          parcelas="Em até 12x"
        />

        <CardPassagem
          img={JP}
          title="Pacote de Viagem - João Pessoa - Viaje em Março ou Abril - 2023"
          diaria="3 ou 5 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 2399"
          parcelas="Em até 12x"
        />
        <CardPassagem
          img={Rio}
          title="Pacote de Viagem - Rio de Janeiro - 2023"
          diaria="3 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 1196"
          parcelas="Em até 12x"
        />
      </Row>
    </div>
  );
};

export default HomeNacional;
