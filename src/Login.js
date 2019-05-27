import React from "react";
import {observer} from "mobx-react"
import { Form, Icon, Input, Button, Checkbox } from "antd";

import stores from "./stores"

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        stores.authStore.login(values.email, values.password)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form center">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Le champ Mail d'utilisateur est obligatoire!" }]
          })(
            <Input
              prefix={<Icon type="email" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Nom d'utilisateur"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Le champ Mot de pass est obligatoire!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Mot de pass"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            loading={stores.authStore.inProgress}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Connecté
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default observer(Form.create({ name: "normal_login" })(NormalLoginForm))
