import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import userSlice from "./userSlice";
import axios from "axios"

const URL = ""

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IUser[]>(URL)
        return response.data;
    }
)