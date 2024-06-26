export interface IComment {
    user: string;
    text: string;
    rate: number;
    date: string;
}

export interface ICommentForm {
    comments: Array<IComment>;
    setComments: Function;
}


export interface ICommentEl {
    comment: IComment;
    index: number;
}