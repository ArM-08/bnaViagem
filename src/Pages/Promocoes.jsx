import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";
import CardPassagem from "./../Components/CardPassagem";
import { Row } from "antd";
import promocoes from "./../Components/BdDestinos/promocoes.json";

const Promocoes = () => {
  return (
    <div>
      <NavBar />
      <img src={ImgHeader} className="imgHeader" />
      <BuscaPassagem />
      <Row
  className="promoTitle"
      >
        <h1>As melhores promoções do mundo!</h1>
      </Row>
      <Row
       className="cardPromoContainer"
        
      >
        {promocoes.map((destino) => (
          <CardPassagem key={destino.id} destino={destino} />
        ))}
      </Row>
      <Footer />
    </div>
  );
};
export default Promocoes;
