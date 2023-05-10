import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {postSlice} from "../store/reducers/postSlice"
import { IPost } from "../models/IPost";

interface IgetU{
    posts: IPost[];
}

export const getPosts = (id: string) => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(postSlice.actions.fetchPostsLoading())
            const response = await axios.get<IgetU>("http://localhost:7777/api/post/getbyuser",{
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`,
                id:id
            }            })
            dispatch(postSlice.actions.fetchPostsSuccess(response.data.posts))
        } catch (error) {
            dispatch(postSlice.actions.fetchPostsError(error))
            console.log("ВОТ ЭТА ОШИБКА",error)
        }
    }
}