import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Product"
import Wishslice from "./Wishslice";
import Cardslice from "./Cardslice";

const Estore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:Wishslice,
        cartSliceReducer:Cardslice,


    }
})
export default Estore