import { createSlice } from "@reduxjs/toolkit";


const userSLice = createSlice({
    name:'user',
    initialState:{
        users :[]
    },
    reducers:{
        getUsers:(state,action)=>{
            state.users = action.payload;

        }
    }
})

export const {getUsers } = userSLice.actions;

export default userSLice.reducer;