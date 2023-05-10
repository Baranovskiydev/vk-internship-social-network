import { configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import postReducer from './reducers/postSlice';
import friendReducer from './reducers/friendsSlice';
import otherUsersReducer from './reducers/otherUsersSlice';





const rootReducer = combineReducers({
  userReducer,
  postReducer,
  friendReducer,
  otherUsersReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
})
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']