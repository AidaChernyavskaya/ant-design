import React, {useState} from 'react';
import { Button } from "antd";
import {HeartOutlined} from "@ant-design/icons";
import { FloatButton } from "antd";
import {Typography} from "antd";

import {Divider} from "antd";
import {Flex} from "antd";

function App() {
    const [editableStr, setEditableStr] = useState('Simple text');
  return (
      <div>
          <Flex vertical={true} justify={"flex-start"} align={"flex-start"} gap={10}>
              <Button type={"primary"} style={{ background: "coral"}}>Primary button</Button>
              <Button type={"default"} icon={<HeartOutlined/>}>Default button</Button>
              <Button type={"dashed"} icon={<HeartOutlined/>} iconPosition={'end'}>Dashed button</Button>
              <Button type={"text"}>Text button</Button>
              <Button type={"link"} loading={true} danger={true}>Link button</Button>
          </Flex>

          <FloatButton type={'primary'} tooltip={'Help'} badge={{count: 5, color: 'coral'}}/>

          <Typography.Text editable={{onChange: setEditableStr}}>{editableStr}</Typography.Text>
          <Typography.Title level={1}>Header 1</Typography.Title>

          <Divider children={'Divider text'}/>
      </div>

  );
}

export default App;