import React, {useState} from 'react';
import {Breadcrumb, Button, Divider, Flex, FloatButton, Input, Typography} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";

const ContentBlock = () => {
    const [editableStr, setEditableStr] = useState('Simple text');
    return (
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
            </div>
        </Content>
    );
};

export default ContentBlock;