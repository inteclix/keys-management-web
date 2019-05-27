import React from "react";
import { observer } from "mobx-react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout, Icon } from "antd";

import Login from "./Login";
import Header from "./containers/Header";
import Sider from "./containers/Sider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./containers/Home";
import Cars from "./containers/Cars";
import Users from "./containers/Users";
import Drivers from "./containers/Drivers";
import Keys from "./containers/Keys";
import Mails from "./containers/Mails";
import Senders from "./containers/Senders";
import Setting from "./containers/Setting";

import stores from "./stores"

const { Content } = Layout;
window.stores = stores
class App extends React.Component{
  componentDidMount(){
    stores.userStore.me();
  }
  render(){
    if(stores.userStore.loadingUser){
      return (
        <Layout className="center-screen">
          <Icon style={{fontSize: 24}} type="loading"/>
        </Layout>
      )
    }
    if (stores.userStore.currentUser.username === "") {
      return (
        <Layout className="center-screen" >
          <Login />
        </Layout>
      );
    }
    return (
      <Router>
        <Layout className="app">
          <Header />
          <Layout>
            <Sider />
            <Layout style={{ padding: "5px 5px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/cars" component={Cars} />
                <Route path="/users" component={Users} />
                <Route path="/keys" component={Keys} />
                <Route path="/mails" component={Mails} />
                <Route path="/senders" component={Senders} />
                <Route path="/drivers" component={Drivers} />
                <Route path="/setting" component={Setting} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default observer(App);
