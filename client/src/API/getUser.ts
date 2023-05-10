import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {singleUserSlice} from "../store/reducers/singleUser"

interface IgetU{
    user: IUser;
}

export const getSingleUser = (id: string) => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(singleUserSlice.actions.fetchsUserLoading())
            const response = await axios.get<IgetU>("http://localhost:7777/api/user/user",{
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`,
                id:id
            }            })
            dispatch(singleUserSlice.actions.fetchsUserSuccess(response.data.user))
        } catch (error) {
            dispatch(singleUserSlice.actions.fetchsUserError(error))
            console.log("ВОТ ЭТА ОШИБКА",error)
        }
    }
}