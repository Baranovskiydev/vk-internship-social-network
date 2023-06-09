import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {userSlice} from "../store/reducers/userSlice"

interface Ilogin {
    token:string;
    user: IUser;
}

export const login = (email: string,password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetchUserLoading())
            const response = await axios.post<Ilogin>("http://localhost:7777/api/auth/login",{
                email,
                password
            })
            dispatch(userSlice.actions.fetchUserSuccess(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (error) {
            dispatch(userSlice.actions.fetchUserError(error))
            alert(error)
        }
    }

}