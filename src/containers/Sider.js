import React from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        theme="light"
      >
        <div className="logo" />
        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="light">
          <Menu.Item key="1">
            <Icon type="home" />
            <span>Accueil</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="team" />
            <span>Utilisateurs</span>
            <Link to="/users" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="car" />
            <span>Voitures</span>
            <Link to="/cars" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="key" />
            <span>Clés</span>
            <Link to="/keys" />
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="mail" />
            <span>Enveloppes</span>
            <Link to="/mails" />
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="swap" />
            <span>Expéditeur ou le destinataire</span>
            <Link to="/senders" />
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="link" />
            <span>Facteurs</span>
            <Link to="/drivers" />
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="setting" />
            <span>Parametre</span>
            <Link to="/setting" />
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}
