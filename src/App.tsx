import React, {useState} from 'react';
import './App.css';
import {Button, FloatButton, Space, Typography} from "antd";
import {FileOutlined, HeartOutlined, HomeOutlined, QuestionOutlined} from "@ant-design/icons";

import {Divider, Flex, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";

import {Breadcrumb, Dropdown, Menu} from "antd";

function App() {
    const [editableStr, setEditableStr] = useState('Simple text');
    const menuItems = [
        {
            key: '1',
            label: (<a href={""} target="_blank" rel="noopener noreferrer">Contact us</a>),
        },
        {
            key: '2',
            label: (<a target="_blank" rel="noopener noreferrer" href="">FAQ</a>),
        },
    ];
    const items = [
        {
            label: 'Home',
            key: 'home',
            icon: <HomeOutlined style={{color: 'white'}}/>,
        },
        {
            label: 'Blog',
            key: 'blog',
            icon: <FileOutlined style={{color: 'white'}}/>,
            children: [
                {
                    type: 'group',
                    label: 'Article',
                    children: [
                        {
                            label: 'Read all',
                            key: 'setting:1',
                        },
                        {
                            label: 'Search',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    label: 'My blog',
                    key: 'setting:3',
                },
            ],
        },
    ];

  return (
      <Layout >
          <Header >
              <Flex justify={"flex-start"} align={"center"} gap={10}>
                  <Dropdown menu={{items: menuItems}}>
                      <a onClick={(e) => e.preventDefault()}>
                          <Space style={{color: 'white', width: 'max-content'}}>
                              <QuestionOutlined />
                              Get help
                          </Space>
                      </a>
                  </Dropdown>
                  <Menu items={items} mode='horizontal' className='menu' theme={'dark'}/>
              </Flex>
          </Header>
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
          <Footer style={{textAlign: "center"}}>Trying ant design ©{new Date().getFullYear()}</Footer>
      </Layout>

  );
}

export default App;
