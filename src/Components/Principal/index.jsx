import { Row } from "antd";

import { useAuth } from "../../Context/AuthProvider/useAuth";



const Principal = () => {
  const auth = useAuth()
  return (
    <div>
      <Row>
        <h1 style={{ fontSize: 24 }}>Bem vindo {auth.user}</h1>
        
      </Row>
      <Row>
        <h4>Ultimas compras:</h4>
      </Row>
    </div>
  );
};

export default Principal;
