import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";


interface PostState{
    posts: IPost[];
    isLoading: boolean;
    error: string | unknown;
}

const initialState: PostState ={
    posts: [],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice(
    {
        name: "posts",
        initialState,
        reducers:{
            fetchPostsLoading(state){
                state.isLoading = true;
                state.error = '';
            },
            fetchPostsError(state, action: PayloadAction<string | unknown>){
    
                state.error = action.payload;
                state.isLoading = false;
            },
            fetchPostsSuccess(state, action: PayloadAction<IPost[]>){
                state.isLoading = false;
                state.error = '';
                state.posts = action.payload;
                
    
            }
        }
    }
)

export default postSlice.reducer;