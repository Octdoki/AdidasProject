import React from 'react';
import { products } from '../../assets/api/cartdata';
import { ContentStyle1 } from './ContentStyle';

const Content1 = () => {
    return (
        <ContentStyle1>
          
            <h2> Trend Now </h2>
            <div className="inner">
                <h2> Trend Now </h2>
                {/* <div>
                    <ul>
                        {
                            products.map((item,idx) => 
                            <li >
                                <img src={item.} alt="" />
                            </li> )
                        }
                    </ul>
                 </div> */}
            </div>
        </ContentStyle1>     
    );
};

export default Content1;