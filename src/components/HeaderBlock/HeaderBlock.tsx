import React from 'react';
import {Dropdown, Flex, Menu, Space} from "antd";
import {QuestionOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";
import {items, menuItems} from "../../data";

const HeaderBlock = () => {
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
