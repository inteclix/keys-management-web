import React from "react";
import { List, Card, Icon } from "antd";

import Add from "./Add";

const data = [
  {
    car_id: "000254-00-16",
    driver_id: "1",
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
          size="small" title={item.car_id}>
          Code GPS: {item.driver_id} <br />
        </Card>
      </List.Item>
    )}
  />
);

class Cars extends React.Component {
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
