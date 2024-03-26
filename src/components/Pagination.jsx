import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { totalData, prevPage, nextPage , currentPage } from "../store/modules/paginationSlice";
import { PaginationWrap } from "./ paginationStyle";
 
 
const Pagination = () => {
    const {noticedata} = useSelector(state => state.notice)
    const {customerdata} = useSelector(state => state.customer)
    const {currPage, totalPage} = useSelector(state => state.pagination)
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(totalData())
    },
    [ customerdata ,noticedata])

    //강제 배열처리
    console.log(totalPage)
    const arr = [...Array(totalPage)]
    console.log(arr)
  return (
    <PaginationWrap>
      <div>
        <button onClick={()=>dispatch(prevPage())}>{`<<`}</button>
        {
            arr.map((_,idx) =>    <button className={currPage === (idx+1) ? "on" : "" } onClick={()=>dispatch(currentPage(idx+1))}>{idx +1}</button>)
        }

  
       
        <button onClick={()=>dispatch(nextPage()) }>{`>>`}</button>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;