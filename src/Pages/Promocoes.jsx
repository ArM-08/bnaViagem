import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";
import CardPassagem from "./../Components/CardPassagem"
import { Row } from "antd";
import promocoes from "./../Components/BdDestinos/promocoes.json"

const Promocoes =() => {
    return (
      <div>
        <NavBar />
        <img src={ImgHeader} style={{ width: "100vw" }} />
        <BuscaPassagem />
        <Row  style={{
            width: "70%",
            margin:"0 auto",
            marginBottom:"20px"}}>
                <h1>As melhores promoções do mundo!</h1>
                </Row>
        <Row
        style={{
            width: "70%",
            justifyContent: "space-between",
            gap: "20px",
            margin:"0 auto",
            marginBottom:"20px"
          }}>
            {promocoes.map(destino =>(
          
          <CardPassagem 
          key={destino.id}
          destino={destino}/>
          ))}
        
        </Row>
        <Footer />
        
      </div>
    );
}
export default Promocoes;