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

  //  const [chkItems, setChkItems] = useState([]);

 
  const { isChk } = carts


   useEffect(()=>{
    dispatch(totalCart())
   },[])
   const handleAllCheck = (e) => {
     const {name, checked} = e.target
     if(name == 'all'){
      //  dispatch(AllChk())
      setCartData(cartdata.map(item => {
        return{
            ...item,
            isChk : checked
        }
    }))
    console.log('???' ,cartdata[0].isChk)
     }

    //  dispatch(AllChk())
  /*   if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      carts.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);

    }
    else if(!checked){
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
  
      // setCheckItems([]);
      // console.log(checkItems)
    } */
    
    // setCartData([...cartdata].map(item => item.isChk = true))
    // console.log(cartdata[0].isChk)

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
                      <div>
                                  <input type='checkbox' name={`select-${cartdata.id}`}
                      onChange={(e) => handleAllCheck(e.target.checked, cartdata.id)}
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(cartdata.id) ? true : false}/>
                                  <label htmlFor="all">전체선택</label>
                              </div>
                        {/* <label  htmlFor="all">전체선택 </label> */}
                        {/* <input type="checkbox" name="" id="checkedAll" onChange={handleAllCheck} checked={item.ischk}/> */}
                        {/* <input type="checkbox" name='all'id='all'  onChange={handleAllCheck} checked={ cartdata.filter(item => item.isChk !== true ).length< 1} /> */}
                        <ul>
                            <li>상품정보</li>
                            <li>수량</li>
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