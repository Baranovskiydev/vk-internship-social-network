import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState{
    users: IUser[];
    isLoading: boolean;
    error:string | unknown;

}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ""
}