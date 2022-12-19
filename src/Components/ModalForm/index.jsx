import { useState } from "react";
import {Form, Modal, Button, Input} from "antd"
const ModalForm = () => {
  const validateMessages = {
    required: "Preencha o campo ${label}",
    
    types: {
      email: "Preencha o campo com ${label} válido ",
    },
  };

  const onFinish = (values) => {
    Modal.success({
        content: 'Mensagem Enviada com sucesso!',
      });
      setIsModalOpen(false);
    console.log(values);};
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

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

  return (
    <div>
      <Button style={{backgroundColor:"#a1659d"}}type="primary" onClick={showModal}>
       Atendimento Via E-mail
      </Button>
      <Modal
      footer={null}
        title="Atendimento Via E-mail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["usuario", "nome"]}
            label="Nome"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["usuario", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["usuario", "mensagem"]} label="Mensagem">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default ModalForm;
