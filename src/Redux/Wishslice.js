import { createSlice } from "@reduxjs/toolkit";

const whishslice=createSlice({
    name:'mywhislist',
    initialState:[],
      
   
    reducers:{
        addToWishList:(state,action)=>{

            state.push(action.payload)
        },
        removefromwhislist:(state,action)=>{
         return state.filter(item=>item.id!=action.payload)

        }
             
        
    }
})

export const {addToWishList,removefromwhislist}=whishslice.actions
export default whishslice.reducer