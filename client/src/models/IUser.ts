
export interface IUser{
    _id: string;
    email: string;
    name?: string;
    surname?: string;
    age?: string;
    city?: string;
    university?: string;
    avatar: string;
    posts: [string];
    friends: [string];
}