import { Button, Form, Input, Row, DatePicker, Space, Modal } from "antd";
import { useState, useEffect } from "react";
import CardBusca from "../CardBusca";
import "./index.css";

export const fetchData = async () => {
  try {
    let res = await fetch(
      `https://63aeee1fcb0f90e51468adf3.mockapi.io/bna/flights`
    );
    res = await res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

const BuscaPassagem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [state, setState] = useState("");
  const [filter, setFilter] = useState([]);
  const [date, setDate] = useState([,]);

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
    setState({ ...state, [name]: value });
  };

  const handleSearch = () => {
    const { Origem, Destino } = state;
    const filtro = data.filter((search) => {
      return search.origem === Origem && search.destino === Destino;
    });
    setIsModalOpen(true);
    setFilter(filtro);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row className="containerBusca">
        <h2 className="textBusca">Passagens</h2>
        <Row className="linhaForm">
          <Form className="formBusca" name="basic" onFinish={handleSearch}>
            <Space.Compact className="spaceCompact" block>
              <Input
                className="inputForm"
                placeholder="&#x1F50E; Saida"
                name="Origem"
                onChange={handleChange}
              />
              <Input
                className="inputForm"
                placeholder="&#x1F50E; Destino"
                name="Destino"
                onChange={handleChange}
              />
              <DatePicker.RangePicker
                className="dataPicker"
                placeholder={["Ida", "Volta"]}
                align="center"
                format={"DD/MM/YY"}
                onChange={(values) => {
                  setDate(
                    values.map((date) => {
                      return date.format("DD/MM/YY");
                    })
                  );
                }}
              />

              <Button
                className="buttonPesquisa"
                type="primary"
                htmlType="submit"
              >
                Pesquisar
              </Button>
            </Space.Compact>

            <Space.Compact block></Space.Compact>
          </Form>
          <Modal
            title="Busca Voos"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {state === "" || filter.length === 0 ? (
              <p>No Flights Found</p>
            ) : (
              <div>
                {filter.map((search, index) => (
                  <CardBusca
                    key={index}
                    origem={search.origem}
                    destino={search.destino}
                    ida={date[0]}
                    volta={date[1]}
                    value={search.value}
                  />
                ))}
              </div>
            )}
          </Modal>
        </Row>
      </Row>
    </div>
  );
};
export default BuscaPassagem;
