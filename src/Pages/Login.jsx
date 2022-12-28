import Logo from "./../assets/images/logo.png";
import { Form, Image, Input, Button, Row } from "antd";
import { useAuth } from "./../Context/AuthProvider/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  async function onFinish(values) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/profile");
    } catch (error) {
      message.error("Invalid email or password");
    }
  }

  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row
        style={{
          width: "100%",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="/">
          <Image
            src={Logo}
            preview={false}
            width={100}
            justifyContent="center"
          />
        </a>
      </Row>
      <Row style={{ margin: "0 auto" }}>
        <h1>Login </h1>
      </Row>
      <Row
        style={{
          width: "100%",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 26 }}
          onFinish={onFinish}
        >
          <Form.Item label="Email" name="email">
            <Input style={{ width: "400px" }} />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password style={{ width: "400px" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 12 }}>
            <Button style={{ margin: "1vh" }} type="primary" htmlType="submit">
              Entrar
            </Button>
            <Button href="/cadastro" type="primary">
              Cadastre-se
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Login;
