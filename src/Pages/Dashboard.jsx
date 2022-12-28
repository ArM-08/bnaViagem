import { Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import {
  ShoppingCartOutlined,
  DesktopOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import Logo from "./../assets/images/logo.png";
import Principal from "../Components/Principal";
import Conta from "../Components/Conta";
import Carrinho from "../Components/Carrinho";
import { useAuth } from "../Context/AuthProvider/useAuth";

const DashBoard = () => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const auth = useAuth();
  const items = [
    getItem("Principal", "1", <DesktopOutlined />),
    getItem("Carrinho", "2", <ShoppingCartOutlined />),
    getItem("Conta", "3", <UserOutlined />),
    getItem(
      "Logout",
      "4",
      <a onClick={auth.logout}>
        {" "}
        <LogoutOutlined style={{ color: "#FF0000" }} />
      </a>
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const componentsSwtich = (key) => {
    switch (key) {
      case "1":
        return <Principal />;
      case "2":
        return <Carrinho />;
      case "3":
        return <Conta />;
      case "4":

      default:
        break;
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="sm"
        onBreakpoint={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 40,
            width: 40,
            margin: "0 auto",
            marginTop: " 20px",
            marginBottom: " 20px",
          }}
        >
          <a href="/">
            {" "}
            <Image preview={false} src={Logo} width="40px" />
          </a>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => setSelectedMenuItem(e.key)}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#FFF",
            }}
          >
            {componentsSwtich(selectedMenuItem)}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Bruh Viagem ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
