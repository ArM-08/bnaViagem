import { Col, Row } from "antd";
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
          style={{
            textAlign: "center",
            width: "70%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "Row",
          }}
        >
          <Col
            style={{
              textAlign: "start",
              width: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "30px",
                margin: "10px",
              }}
              src={Logo}
            ></img>
            <h4 style={{ margin: "10px", textAlign: "center" }}>
              {" "}
              Bruh Viagem ©2022{" "}
            </h4>
          </Col>
          <Col
            style={{
              textAlign: "end",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "20px",
            }}
          >
            <h6 style={{ fontSize: "18px", marginRight: "20px" }}>
              Redes Sociais{" "}
            </h6>
            <a
              style={{ fontSize: "30px", color: "#000" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <YoutubeFilled />{" "}
            </a>
            <a
              style={{ fontSize: "25px", color: "#000" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              <TwitterCircleFilled />
            </a>
            <a
              style={{ fontSize: "25px", color: "#000" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
       
              <InstagramFilled />
            </a>
            <a
              style={{ fontSize: "25px", color: "#000" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
       
              <LinkedinFilled />
            </a>
            <a
              style={{ fontSize: "25px", color: "#000", marginRight: "20px" }}
              href="https://www.linkedin.com/in/alan-moraes08/"
            >
              {" "}
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
          flexDirection: "row",
          margin: "0 auto",
      
        }}
      >
        <Col
          style={{
            width: "20%",
            display: "flex",
            flexWrap: "wrap",
            margin: "10px",
            textAlign:"start"
          }}
        >
          <h3
            style={{
              width: "100%",
              
            }}
          >
            Conheça
          </h3>
          <a
            style={{
              width: "100%", color:"#000"
              
            }}
            href=""
          >
            Quem Somos
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Trabalhe Conosco
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Portal do Parceiro
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Câmbio
          </a> 
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Sustentabilidade
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Blog
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Transparencia
          </a>
          <a
            style={{
              width: "100%", color:"#000"
            }}
            href=""
          >
            Seguro Viagem
          </a>
        </Col>
        <Col
        style={{
          width: "20%",
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          textAlign:"start"
        }}>
          <h3 style={{
              width: "100%", color:"#000"}}>Viaje</h3>
          <a style={{
              width: "100%", color:"#000"
              
            }}
            href="">Promoções</a>
          <a style={{
              width: "100%", color:"#000"
              
            }} href="">Pacotes</a>
          <a style={{
              width: "100%", color:"#000"
              
            }} href="">Internacional</a>
          <a style={{
              width: "100%", color:"#000"
              
            }} href="">Nacionais</a>
        </Col>
        <Col
        style={{
          width: "20%",
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          textAlign:"start",
             
        }}>
          <h3 style={{
              width: "100%", color:"#000"}}>Fale Conosco</h3>
          <a style={{
              width: "100%", color:"#000"
              
            }}
            href="">Central de Ajuda</a>
          <a style={{
              width: "100%", color:"#000"
              
            }} href="">Política de privacidade</a>
            </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default Footer;
