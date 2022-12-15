import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";
import CardPassagem from "./../Components/CardPassagem"
import BetoCarreiro from "./../assets/images/betocarreiro.png"
import Disney from "./../assets/images/disney.png"
import Floripa from "./../assets/images/floripa.png"
import Fortaleza from "./../assets/images/Fortaleza.png"
import FozDoIguacu from "./../assets/images/fozdoiguacu.png"
import IlhasMaldivas from "./../assets/images/ilhasmaldivas.png"
import PuntaCana from "./../assets/images/puntacana.png"
import Salvador from "./../assets/images/salvador.png"
import Bonito from "./../assets/images/bonito.png"
import { Row } from "antd";

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
        <CardPassagem
          img={BetoCarreiro}
          title="Pacote de Viagem - Beto Carrero World - Com Ingresso - 2024"
          diaria="4 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 499"
          parcelas="+ taxas | Em até 12x "
        />
        <CardPassagem
          img={Disney}
          title="Pacote de Viagem - Disneyland Califórnia - 2025"
          diaria="7 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 3852"
          parcelas=" Em até 12x "
        />
        <CardPassagem
          img={Floripa}
          title="Pacote de Viagem - Florianópolis - 2024"
          diaria="4 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 560"
          parcelas="Em até 12x "
        />
        <CardPassagem
          img={Fortaleza}
          title="Pacote de Viagem - Fortaleza + Beach Park - 2024"
          diaria="4 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 848"
          parcelas="Em até 12x"
        />
        <CardPassagem
          img={FozDoIguacu}
          title="Pacote de Viagem - Foz do Iguaçu - 2024"
          diaria="5 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 599"
          parcelas="Em até 12x"
        />
        <CardPassagem
          img={IlhasMaldivas}
          title="Pacote de Viagem - Ilhas Maldivas - 2025"
          diaria="7 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 4698"
          parcelas="Em até 12x"
        />
        <CardPassagem
          img={PuntaCana}
          title="Pacote de Viagem - Punta Cana - All Inclusive - 2025"
          diaria="5 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 1760"
          parcelas="+ taxas | Em até 12x "
        />
        <CardPassagem
          img={Salvador}
          title="Pacote de Viagem - Salvador - 2024"
          diaria="4 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 490"
          parcelas="+ taxas | Em até 12x "
        />
        <CardPassagem
          img={Bonito}
          title="Pacote de Viagem - Bonito - 2024"
          diaria="4 diárias"
          hospedagem="Hospedagem"
          passagemaerea="Passagem Aérea"
          valor="R$ 545"
          parcelas="+ taxas | Em até 12x"
        />
        </Row>
        <Footer />
        
      </div>
    );
}
export default Promocoes;