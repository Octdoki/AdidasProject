import React from 'react';
import { useSelector } from 'react-redux';
import { Con1Wrap } from './ConStyle';
import { Outlet, Link } from "react-router-dom"; 

const Con1 = () => {
    const {products} = useSelector(state => state.cart )
    return (
        
        <Con1Wrap>
            <div className="inner">
                <div className="introWrap">
                <h3>Trend Now </h3>
          
                    <span className="read">
                        <Link to="/product">
                            READ MORE
                            <img src="./images/arrow.svg" alt="화살표 icon" />
                        </Link>
                    </span>  
                    </div>

            <div className='cart-box '>
        
                        {
                            products.map((item,idx) => 
                            idx < 4 && 
                       
                               <article>
                                <div>
                                <img src={item.image} alt=""  />
                                </div>
                                <h3> {item.title} </h3>
                                {/* <h4> {description} </h4>
                                <p> 
                                {
                                    carts.find(x => x.id === id ) ? 
                                    <button onClick={()=>dispatch(removeCart(id))} className="off"> 주문취소 </button> 
                                    :
                                    <button onClick={()=>dispatch(addCart(item))}> 주문하기 </button>
                                }
                                
                                
                                <span>{price} 원</span>
                                </p> */}
                                </article>
                         )
                        }
                   
                 </div>
            </div>
        </Con1Wrap>
    );
};

export default Con1;

