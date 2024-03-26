
import { ProductSearchWrap } from './ProjectStyle';
import { useDispatch } from "react-redux";
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';
import { StyleSheetContext } from 'styled-components';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const ProductSearch = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const textRef = useRef()

    const onSort=(e)=>{
        e.preventDefault()
        const {value} = e.target
       dispatch(sortCart(value))

    }

    const changeInput =e=>{
        const  {value} = e.target
        setText(value)
    }
    const onSubmit =e=>{
        e.preventDefault()
        if(!text) return
        dispatch(searchCart(text))
        // setText('')
        textRef.current.focus()

    }

    useEffect(()=>{
        dispatch(searchCart(''))
    },[])
    return (
        <ProductSearchWrap>
            <form onClick={onSubmit}>
                <p>
                <div className="search-wrap">
                        <input type="text" name="text" value={text} onChange={changeInput} placeholder="" ref={textRef} />
                        <svg data-name="\uB808\uC774\uC5B4 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search-icon"><path d="M21.85 21.07L17 16.14a8.46 8.46 0 002.08-5.57 8.58 8.58 0 10-2.82 6.33l4.82 4.92a.54.54 0 00.38.15.53.53 0 00.38-.9zM3.06 10.57a7.49 7.49 0 117.49 7.49 7.5 7.5 0 01-7.49-7.49z" fill="#231F20"></path></svg>
                        {/* <button>검색</button> */}
                    </div>
                </p>
                <p>
                    <select name="" id="" onChange={onSort} >
                        <option value="">추천순</option>
                        <option value="title">제품명</option>
                        <option value="price">가격</option>
                        <option value="category">카테고리</option>
                    </select>
                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;