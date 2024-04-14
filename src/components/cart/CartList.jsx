import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { AllChk, clearCart, clearSelectedCart, SingleChk, totalCart } from "../../store/modules/cartSlice";
import CartItem from "./CartItem";
import { CartListWrap } from "./cartStyle";

const CartList = ({item}) => {  
    const {carts,cartTotal,checkItems }  =useSelector(state => state.cart)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [cartdata, setCartData] = useState(carts)

  const { isChk } = carts


   useEffect(()=>{
    dispatch(totalCart())
   },[])
   const handleAllCheck = (e) => {
     const {name, checked} = e.target
     if(name == 'all'){

      setCartData(cartdata.map(item => {
        return{
            ...item,
            isChk : checked
        }
    }))

     }



  }

  const handleSingleCheck = (checked, id) => {
//     if (checked) {
//       // 단일 선택 시 체크된 아이템을 배열에 추가
//       // setCheckItems(prev => [...prev, id]);
//       // increaeeItem(id)
//       console.log('react ' , id)
//       console.log('carts ' , carts[1].price)
      
//       const newITem = carts.find(item => item.id === id )
//       if(newITem){
//         console.log('help')
//       }
//       console.log(carts)
//       setCartTotal (cartTotal.reduce((acc, curr) => acc + curr, 0)
// )
      
//     } else {
//       // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
//       setCheckItems(checkItems.filter((el) => el !== id));
//     }
    // isChk != isChk
 
  };

  const onclearSelected=(id)=>{
    setCheckItems()
  }

    return (
        <CartListWrap className="cart-wrap">
          <div className="inner">        
              <h2>장바구니</h2>
                <div className="cart-list">
                    <div className="cart-top">
                      <div className="first">Item</div>
              {/* {        <div>
                                  <input type='checkbox' name={`select-${cartdata.id}`}
                      onChange={(e) => handleAllCheck(e.target.checked, cartdata.id)}
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(cartdata.id) ? true : false}/>
                                  <label htmlFor="all">전체선택</label>
                              </div>} */}
                        {/* <label  htmlFor="all">전체선택 </label> */}
                        {/* <input type="checkbox" name="" id="checkedAll" onChange={handleAllCheck} checked={item.ischk}/> */}
                        {/* <input type="checkbox" name='all'id='all'  onChange={handleAllCheck} checked={ cartdata.filter(item => item.isChk !== true ).length< 1} /> */}
                        <ul>
                            <li className="itemName">상품명</li>
                            <li className="itemNum">수량</li>
                            <li>합계</li>
                        </ul>
                    </div>
                    {
                        carts.map(item =>  <CartItem id={item.id} item={item} checkItems={checkItems} handleSingleCheck={handleSingleCheck} handleAllCheck={handleAllCheck}/>)
                    }

                </div>
                <div className="cart-bottom">
                    <p><strong>구매하기 </strong>
                      <span>  {checkItems &&  checkItems.length} 개</span> 
                    </p>                
                    <p><strong>총금액</strong>
                      <span> total :  {cartTotal} 원</span> 
                    </p>
                </div>
                <button  onClick={()=>navigate(`product`)} >쇼핑하러가기</button>
                <button  onClick={()=>dispatch(clearCart())} >전체 삭제</button>
                <button  onClick={onclearSelected} >선택 삭제</button>
                {/* <button  onClick={()=>dispatch(())} >선택 삭제</button> */}
          </div>
        </CartListWrap>
    );
};

export default CartList;