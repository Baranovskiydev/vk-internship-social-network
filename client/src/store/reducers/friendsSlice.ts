
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface friendsState{
    users: IUser[];
    isLoading: boolean;
    error:string | unknown;

}

const initialState: friendsState = {
    users: [],
    isLoading: false,
    error: ""
}


export const friendSlice = createSlice({
    name: 'friends',
    initialState,
    reducers:{

    }
})

export default friendSlice.reducer;