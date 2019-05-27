import React from "react";
import { observer } from "mobx-react"
import { Layout, Menu, Input } from "antd";
import { Dropdown, Button, Icon, message } from "antd";
import stores from "../stores"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  stores.authStore.logout()
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="logout" />
      Déconnecte
    </Menu.Item>
  </Menu>
);

export default observer(() => (
  <Header className="header">
    <div className="left">
      <div className="logo" />
      <Input.Search
        placeholder="Rechercher ..."
        onSearch={value => console.log(value)}
        style={{ width: 450 }}
      />
    </div>
    <Dropdown overlay={menu}>
      <Button>
        <Icon type="user" />
        {stores.userStore.currentUser.username} <Icon type="down" />
      </Button>
    </Dropdown>
  </Header>
));
