import React, {useState} from 'react';
import './App.css';
import {Button, FloatButton, Typography} from "antd";
import { HeartOutlined} from "@ant-design/icons";

import {Divider, Flex, Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";

import {Breadcrumb} from "antd";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";

function App() {
    const [editableStr, setEditableStr] = useState('Simple text');


  return (
      <Layout >
          <HeaderBlock/>

          <Content style={{padding: '50px'}}>
              <Breadcrumb
                  items={[{title: 'Home'}, {title: <a href={''}>Layout</a>}, {title: 'Classic Layout'}]}
                  style={{marginBottom: '20px'}}
              />
              <div style={{background: 'white', padding: '50px 10px'}}>
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
          </Content>

          <FooterBlock/>
      </Layout>

  );
}

export default App;
