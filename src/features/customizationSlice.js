import {createSlice} from "@reduxjs/toolkit"
import config from 'config';

const initialState = {
    isOpen: [], // for active default menu
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

export const customizationSlice = createSlice({
    name : "customization",
    initialState,
    reducers : {
        menuOpen : (state, action) => {
            state.isOpen = [action.payload.id]
        },
        setMenu : (state, action) => {
            state.opened = action.payload.opened
        },
        set_Font_Family : (state, action) => {
            state.fontFamily =  action.payload.fontFamily
        },
        set_Border_Radius : (state, action) => {
            state.borderRadius = action.payload.borderRadius
        }
    }
})

export const {menuOpen, setMenu, set_Font_Family,set_Border_Radius} = customizationSlice.actions

export default customizationSlice.reducer