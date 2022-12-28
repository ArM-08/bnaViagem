import { Row } from "antd";
import CardPassagem from "../CardPassagem";
import homeNacional from "./../BdDestinos/homeNacional.json"

const HomeNacional = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%", marginTop: "30px" }}>
      <h1>Viagens nacionais</h1>
      <Row
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
         {homeNacional.map(destino =>(
          
          <CardPassagem 
          key={destino.id}
          destino={destino}/>
          ))}
        
      </Row>
    </div>
  );
};

export default HomeNacional;
