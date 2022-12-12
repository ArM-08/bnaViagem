import { Button, Col, Form, Input, Row, DatePicker } from "antd";

const BuscaPassagem = () => {
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
          minWidth: "200px",
          boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2 style={{marginLeft: "28px", marginTop: "20px" }}>
          Passagens
        </h2>
        <Row style={{ width: "100%" }}>
         
            <Form
              name="basic"
              layout="inline"
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 20 }}
              style={{ justifyContent: "space-around", margin: "20px",  display: "flex", width: '100%' }}
              // onFinish = {onFinish}
            >
                 <Col>
              <Form.Item
                 style={{width: "100%"}}
                label={<h4 >Saida</h4>}
                colon= {false}
                name="saida"
              >
                <Input style={{ width: "auto" }} />
              </Form.Item>
              </Col>
              <Col>
              <Form.Item
              style={{width: "100%"}}
              colon= {false}
                label={<h4>Destino</h4>}
                name="destino"
              >
                <Input style={{ width: "auto" }} />
              </Form.Item>
              </Col>
              <Col>
              <Form.Item
            style={{width: "100%"}}
              colon= {false}
                wrapperCol={{ span: 20 }}
                label={<h4>Data Ida</h4>}
                name="dsaida"
              >
                <DatePicker />
              </Form.Item>
              </Col>
              <Col>
              <Form.Item
              style={{width: "100%"}}
              colon= {false}
                wrapperCol={{ span: 20 }}
                label={<h4>Data Volta</h4>}
                name="date-picker"
              >
                <DatePicker />
              </Form.Item>
              </Col>
              <Col
              style={{
                alignSelf: "end"}}
              >
              <Form.Item
              
              colon= {false}
                style={{
                  width: "auto",
                  marginTop: "20px",
                }}
              
              >
                <Button 
                type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              </Col>
            </Form>
         
        </Row>
      </Row>
    </div>
  );
};
export default BuscaPassagem;
