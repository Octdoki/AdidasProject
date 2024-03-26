import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart, removeSingleChk, SingleChk } from "../../store/modules/cartSlice";
import { useState } from 'react';

 
const CartItem = ({item,  handleSingleCheck, handleAllCheck }) => {
  const {carts,checkItems }  =useSelector(state => state.cart)
  const {id,image, title, description, price,  isChk, CntItem } = item
  const navigate = useNavigate()
  const dispatch = useDispatch()
 console.log('cartItem t/f : ' , isChk)
  const [calEachitem, setCalEachitem] = useState(price)
  const [onCntItem, setOnCntItem] = useState(CntItem)
  const [copyChk, setCopyChk] = useState(false)
  // const [copyChk, setCopyChk] = useState(isChk)

  const additem =()=>{

    setOnCntItem(onCntItem +1)
    // console.log('cartEI :' , calEachitem)
    setCalEachitem((onCntItem + 1) * price)
    console.log('cartEI :' , calEachitem)
    // dispatch(calEachitem)
  }
  console.log('1' ,copyChk)
  const onIncrease =(e)=>{
    
    // console.log(item.isChk)
    // let copyChk = {...isChk}
    const {name, checked} = e.target
 
     //  dispatch(AllChk())
      setCopyChk(!copyChk)
      if(!copyChk){
        console.log('머리뽀갈날거같아' ,copyChk)
        dispatch(SingleChk({...item,calEachitem}))
    
      }else{
        console.log('false?' + copyChk)
        dispatch(removeSingleChk(id))
      }
      
  }
  const minusItem=()=>{
    if(onCntItem-1 >0){
      setOnCntItem(onCntItem -1)
      setCalEachitem((onCntItem -1) * price)
    }
  }

    return (
        <article> 
                   <input type="checkbox" onChange={onIncrease} checked={copyChk}  />               
          {/* <input type="checkbox" onChange={(e) => handleSingleCheck(e.target.checked, id)} checked={checkItems.includes(id) ? true : false} />          */}
          {/* <input type="checkbox" />          */}
          <img src={image}  alt="" />
          <div>
            <h3>
              {title}
            </h3>
            <p className="Btn">
              <button className="cntBtn" onClick={minusItem}>-</button>
              <span>{onCntItem}</span>
              <button className="cntBtn" onClick={additem}>+</button>
            </p>
            {/* <div onClick={additem} >+</div>
            <span >{onCntItem} </span>
            <div onClick={minusItem}>-</div> */}
            {/* <input type="number" id="" /> */}
            
            <span> {calEachitem}  원</span>
            {/* <span> 수랑: {onCntItem } * 가격 {price} = {calEachitem}원</span> */}

          </div>
          <button onClick={()=>dispatch(removeCart(id))}> 삭제 </button>        
        </article>
    );
};

export default CartItem;