import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addTwoCart:((state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)

            if(existingProduct){
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++;
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
                state=[...remainingProduct,existingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
                
        }),
        removeCartItem:((state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }),

        inquantity:((state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity++;
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]


            



        }),
        indecrement:((state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--;
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]
        }),
        emptycart:(()=>{
            return [];
           


        }),


    }

    })

    export default cartSlice.reducer
    export const { addTwoCart ,removeCartItem,inquantity, indecrement,emptycart} = cartSlice.actions
