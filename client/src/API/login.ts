import axios from "axios"
import { AppDispatch } from "../store/store"

export const login = (email: string,password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post("http://localhost:7777/api/auth/login",{
                email,
                password
            })
            console.log(response.data)
        } catch (error) {
            alert(error)
        }
    }

}