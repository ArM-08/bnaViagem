import Logo from "./../assets/images/logo.png";
import { Form, Image, Input, Button, Row } from "antd";

const Cadastro = () => {
  return (
    <div
    className="cadastroContainer"
    >
      <Row
        className="logoContainerCad"
      >
        <a href="/">
          
          <Image
            src={Logo}
            preview={false}
            width={100}
            justifycontent="center"
          />
        </a>
      </Row>
      <Row style={{ margin: "0 auto" }}>
        <h1>Crie sua conta </h1>
      </Row>
      <Row
        className="formContainer"
      >
        <Form name="basic" labelCol={{ span: 5 }} wrapperCol={{ span: 26 }}>
          <Form.Item label="Nome" name="nome">
            <Input/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input/>
          </Form.Item>
          <Form.Item label="CPF" name="number">
            <Input  />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 12 }}>
            <Button style={{ margin: "1vh" }} type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Cadastro;
