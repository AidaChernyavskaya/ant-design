import React, {FC} from 'react';
import {Flex, Rate, Typography} from "antd";
import {HeartFilled} from "@ant-design/icons";
import {ICommentEl} from "../../interface";

const Comment: FC<ICommentEl> = ({comment, index}) => {
    return (
        <Flex
            vertical={true} justify={"flex-start"} align={"flex-start"}
            style={{marginBottom: '10px', width: '100%'}} key={index}
        >
            <Flex justify={"space-between"} align={"center"} style={{width: '100%'}}>
                <Flex vertical={true} justify={"flex-start"} align={"flex-start"}>
                    <Typography.Text strong={true}>{comment.user}</Typography.Text>
                    <Typography.Text type={"secondary"}>{comment.date}</Typography.Text>
                </Flex>
                <Flex justify={"flex-end"} align={"center"}>
                    <Rate disabled defaultValue={comment.rate} character={<HeartFilled/>} style={{color: 'coral'}}/>
                </Flex>
            </Flex>
            <Typography.Text>{comment.text}</Typography.Text>
        </Flex>
    );
};

export default Comment;