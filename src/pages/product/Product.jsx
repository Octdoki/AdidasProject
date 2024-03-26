 
 
import ProductSearch from './ProductSearch';
import { ProductWrap } from './ProjectStyle';

import ProductItem from '../../components/product/ProductItem';
import { useSelector } from 'react-redux';
import { Pagination } from 'swiper/modules';

const Product = () => {
  const {products} = useSelector(state => state.cart )
    return (
      <ProductWrap>
      <div className="inner">
      <h2>  Adidas 베스트 </h2>
      <ProductSearch/>
      <div className="cart-box">
          {
            products.map(item=><ProductItem key={item.id} item={item}/>)
            
          }     
            {/* <Pagination/>        */}
      </div>
    
      </div>
    </ProductWrap>                
    );
};

export default Product;