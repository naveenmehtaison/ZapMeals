import { createSlice } from "@reduxjs/toolkit"
import { obj } from "./mockdata"
const initialstate = {login:false,token:'',cart:[],showcart:false, totalprice:0, products:obj}
const createslice = createSlice({
    name:'cart',
    initialState:initialstate,
    reducers:{
        setcart(state,action){

            state.showcart=!state.showcart
        },
        loginfunc(state){
            state.login=true
        },
        logoutfunc(state){
            state.login=false
        },
        addtocart(state,action){
            const cehck = state.cart.find((ele)=>ele.item.id ==action.payload.item.id)
            const filterarray = state.cart.filter((ele)=>ele.item.id!==action.payload.item.id)
            if(cehck){

                const dummy = {...action.payload,quantity:parseInt(cehck.quantity)+1}
   
                state.totalprice=parseInt(state.totalprice)+parseInt(action.payload.item.default_price)

                state.cart=[...filterarray,dummy]


            }
            else{
                const dummy = {...action.payload,quantity:1}

                state.totalprice=parseInt(state.totalprice)+parseInt(action.payload.item.default_price)

                state.cart=[...state.cart,dummy]

            }


        },
        delfromcart(state,action){
            const new_cart = state.cart.filter((ele,item)=>ele.item.id!==action.payload.item.id)
            state.cart = [...new_cart]
        },
        decfromcart(state,action){
            const j = {...action.payload}
            j.quantity--
            const cehck = state.cart.find((ele)=>ele.item.id ==action.payload.item.id)
            const filterarray = state.cart.filter((ele)=>ele.item.id!==action.payload.item.id)
            if(j.quantity===0){
                state.cart=[...filterarray]
            }
            else{
                state.cart=[...filterarray,j] 
            }
            
        },
        incfromcart(state,action){
            const j = {...action.payload}
            j.quantity++
            const cehck = state.cart.find((ele)=>ele.item.id ==action.payload.item.id)
            const filterarray = state.cart.filter((ele)=>ele.item.id!==action.payload.item.id)
            state.cart=[...filterarray,j] 
        }
    }
})
export const SearchBarProducts = createSlice({
    name:'SearchBar',
    initialState:initialstate,
    reducers:{ 
        setProducts(state,action){
            state.products= action.payload

        },
        filterdata(state,action){
            console.log('insinde fuilere data', action.payload, [...state.products])
            const newdata = obj.filter((ele, item) => {
                return ele.info.name.toLowerCase().includes(action.payload.toLowerCase());
            });
            
            console.log(action.payload, newdata)
            state.products = newdata
            if(action.payload.length===0){
                state.products = obj
            }
        }
    }


})
export const {setProducts,filterdata} = SearchBarProducts.actions
export const { loginfunc, logoutfunc, addtocart, delfromcart ,setcart,decfromcart,incfromcart} = createslice.actions
export default createslice