import React, {useState} from 'react';
import { Button } from "antd";
import {HeartOutlined} from "@ant-design/icons";
import { FloatButton } from "antd";
import {Typography} from "antd";

function App() {
    const [editableStr, setEditableStr] = useState('Simple text');
  return (
      <div>
          <Button type={"primary"} style={{ background: "coral"}}>Primary button</Button>
          <Button type={"default"} icon={<HeartOutlined/>}>Default button</Button>
          <Button type={"dashed"} icon={<HeartOutlined/>} iconPosition={'end'}>Dashed button</Button>
          <Button type={"text"}>Text button</Button>
          <Button type={"link"} loading={true} danger={true}>Link button</Button>

          <FloatButton type={'primary'} tooltip={'Help'} badge={{count: 5, color: 'coral'}}/>

          <Typography.Text editable={{onChange: setEditableStr}}>{editableStr}</Typography.Text>
          <Typography.Title level={1}>Header 1</Typography.Title>
      </div>

  );
}

export default App;
