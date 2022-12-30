import { Button, Form, Input, Row, DatePicker, Space, Modal} from "antd";
import { useState, useEffect } from "react";
import CardBusca from "../CardBusca";


export const fetchData = async () => {
  try {
    let res = await fetch(`https://63aeee1fcb0f90e51468adf3.mockapi.io/bna/flights`);
    res = await res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};


const BuscaPassagem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [state, setState] = useState('');
  const [filter, setFilter] = useState([]);
  const [date, setDate] = useState([,])

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value })
  };

  const handleSearch = () => {
    const { Origem, Destino } = state;
    const p = data.filter((search) => {
      return search.origem === Origem && search.destino === Destino;
    });
    setIsModalOpen(true);
    setFilter(p);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row
        style={{
          textAlign: "center",
          width: "70%",
          backgroundColor: "#FFF",
          height: "auto",
          position: "relative",
          left: "15%",
          top: "-75px",
          minHeight: "120px",
          minWidth: "220px",
          boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginLeft: "28px", marginTop: "20px" }}>Passagens</h2>
        <Row style={{ width: "100%" }}>
          <Form
            name="basic"
            style={{
              margin: "20px",
              width: "100%",
            }}
            onFinish={handleSearch}
            
          >
            <Space.Compact
              block
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Input
                style={{
                  width: "30%",
                  height: "40px",
                  minWidth: "150px",
                  marginTop: "10px",
                }}
                placeholder="&#x1F50E; Saida"
                name="Origem"
                onChange={handleChange}
              />
              <Input
                style={{
                  width: "30%",
                  height: "40px",
                  minWidth: "150px",
                  marginTop: "10px",
                }}
                placeholder="&#x1F50E; Destino"
                name="Destino"
                onChange={handleChange}
              />
              <DatePicker.RangePicker
                placeholder={["Ida", "Volta"]}
                align="center"
                style={{
                  width: "25%",
                  height: "40px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  minWidth: "150px",
                  marginTop: "10px",
                }}
                format={'DD/MM/YY'}
                onChange={(values) => {
                setDate(values.map(date=>{
                  return (date).format('DD/MM/YY')
                 
                }))
                console.log(date)
                }}
                
                
              />

              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginLeft: "10px",
                  borderRadius: "10px",
                  width: "90px",
                  alignSelf: "center",
                  marginTop: "10px",
                }}
                
              >
                Pesquisar
              </Button>
            </Space.Compact>

            <Space.Compact block></Space.Compact>
          </Form>
          <Modal title="Busca Voos" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {state === '' || filter.length === 0 ? <p>No Flights Found</p> :

            <div>
              {filter.map((search, index) =>
              <CardBusca key={index} origem={search.origem} destino={search.destino} ida={date[0]} volta={date[1]} value={search.value} />
            )}
              </div>
              }
      </Modal>
        </Row>
      </Row>
    </div>
  );
};
export default BuscaPassagem;
