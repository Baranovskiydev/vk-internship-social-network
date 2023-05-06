
export interface IUser{
    user_id: string;
    email: string | boolean;
    name?: string;
    surname?: string;
    age?: string;
    city?: string;
    university?: string;
    avatar_link: string;
    posts: string;
    friends: string;
}