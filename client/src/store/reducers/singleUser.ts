import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface singleUserState{
    user: IUser;
    isLoading: boolean;
    error:string | unknown;
}

const initialState: singleUserState = {
    user: {
        _id: "",
        email: "",
        avatar: "avatar-1683660791925-751902999.jpg",
        posts: [""],
        friends: [""]
    },
    isLoading: false,
    error: "",
}

export const singleUserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        fetchsUserLoading(state){
            state.isLoading = true;
            state.error = '';
        },
        fetchsUserError(state, action: PayloadAction<string | unknown>){
            state.error = action.payload;
            state.isLoading = false;
        },
        fetchsUserSuccess(state, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;

        },
    },
})


export default singleUserSlice.reducer;