import {configureStore} from "@reduxjs/toolkit"
import customizationReducer from "../features/customizationSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer : {
        customization : customizationReducer,
        auth : authReducer
    }
})