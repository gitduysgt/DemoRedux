import {createSlice} from '@reduxjs/toolkit';
const initialListUsers = [];

const listUserSlice = createSlice({
    name: 'listUserSlice',
    initialState: initialListUsers,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const newUser = action.payload;
            const userIndex = state.findIndex(i => i.id === newUser.id);
            if(userIndex >=0 ){
                state[userIndex] = newUser;
            }
        }
    }
});

const {reducer, actions} = listUserSlice;
export const {addUser, editUser} = actions;
export default reducer;
