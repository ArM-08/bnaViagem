import { Button, Menu, Row, Popover } from "antd";
import { Header } from "antd/es/layout/layout";
import ModalLogin from "../ModalLogin";
import Logo from "./../../assets/images/logo.png";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import "./index.css";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import {CartContext} from "./../../Context/CartContext/index"




export const Log = () => {
  const context = useContext(CartContext);
  const {
   quantidade,
  } = context;

  const auth = useAuth();
  const logged = (
    <div className="containerButtonLogged">
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
    return <div className="containerButtonDeslogeed"><Button href="/profile"><ShoppingCartOutlined />{quantidade > 0 && <span>{quantidade}</span>}</Button><ModalLogin /></div>;
  }
  return (
    <div>
    <Button className="buttonCart" href="/profile"><ShoppingCartOutlined />{quantidade > 0 && <span>{quantidade}</span>}</Button>
    <Popover  content={logged} trigger="click">
      
      <Button
        className="buttonConta"
        type="primary"
        shape="circle"
        icon={<UserOutlined />}
      />
    </Popover>
    </div>
  );
};

const items = [
  {
    label: (
      <a href="/">
        <img className="imgLogo" src={Logo}  />
      </a>
    ),
  },
  {
    label: <a href="/">Home</a>,
  },
  {
    label: <a href="/destinos">Destinos</a>,
  },
  {
    label: <a href="/promocoes">Promoções</a>,
  },
  {
    label: <a href="/contato">Contato</a>,
  },
  {
    label: <Log />,
  },
];

const NavBar = () => {
  return (
    <Header className="containerNav">
      <Row >
        <Menu
          mode="horizontal"
          items={items}
          className="menuNav"
        />
      </Row>
    </Header>
  );
};

export default NavBar;
