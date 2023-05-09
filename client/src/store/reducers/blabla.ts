import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import axios from "axios"

const URL = ""

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(URL)
            return response.data;
        } catch (error) {
            return error;
        }

    }
)