import { Post } from "./post";

export interface User {
    themes: string[],
    posts: Post[],
    _id: string,
    tel: string,
    email: string,
    username: string,
    password: string,
    created_at: string,
    updatedAt: string,
    __v: number
}

export interface UserAuth{
    id: string,
    firstname: string,
    email: string,
    phonenumber: string,
}