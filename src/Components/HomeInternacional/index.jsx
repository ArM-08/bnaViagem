import { Row } from "antd";
import CardPassagem from "../CardPassagem";
import homeInternacional from "./../BdDestinos/homeInternacional.json"


const HomeInternacional = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%", marginTop: "30px" }}>
      <h1>Viagens internacionais</h1>
      
      <Row
        style={{
          width: "100%",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        {homeInternacional.map(destino =>(
          
          <CardPassagem 
          key={destino.id}
          destino={destino}/>
          ))}
        
      </Row>
    </div>
  );
};

export default HomeInternacional;
