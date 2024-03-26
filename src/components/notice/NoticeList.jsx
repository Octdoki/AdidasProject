 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../store/modules/paginationSlice';

import NoticeItem from './NoticeItem';
import { NoticeListWrap } from './NoticeStyle';
 
const NoticeList = () => {
    const {noticedata} = useSelector(state => state.notice)
    const {currPage, postsPerpage } = useSelector(state => state.pagination)
    
    const lastPost = currPage * postsPerpage
    const firstPost = lastPost - postsPerpage
    const currentPost= noticedata.slice(firstPost, lastPost)

    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(addData(noticedata))
    },[])
    return (
        <NoticeListWrap>
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>내용</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                  currentPost.map(item => <NoticeItem key={item.id} item={item} /> )
                }
           </tbody>
        </table>
        </NoticeListWrap>
    );
};

export default NoticeList;