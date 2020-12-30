
import { configureStore } from '@reduxjs/toolkit';
import listUserReducer from 'features/ListUser/listuserSlice';

const rootReducer = {
    listUserStores: listUserReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;