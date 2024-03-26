import { useSelector } from "react-redux";
import CustomerItem from "./CustomerItem";
import { CustomerLIstWrap } from "./CustomerStyle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";
import noticedata from "../../assets/api/noticedata";

const CustomerLIst = () => {
   const {customerdata} = useSelector(state => state.customer)
   const dispatch = useDispatch()
   const {  currPage ,  postsPerpage } = useSelector(state => state.pagination)
   const navigate =useNavigate()
   const lastPost = currPage *  postsPerpage
   const firstPaage = lastPost -  postsPerpage
   const currentPosts = customerdata.slice(firstPaage,  lastPost)
   useEffect(()=>{
    dispatch(addData(customerdata))
   },[])
    return (
        <CustomerLIstWrap>
        <table className="customerTable">
        <caption>게시판</caption>
        <colgroup>
            <col className="num" />
            <col className="title" />               
            <col className="name" />               
            <col className="date" />               
        </colgroup>
        <thead>
            <tr>
                <th>번호</th>
                <th>내용</th>              
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
             {
                 currentPosts.map(item => <CustomerItem key={item.id} item={item}/>)
             }
             {/* {
                 customerdata.map(item => <CustomerItem key={item.id} item={item}/>)
             } */}
       </tbody>
       </table>
            <p><button onClick={()=>{navigate(`customeradd`)}} >글 작성 </button></p>
       </CustomerLIstWrap>
    );
};

export default CustomerLIst;