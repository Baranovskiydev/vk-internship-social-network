import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {userSlice} from "../store/reducers/userSlice"
import { IPost } from "../models/IPost";

interface IaddPost {
    token: string;
    post: IPost;
}

export const auth = () => {
    return async (dispatch: AppDispatch) => {
        try {
           
        } catch (error) {

            console.log(error)
        }
    }

}