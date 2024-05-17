import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";
import {IComment} from "../ContentBlock/ContentBlock";

export interface ICommentForm {
    comments: Array<IComment>;
    setComments: Function;
}

const CommentForm: FC<ICommentForm> = ({comments, setComments}) => {
    const [form] = useForm();
    const [commentText, setCommentText] = useState('');
    const [user, setUser] = useState('');

    const handleClick = () => {
        const comment = {
            user: user,
            text: commentText,
        };
        setComments([...comments, comment]);
        setCommentText('');
        setUser('');
        form.resetFields();
    }

    return (
        <Form
            name='comment'
            autoComplete={'off'}
            onFinish={handleClick}
            style={{maxWidth: 600}}
            form={form}

        >
            <Form.Item
                label={'User name:'}
                name={'username'}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input
                    placeholder={'Type your name'}
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={'Comment:'}
                name={'comment'}
                rules={[
                    {
                        required: true,
                        message: 'Please input your comment!',
                    },
                ]}
            >
                <Input.TextArea
                    placeholder={'Type your comment'}
                    onChange={(event) => setCommentText(event.target.value)}
                    value={commentText}
                    autoSize={{ minRows: 2, maxRows: 8 }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type={"primary"}
                    style={{ background: "coral"}}
                    htmlType={"submit"}
                >
                    Leave comment
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CommentForm;