import { Button, Menu, Row, Popover } from "antd";
import { Header } from "antd/es/layout/layout";
import ModalLogin from "../ModalLogin";
import Logo from "./../../assets/images/logo.png";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import "./style.css";
import { UserOutlined } from "@ant-design/icons";

export const Log = () => {
  const auth = useAuth();
  const logged = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button type="text" href="/profile">
        Minha conta
      </Button>
      <Button type="text" danger onClick={auth.logout}>
        Logout{" "}
      </Button>
      <div></div>
    </div>
  );
  if (!auth.email) {
    return <ModalLogin />;
  }
  return (
    <Popover content={logged} trigger="click">
      <Button
        style={{ marginRight: "20px", backgroundColor: "#008000" }}
        type="primary"
        shape="circle"
        icon={<UserOutlined />}
      />
    </Popover>
  );
};
const items = [
  {
    label: (
      <a href="/">
        <img src={Logo} style={{ width: "50px", height: "50px" }} />
      </a>
    ),
  },
  {
    label: <a href="/">Home</a>,
  },
  {
    label: <a href="destinos">Destinos</a>,
  },
  {
    label: <a href="promocoes">Promoções</a>,
  },
  {
    label: <a href="contato">Contato</a>,
  },
  {
    label: <Log />,
  },
];

const NavBar = () => {
  return (
    <Header style={{ width: "100vw", height: "100%" }}>
      <Row style={{ width: "100vw" }}>
        <Menu
          mode="horizontal"
          items={items}
          style={{
            textDecoration: "none",
            width: "100vw",
            justifyContent: "space-between",
            minHeight: "80px",
            alignItems: "center",
          }}
        />
      </Row>
    </Header>
  );
};

export default NavBar;
