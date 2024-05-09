import React from 'react';
import {Dropdown, Flex, Menu, Space} from "antd";
import {FileOutlined, HomeOutlined, QuestionOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";

const HeaderBlock = () => {
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
    );
};

export default HeaderBlock;
