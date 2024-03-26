import React from 'react';
import { Con2Wrap } from './ConStyle';
import { Outlet, Link } from "react-router-dom"; 
const Con2 = () => {
    return (
        <Con2Wrap>
             <ul>
                    <li >
                        <div>
                            <h3>IMPOSSIBLE IS NOTHING</h3>
                            <p>
                            달리다 넘어져도 괜찮아.<br/> 다시 일어서면 되니까.​
<br/>지금의 너로 충분해. 그냥 달리는 거야.
불가능, 그것은 아무것도 아니니까.
                            </p>
                            <span className="read">
                                <Link to="/about">
                                    READ MORE
                                    <img src="./images/arrow.svg" alt="화살표 icon" />
                                </Link>
                            </span>
                        </div>
                    </li>
                    <li className="adventImg"></li>
                </ul>
   
        </Con2Wrap>
    );
};

export default Con2;