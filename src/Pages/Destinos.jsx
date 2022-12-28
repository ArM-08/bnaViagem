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
      <img src={ImgHeader} style={{ width: "100vw" }} />
      <BuscaPassagem />
      <Row style={{ width: "70%", margin: "0 auto", marginBottom: "5vh" }}>
        <h1>Destinos</h1>
      </Row>
      <Row
        style={{
          width: "70%",
          justifyContent: "space-around",
          gap: "2vh",
          margin: "0 auto",
          marginBottom: "5vh",
        }}
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
