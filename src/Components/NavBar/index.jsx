import { Button, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import ModalLogin from "../ModalLogin";
import Logo from "./../../assets/images/logo.png";
import { useAuth } from "../../Context/AuthProvider/useAuth";

 



export const Log = () => {

  const auth = useAuth()

  if(!auth.email){
      return <ModalLogin/>
              
  }
  return  <div ><Button style={{marginRight:"10px"}}  href="/profile">Conta</Button>
    <Button style={{marginRight:"10px"}} onClick={auth.logout}>Logout </Button>
  </div>
}
const items = [
  
  {
    label: <a href="/"><img  src={Logo} style={{ width: "50px", height: "50px" }} /></a>,
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
    label: <Log/>
     
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
