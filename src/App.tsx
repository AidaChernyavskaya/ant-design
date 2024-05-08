import React, {useState} from 'react';
import './App.css';
import { Button, FloatButton, Typography } from "antd";
import {HeartOutlined} from "@ant-design/icons";

import {Divider, Flex, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";

function App() {
    const [editableStr, setEditableStr] = useState('Simple text');
  return (
      <Layout style={{height: '100vh'}}>
          <Header></Header>
          <Content style={{background: 'white', padding: '50px'}}>
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
          </Content>
          <Footer style={{textAlign: "center"}}>Trying ant design ©{new Date().getFullYear()}</Footer>
      </Layout>

  );
}

export default App;
