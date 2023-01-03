import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";
import { Row } from "antd";
import destino from "./../Components/BdDestinos/destino.json";
import CardPassagem from "../Components/CardPassagem";

const Destinos = () => {
  return (
    <div>
      <NavBar />
      <img className="imgHeader" src={ImgHeader} />
      <BuscaPassagem />
      <Row className="destinosTitle">
        <h1>Destinos</h1>
      </Row>
      <Row
        className="containerCardDest"
      >
        {destino.map((destino) => (
          <div>
            <CardPassagem key={destino.id} destino={destino} />
          </div>
        ))}
      </Row>

      <Footer />
    </div>
  );
};
export default Destinos;
