import { Breadcrumb,  Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import {ShoppingCartOutlined ,
  DesktopOutlined,
    LogoutOutlined,
    UserOutlined,} from "@ant-design/icons";
import  Layout, { Content, Footer } from "antd/es/layout/layout";
import Logo from './../assets/images/logo.png'


const DashBoard = () => {
    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }
    const items = [
        getItem('Principal', '1', <DesktopOutlined />),
        getItem('Carrinho', '2', <ShoppingCartOutlined />),
        getItem('Conta', '3', <UserOutlined />),
        getItem( 'Logout' ,'4', <LogoutOutlined style={{color:"#FF0000"}}/>),

      ];

const [collapsed, setCollapsed] = useState(false);



    return (
<Layout
      style={{
        minHeight: '100vh',
      }}
    >
<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
<div
          style={{
            height: 40,
            width: 40,
            margin: "0 auto",
            marginTop:" 20px",
            marginBottom:" 20px",

        
          }}
        >
         <a href="/"> <Image preview={false} src={Logo} width="40px"  /></a>
        </div>
         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
         
      </Sider>
      <Layout className="site-layout">
       
        <Content
          style={{
            margin: '0',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0 5px 20px',
            }}
          >
            <Breadcrumb.Item>Bem Vindo User</Breadcrumb.Item>
  
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#FFF",
            }}
          >
            CONTEUDO
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Bruh Viagem ©2022
        </Footer>
      </Layout>
    
</Layout>
    )
}

export default DashBoard;