import {Card, Row} from "antd"

const CardAjuda= ({title, descricao}) => {
    return (
       
        <Card
        hoverable={true}
        align="middle"
        style={{
            display:"flex",
          width: 400,
          minHeight: 120,
          height:"auto",
       justifyContent: "center",
       borderColor:"#a1659d ",
       color:"#a1659d"
        
        }}
      >
        <h2>{title}</h2>
       
        <p>{descricao}</p>
      </Card>
      
    )
}

export default CardAjuda;


