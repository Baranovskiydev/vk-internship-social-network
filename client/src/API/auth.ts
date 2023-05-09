import axios from "axios"
import { AppDispatch } from "../store/store"
import { IUser } from "../models/IUser"
import {userSlice} from "../store/reducers/userSlice"

interface IAuth {
    token:string;
    user: IUser;
}

export const auth = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetchUserLoading())
            console.log(localStorage.getItem('token'))
            const response = await axios.get<IAuth>("http://localhost:7777/api/auth/auth",
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(userSlice.actions.fetchUserSuccess(response.data.user))
            console.log(response.data)
        } catch (error) {
            dispatch(userSlice.actions.fetchUserError(error))
            localStorage.removeItem('token');
            //dispatch(userSlice.actions.logoutUser());
            console.log(error)
        }
    }

}