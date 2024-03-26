import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pageData :[],
    currPage : 1,
    totalPage : 1,
    postsPerpage  :10
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    prevPage : (state,action) => {
        if(state.currPage === 1){
            state.currPage = 1 
        }else{
            state.currPage--
        }
    },
    nextPage : (state,action) => {
        if(state.currPage === state.totalPage){
            state.currPage = state.totalPage
        }else{
            
            state.currPage++
        }
    },
    currentPage : (state,action) => {
        state.currPage = action.payload
    },
    addData : (state,action) => {
        //데이터 들어오게 하는거 ..?ㅑnoticeData,cartData.. 들어오는거
        state.pageData = action.payload
    
    },
    totalData : (state,action) => {
        //emfdjdhsms epdlxj ekfma
        state.currPage= 1
        state.totalPage = Math.ceil(state.pageData.length / state.postsPerpage)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {prevPage, nextPage, currentPage, addData, totalData } = paginationSlice.actions

export default paginationSlice.reducer