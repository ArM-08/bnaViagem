import { Card } from "antd";
import "./index.css";

const CardAjuda = ({ title, descricao }) => {
  return (
    <Card className="cardAjuda" hoverable={true} align="middle">
      <h2>{title}</h2>

      <p>{descricao}</p>
    </Card>
  );
};

export default CardAjuda;
