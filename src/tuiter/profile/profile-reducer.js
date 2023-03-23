import { createSlice } from "@reduxjs/toolkit";
import user from './profile-data.json';

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        editUser(state, action) {
            const { id, data } = action.payload;
            const userIndex = state.findIndex(user => user._id === id);
            state[userIndex] = { ...state[userIndex], ...data };
        }
    }
});

export const {editUser} = userSlice.actions;
export default userSlice.reducer;