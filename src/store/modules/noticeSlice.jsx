import { createSlice } from '@reduxjs/toolkit'
import noticedata from '../../assets/api/noticedata'

const initialState = {
    noticedata : noticedata
}

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const { } = noticeSlice.actions

export default noticeSlice.reducer