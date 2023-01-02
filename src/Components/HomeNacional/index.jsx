import { Row } from "antd";
import CardPassagem from "../CardPassagem";
import homeNacional from "./../BdDestinos/homeNacional.json";
import "./../HomeInternacional/index.css"
const HomeNacional = () => {
  return (
    <div className="containerHomeTravels" >
      <h1>Viagens nacionais</h1>
      <Row
        className="containerCardsHome"
      >
        {homeNacional.map((destino) => (
          <CardPassagem key={destino.id} destino={destino} />
        ))}
      </Row>
    </div>
  );
};

export default HomeNacional;
