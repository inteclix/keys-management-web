import React from "react";
import { List, Card, Icon } from "antd";

import Add from "./Add";

const data = [
  {
    numberplate: "000254-00-16",
    gps_code: "178",
    code: "455"
  },
  {
    numberplate: "000253-00-16",
    gps_code: "178",
    code: "455"
  },
  {
    numberplate: "000252-00-16",
    gps_code: "178",
    code: "455"
  },
  {
    numberplate: "000251-00-16",
    gps_code: "178",
    code: "455"
  },
  {
    numberplate: "000250-00-16",
    gps_code: "178",
    code: "455"
  },
  {
    numberplate: "000250-00-16",
    gps_code: "178",
    code: "455"
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

        size="small" title={item.numberplate}>
          Code GPS: {item.gps_code} <br/>
          Code: {item.code} <br/>
          Les Clés: 0
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
