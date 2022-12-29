import { Button, Form, Input, Row, DatePicker, Space } from "antd";

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
            // onFinish = {onFinish}
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
              />
              <Input
                style={{
                  width: "30%",
                  height: "40px",
                  minWidth: "150px",
                  marginTop: "10px",
                }}
                placeholder="&#x1F50E; Destino"
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
        </Row>
      </Row>
    </div>
  );
};
export default BuscaPassagem;
