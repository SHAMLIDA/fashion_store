import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchproduct=createAsyncThunk('productes/fetchproduct',async()=>{
    const result = await axios.get('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(result.data.products))
    console.log(result.data);
    return result.data.products
})

const productSlice=createSlice({
    name:`products`,
    initialState:{
        allproducts:[],
        dummyproducts:[],
        pending:false,
        error:""

        
    },
    reducers:{
           searchproducts:(state,action)=>{
            state.allproducts=state.dummyproducts.filter(item=>item.title.toLowerCase().includes(action.payload))
           }

    },
    extraReducers:
        (builder)=>{

            builder.addCase(fetchproduct.fulfilled,(state,action)=>{
                state.allproducts=action.payload
                state.dummyproducts=action.payload
                state.loading=false,
                state.error=""

            })
            builder.addCase(fetchproduct.pending,(state,action)=>{
                state.allproducts=[]
                state.loading=true,
                state.error=""

            })
            builder.addCase(fetchproduct.rejected,(state,action)=>{
                state.allproducts=[]
                state.loading=false,
                state.error="API call faild........... please try after sometime"

            })

        }
         
    
})
export const {searchproducts}=productSlice.actions
export default productSlice.reducer