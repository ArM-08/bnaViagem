import { Row } from "antd";
import CardPassagem from "../CardPassagem";
import homeInternacional from "./../BdDestinos/homeInternacional.json";
import "./index.css"

const HomeInternacional = () => {
  return (
    <div className="containerHomeTravels">
      <h1>Viagens internacionais</h1>

      <Row
        className="containerCardsHome"
      >
        {homeInternacional.map((destino) => (
          <CardPassagem key={destino.id} destino={destino} />
        ))}
      </Row>
    </div>
  );
};

export default HomeInternacional;
