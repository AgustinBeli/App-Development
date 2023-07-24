import {configureStore} from '@reduxjs/toolkit';
import shopReducer from "../Features/Slices/shopSlice";

export default configureStore({
    reducer: {
        shopReducer
    }
})