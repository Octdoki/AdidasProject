import { createSlice } from '@reduxjs/toolkit'
import customerdata from '../../assets/api/customerdata'

const initialState = {
    customerdata : customerdata,
    current : {}
}
let  no=customerdata.length+1

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    add: (state, action) => {
        state.customerdata.push({ id:no++, ...action.payload})
    },
    remove: (state, action) => {
        state.customerdata = state.customerdata.filter(item => item.id !== action.payload)
    },
    cancle: (state, action) => {
      
    },
    update: (state, action) => {
     state.customerdata =state.customerdata.map(item => item.id === action.payload.id ? action.payload : item )
    },
    edit: (state, action) => {
      state.current = action.payload
    },
    changeInput : (state, action) =>{
        // state.
        state.current = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const {add, remove,edit,cancle,update} = customerSlice.actions

export default customerSlice.reducer