import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/api/cartdata'

const initialState = {
  carts : [],
  cartTotal : 0,
  products : products,
  checkItems: [], // 체크된,

}
let itemNum = 1
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts = [...state.carts, {CntItem : itemNum,  ...action.payload}]
      // state.carts.push(action.payload)
    },
    removeCart: (state,action) => {
      state.carts = state.carts.filter(item =>  item.id !== action.payload)
    },
    totalCart: (state,action) => {
      // state.checkItems = state.checkItems.filter(item =>  item.id !== action.payload)
    
      state.cartTotal = state.checkItems.reduce((acc, curr) => acc + curr.calEachitem, 0)

    },
    sortCart: (state,action) => {
/*       if(action.payload === 'title'){
        state.products.sort((a,b) => a.title>b.title ? 1 : -1)
      }
      
      if(action.payload === 'price'){
        state.products.sort((a,b) => a.title>b.title ? 1 : -1)
      }
      
      if(action.payload === 'category'){
        state.products.sort((a,b) => a.title>b.title ? 1 : -1)
      } */
      
      if(action.payload !== ''){
        state.products.sort((a,b) => a[action.payload]>b[action.payload] ? 1 : -1)
      }
    },
    searchCart: (state,action) => {
      state.products = products.filter(item => item.description.toLowerCase().includes(action.payload.toLowerCase()))
      if (state.products.length === 0){
        alert("cannot find item")
        state.products = products
        
      }
    },
    resetCart: (state,action) => {
      state.products = products
    },
    clearCart : (state,action)=>{
      state.carts = []
    },
    clearSelectedCart : (state,action) =>{  
      state.carts = state.carts.filter( item => item.id !== Number(action.payload))
    },
    SingleChk : (state, action)=>{

        state.checkItems.push(action.payload)
        state.cartTotal = state.checkItems.reduce((acc, curr) => acc + curr.calEachitem, 0)
   
    },
    removeSingleChk : (state, action)=>{
      
      state.checkItems = state.checkItems.filter(item => item.id !== action.payload)
      state.cartTotal = state.checkItems.reduce((acc, curr) => acc + curr.calEachitem, 0)
    },    
    AllChk : (state,action)=>{
      // state.checkItems = [...state.carts]
      // state.checkItems = state.checkItems.map(item => item.isChk = true)
      
       state.carts = state.carts.map(item => {
         return{
           ...item,
           isChk : !item.isChk
         }
       })
      
    }

  },
})

// Action creators are generated for each case reducer function
export const {  AllChk,addCart, removeCart, clearCart, totalCart, sortCart, clearSelectedCart, resetCart, searchCart, handleAllCheckCart,  SingleChk,   removeSingleChk,  } = cartSlice.actions

export default cartSlice.reducer