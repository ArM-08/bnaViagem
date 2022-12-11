import { Button, Col, Form, Input, Row, DatePicker } from "antd";

const BuscaPassagem = () => {
  return (
    <div>
      <Row
        style={{
          width: "70%",
          backgroundColor: "#000",
          height: "auto",
          position: "relative",
          left: "15%",
          top: "-75px",
          minHeight: "120px",
        }}
      >
        <h2 style={{ color: "#FFF", marginLeft: "20px", marginTop: "20px" }}>
          Passagens
        </h2>
        <Row style={{ width: "100%" }}>
          <Col style={{ width: "100%" }}>
            <Form
            colon= 'false'
              name="basic"
              layout="inline"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 20 }}
              style={{ justifyContent: "space-between", margin: "20px" }}
              // onFinish = {onFinish}
            >
              <Form.Item
                label={<h4 style={{ color: "#fff" }}>Saida</h4>}
                name="saida"
              >
                <Input style={{ width: "auto" }} />
              </Form.Item>
              <Form.Item
                label={<h4 style={{ color: "#fff" }}>Destino</h4>}
                name="destino"
              >
                <Input style={{ width: "auto" }} />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 20 }}
                label={<h4 style={{ color: "#fff" }}>Data Ida</h4>}
                name="dsaida"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 20 }}
                label={<h4 style={{ color: "#fff" }}>Data Volta</h4>}
                name="date-picker"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                style={{
                  width: "auto",
                  alignSelf: "flex-end",
                  marginTop: "20px",
                }}
                wrapperCol={{ offset: 5, span: 14 }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
export default BuscaPassagem;
