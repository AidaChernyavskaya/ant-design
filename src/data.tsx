import {FileOutlined, HomeOutlined} from "@ant-design/icons";
import React from "react";
import {IComment} from "./interface";

export const menuItems = [
    {
        key: '1',
        label: (<a href={""} target="_blank" rel="noopener noreferrer">Contact us</a>),
    },
    {
        key: '2',
        label: (<a target="_blank" rel="noopener noreferrer" href="">FAQ</a>),
    },
];
export const items = [
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

export const commentsArr: Array<IComment> = [
    {
        'user': 'User name 1',
        'text': 'Comment text'.repeat(5),
        'rate': 5,
        'date': 'October 1, 2023',
    },
    {
        'user': 'User name 2',
        'text': 'Comment text 2'.repeat(3),
        'rate': 1,
        'date': 'December 30, 2023',
    },
    {
        'user': 'User name 3',
        'text': 'Comment text 3 3',
        'rate': 5,
        'date': 'March 15, 2024',
    },
];
