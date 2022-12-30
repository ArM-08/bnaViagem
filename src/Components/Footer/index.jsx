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

const Footer = () => {
  return (
    <div>
      <Row
        style={{
          borderTop: "1px solid rgba(0,0,0,.1) ",
          borderBottom: "1px solid rgba(0,0,0,.1) ",
        }}
      >
        <Row
          wrap={true}
          style={{
            textAlign: "center",
            width: "70%",
            margin: "0 auto",
            display: "flex",
          }}
        >
          <Col
            xs={24}
            sm={12}
            md={12}
            style={{
              textAlign: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              preview={false}
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "30px",
                margin: "10px",
              }}
              src={Logo}
            ></Image>
            <h4 style={{ margin: "10px", textAlign: "center" }}>
              BNA Viagem ©2022
            </h4>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            style={{
              textAlign: "end",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "2px",
            }}
          >
            <h6 style={{ fontSize: "18px", marginRight: "20px" }}>
              Redes Sociais
            </h6>
            <a
              style={{ fontSize: "30px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <YoutubeFilled />
            </a>
            <a
              style={{ fontSize: "25px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <TwitterCircleFilled />
            </a>
            <a
              style={{ fontSize: "25px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <InstagramFilled />
            </a>
            <a
              style={{ fontSize: "25px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <LinkedinFilled />
            </a>
            <a
              style={{ fontSize: "25px", marginRight: "20px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <FacebookFilled />
            </a>
          </Col>
        </Row>
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "70%",
          display: "flex",
          margin: "0 auto",
          
        }}
      >
        <Col
          xs={11}
          sm={10}
          md={10}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            textAlign: "start",
          }}
        >
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
        <Col
          push={1}
          xs={12}
          sm={11}
          md={12}
          style={{
            color: "#000",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            textAlign: "start",
          }}
        >
          <h3>Viaje</h3>
          <a href="">Promoções</a>
          <a href="">Pacotes</a>
          <a href="">Internacional</a>
          <a href="">Nacionais</a>
        </Col>
        <Col
         
          xs={3}
          sm={3}
          md={2}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            textAlign: "start",
          }}
        >
          <h3>Fale Conosco</h3>
          <a href="">Central de Ajuda</a>
          <a href="">Política de privacidade</a>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
