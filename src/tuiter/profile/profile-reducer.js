import { createSlice } from "@reduxjs/toolkit";
import user from './profile-data.json';

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        editUser(state, action) {
            console.log(action.payload);
            return action.payload;
    }}
});

export const {editUser} = userSlice.actions;
export default userSlice.reducer;