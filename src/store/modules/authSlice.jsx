import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from "nanoid"

const initialState = {
  user : null,
  authed : false,// 로그인 여부 
  dataList :  localStorage.getItem('dataList') ? JSON.parse(localStorage.getItem('dataList')) : [
    {id : 1, userid : 'admin', password : '' },
  ]
}
let no = 1
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login : (state,action) =>{
        const {email,password} =action.payload
        const newitem = state.dataList.find(item => item.email === email)
        if(newitem){
          if(newitem.password === password) {
            state.user = newitem
            state.authed = true
          }else{
            alert('비밀번호 확인')
            
          }
        }else{
          alert('아이디 확인')
        }
    },
    logout : (state, action)=>{
      state.user = null
      state.authed = false
    },
    signup : (state,action) =>{
      const { email, tel, username, password} =action.payload
      state.dataList = [...state.dataList, {id: nanoid(), ...action.payload}]
      localStorage.setItem('dataList', JSON.stringify(state.dataList))
    }

  },
})

// Action creators are generated for each case reducer function
export const { signup , login, logout } = authSlice.actions

export default authSlice.reducer