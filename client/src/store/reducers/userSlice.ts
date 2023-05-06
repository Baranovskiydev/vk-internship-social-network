import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreatorUser";
import { ObjectId } from "mongoose";

interface UserState{
    users: IUser[],
    isLoading: boolean;
    error:string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ""
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})


export default UserSlice.reducer;