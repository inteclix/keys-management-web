import React from "react";
import { Button, Modal, Form, Input, Radio, Icon } from "antd";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Ajouter une vehicule"
          okText="OK"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Matricule">
              {getFieldDecorator("matricule", {
                rules: [
                  {
                    required: true,
                    message: "Le champ matricule est obligatoire !"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Code GPS">
              {getFieldDecorator("gps_code", {
                rules: [
                  {
                    required: true,
                    message: "Le champ code GPS est obligatoire !"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Code">
              {getFieldDecorator("code")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.showModal}
          className="button-plus"
          type="primary"
          shape="circle"
          icon="plus"
          size="large"
        />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;
