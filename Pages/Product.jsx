import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShpContext'
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
    </div>
  )
}

export default Product