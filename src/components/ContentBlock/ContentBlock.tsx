import React, {useEffect, useState} from 'react';
import {Breadcrumb, Divider, Flex, Rate, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import {IComment} from "../../interface";
import {getJSONFromStorage, setJSONToStorage} from "../../localStorage";
import {commentsArr} from "../../data";

const ContentBlock = () => {
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
        <Content className={'content'}>
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
                    <Comment comment={comment} index={index}/>
                ))}
            </div>
        </Content>
    );
};

export default ContentBlock;