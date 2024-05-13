import React, {useState} from 'react';
import './App.css';
import {Button, FloatButton, Input, Typography} from "antd";
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
                  items={[{title: 'Home'}, {title: <a href={''}>All articles</a>}, {title: 'Article name'}]}
                  style={{marginBottom: '20px'}}
              />
              <div style={{background: 'white', padding: '30px 10px'}}>
                  <Typography.Title level={2}>Article header</Typography.Title>
                  <Typography.Title level={4}>Short article description</Typography.Title>
                  <Divider/>
                  <Typography.Paragraph ellipsis={{rows:3, expandable: 'collapsible'}}>
                      {'Arcu ut. Sed orci, efficitur vestibulum lectus amet eleifend quis, tortor, odio.'.repeat(30)}
                  </Typography.Paragraph>
                  <Divider/>


                  <Input placeholder={'Type your comment'} style={{marginBottom: '10px'}}/>
                  <Button type={"primary"} style={{ background: "coral"}}>Leave comment</Button>
                  <Divider/>

                  <Typography.Title level={5}>3 comments</Typography.Title>
                  <Flex vertical={true} justify={"flex-start"} align={"flex-start"} style={{marginBottom: '10px'}}>
                      <Typography.Text strong={true}>User Name</Typography.Text>
                      <Typography.Text>{'Comment text'.repeat(5)}</Typography.Text>
                  </Flex>
                  <Flex vertical={true} justify={"flex-start"} align={"flex-start"} style={{marginBottom: '10px'}}>
                      <Typography.Text strong={true}>User Name 2</Typography.Text>
                      <Typography.Text>{'Comment text 22'.repeat(5)}</Typography.Text>
                  </Flex>
                  <Flex vertical={true} justify={"flex-start"} align={"flex-start"} style={{marginBottom: '10px'}}>
                      <Typography.Text strong={true}>User Name 3</Typography.Text>
                      <Typography.Text>{'Comment text 333'.repeat(5)}</Typography.Text>
                  </Flex>


                  <Flex vertical={true} justify={"flex-start"} align={"flex-start"} gap={10} style={{marginTop: '40px'}}>
                      <Button type={"primary"} style={{ background: "coral"}}>Primary button</Button>
                      <Button type={"default"} icon={<HeartOutlined/>}>Default button</Button>
                      <Button type={"dashed"} icon={<HeartOutlined/>} iconPosition={'end'}>Dashed button</Button>
                      <Button type={"text"}>Text button</Button>
                      <Button type={"link"} loading={true} danger={true}>Link button</Button>
                  </Flex>

                  <FloatButton type={'primary'} tooltip={'Help'} badge={{count: 5, color: 'coral'}}/>

                  <Typography.Text editable={{onChange: setEditableStr}}>{editableStr}</Typography.Text>
              </div>
          </Content>

          <FooterBlock/>
      </Layout>

  );
}

export default App;
