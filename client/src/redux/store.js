import {configureStore} from '@reduxjs/toolkit'
import { Reducer } from './reducer/userReducer'; 
import { cartReducer } from './reducer/cart';

const Store = configureStore({
    reducer:{
        user: Reducer,
        cart: cartReducer,
    },
});

export default Store;