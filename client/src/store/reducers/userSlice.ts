import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState{
    user: IUser;
    isLoading: boolean;
    error:string | unknown;
    isAuth: boolean;
}

const initialState: UserState = {
    user: {
        user_id: "",
        email: "",
        avatar_link: "../../assets/user.png",
        posts: [""],
        friends: [""]
    },
    isLoading: false,
    error: "",
    isAuth: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        fetchUserLoading(state){
            state.isLoading = true;
            state.error = '';
        },
        fetchUserError(state, action: PayloadAction<string | unknown>){

            state.error = action.payload;
            state.isLoading = false;
        },
        fetchUserSuccess(state, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
            state.isAuth = true

        },
        logoutUser(state){
            localStorage.removeItem('token');
            state.isAuth = false;
            state.user = initialState.user;
        }
    },
})


export default userSlice.reducer;