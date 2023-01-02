import { Col, Row, Image } from "antd";
import "./index.css";
import {
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramFilled,
  LinkedinFilled,
  FacebookFilled,
} from "@ant-design/icons";
import Logo from "./../../assets/images/logo.png";
import "./index.css";

const Footer = () => {
  return (
    <div>
      <Row className="linhasFooter">
        <Row className="firstLineContainer" wrap={true}>
          <Col className="footerLogoCol " xs={24} sm={12} md={12}>
            <Image className="logoFooter" preview={false} src={Logo}></Image>
            <h4>BNA Viagem ©2022</h4>
          </Col>
          <Col className="footerRedesCol" xs={24} sm={12} md={12}>
            <h6>Redes Sociais</h6>
            <a href="https://www.linkedin.com/in/alan-moraes08/">
              <YoutubeFilled />
            </a>
            <a href="https://www.linkedin.com/in/alan-moraes08/">
              <TwitterCircleFilled />
            </a>
            <a href="https://www.linkedin.com/in/alan-moraes08/">
              <InstagramFilled />
            </a>
            <a href="https://www.linkedin.com/in/alan-moraes08/">
              <LinkedinFilled />
            </a>
            <a href="https://www.linkedin.com/in/alan-moraes08/">
              <FacebookFilled />
            </a>
          </Col>
        </Row>
      </Row>
      <Row className="secondLineFooter">
        <Col xs={11} sm={10} md={10} className="firstColFooter">
          <h3>Conheça</h3>
          <a href="">Quem Somos</a>
          <a href="">Trabalhe Conosco</a>
          <a href="">Portal do Parceiro</a>
          <a href="">Câmbio</a>
          <a href="">Sustentabilidade</a>
          <a href="">Blog</a>
          <a href="">Transparencia</a>
          <a href="">Seguro Viagem</a>
        </Col>
        <Col push={1} xs={12} sm={11} md={12} className="secondColFooter">
          <h3>Viaje</h3>
          <a href="">Promoções</a>
          <a href="">Pacotes</a>
          <a href="">Internacional</a>
          <a href="">Nacionais</a>
        </Col>
        <Col className="thirdColFooter" xs={3} sm={3} md={2}>
          <h3>Fale Conosco</h3>
          <a href="">Central de Ajuda</a>
          <a href="">Política de privacidade</a>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
