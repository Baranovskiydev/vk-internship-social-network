import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface otherUsersState{
    users: IUser[];
    isLoading: boolean;
    error:string | unknown;

}

const initialState: otherUsersState = {
    users: [],
    isLoading: false,
    error: ""
}

export const otherUserSlice = createSlice({
    name: "otherUsers",
    initialState,
    reducers:{
        fetchAllUsersLoading(state){
            state.isLoading = true;
            state.error = '';
        },
        fetchAllUsersError(state, action: PayloadAction<string | unknown>){

            state.error = action.payload;
            state.isLoading = false;
        },
        fetchAllUsersSuccess(state, action: PayloadAction<IUser[]>){
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
            

        }
    }
})

export default otherUserSlice.reducer;