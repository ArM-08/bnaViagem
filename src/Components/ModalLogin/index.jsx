import { useAuth } from "./../../Context/AuthProvider/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";

import { UserOutlined } from "@ant-design/icons";



const ModalLogin = () => {
  
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  const auth = useAuth();

  const navigate = useNavigate();

  async function onFinish(values) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/profile");
    } catch (error) {
      message.error('email ou password incorretos')
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Button
        style={{ marginRight: "20px" }}
        onClick={showModal}
        type="primary"
        icon={<UserOutlined />}
      >
        Entrar
      </Button>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item label="Email" name="email">
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button style={{ margin: "1vh" }} type="primary" htmlType="submit">
              Entrar
            </Button>
            <Button href="/cadastro" type="primary">
              Cadastre-se
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalLogin;
