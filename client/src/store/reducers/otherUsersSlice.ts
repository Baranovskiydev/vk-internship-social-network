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

    }
})

export default otherUserSlice.reducer;