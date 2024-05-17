import React, {useEffect, useState} from 'react';
import {Breadcrumb, Button, Divider, Flex, Form, Input, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;
import {useForm} from "antd/es/form/Form";
import CommentForm from "../CommentForm/CommentForm";

export const getJSONFromStorage = (key: string): Array<IComment> => {
    const serialized = localStorage.getItem(key);
    if (serialized == null){
        return [];
    }
    return JSON.parse(serialized);
};

export const setJSONToStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export interface IComment {
    user: string;
    text: string;
}

const ContentBlock = () => {
    const commentsArr: Array<IComment> = [
        {
            'user': 'User name 1',
            'text': 'Comment text'.repeat(5),
        },
        {
            'user': 'User name 2',
            'text': 'Comment text 2'.repeat(3),
        },
        {
            'user': 'User name 3',
            'text': 'Comment text 3 3',
        },
    ];
    const [comments, setComments] = useState<Array<IComment>>(getJSONFromStorage('comments'));


    useEffect(() => {
        if (comments.length === 0) {
            setJSONToStorage('comments', JSON.stringify(commentsArr));
            setComments(commentsArr);
        }
    },[])

    useEffect(() => {
        setJSONToStorage('comments', JSON.stringify(comments));
    },[comments])


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

                <CommentForm comments={comments} setComments={setComments}/>
                <Divider/>

                <Typography.Title level={5}>{comments.length} comments</Typography.Title>
                {comments.map((comment,index) => (
                    <Flex vertical={true} justify={"flex-start"} align={"flex-start"} style={{marginBottom: '10px'}} key={index}>
                        <Typography.Text strong={true}>{comment.user}</Typography.Text>
                        <Typography.Text>{comment.text}</Typography.Text>
                    </Flex>
                ))}
            </div>
        </Content>
    );
};

export default ContentBlock;