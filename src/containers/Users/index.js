import React from "react";
import { List, Card, Icon } from "antd";

import Add from "./Add";
import stores from "../../stores"

const data = [
  {
    username: "username",
    email: "email@test.dz",
    password: "123456",
    role: "admin",
    tel: "078455454",
  }
];


const All = () => (
  <List
    grid={{ gutter: 16, column: 5 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card
          actions={[<Icon type="delete" />, <Icon type="edit" />]}
          size="small" title={item.username}>
          Email: {item.email} <br />
          Role: {item.role} <br />
          Tel: {item.tel} <br />
        </Card>
      </List.Item>
    )}
  />
);

class Cars extends React.Component {
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Add />
        <All />
      </div>
    );
  }
}

export default Cars;
