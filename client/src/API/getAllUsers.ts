import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {otherUserSlice} from "../store/reducers/otherUsersSlice"

interface IAllUsers {
    token:string;
    users: IUser[];
}

export const auth = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(otherUserSlice.actions.fetchAllUsersLoading())
            console.log(localStorage.getItem('token'))
            const response = await axios.get<IAllUsers>("http://localhost:7777/api/user/all",
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(otherUserSlice.actions.fetchAllUsersSuccess(response.data.users))
            console.log(response.data)
        } catch (error) {
            dispatch(otherUserSlice.actions.fetchAllUsersError(error))
            console.log(error)
        }
    }

}