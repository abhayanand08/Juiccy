import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Productcardother/Productcardother.css';
import {AiFillStar} from 'react-icons/ai';
import {BsHeartFill, BsHeart, BsCart2} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../redux/actions/cartAction';

const Productcardother = ({data}) => {

  const [click, setClick] = useState(false);
  const {cart} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const d = data.name;
  const count = 1;
  const product_name = d.replace(/\s+/g, '-');

  const addToCart = (id) => {
    const isItemExists = cart && cart.find((i) => i.id === id);
    if(isItemExists){
      alert("Already added in Cart")
    }else{
      dispatch(addTocart({...data,qty: count}))
      alert('Added to Cart')
    }
  }

  return (
    <div className='productcard-mainoth'>
      <div className="productcardoth">

      </div>
      <Link to={`/product/${product_name}`}>
        <img src={data.image_Url[0].url} alt="" className='imgboxoth'/>
      </Link>
      <Link to='/'>
        <h5 className="shop-nameoth">
          {data.shop.name}
        </h5>
      </Link>
      <Link to={`/product/${product_name}`}>
        <h4 className="productnameoth">
          {data.name.length > 18 ? data.name.slice(0,18) + '...' : data.name}
        </h4>
      </Link>

      <div className="price-detailoth">
        <h4>${data.price}</h4>
        <h5>${data.discount_price}</h5>
      </div>

    <div className="other-detail">
       <h5>Sold Out: {data.total_sell}</h5>
       <div className="review-box">
         <h3>{data.rating}</h3>
         <AiFillStar className='star'/>
       </div>
    </div>
    
    <div className="heartoth">
          {click ? (
            <BsHeartFill
              size={22}
              className="heartimgoth"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#fff"}
              title="Remove from wishlist"
            />
          ) : (
            <BsHeart
              size={22}
              className="heartimgoth"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#fff"}
              title="Add to wishlist"
            />
          )}
    </div>

     <div className="addcartoth" onClick={() => addToCart(data.id)}>
        <button>
        <BsCart2 className='cartoth'/>
        <h4>Add To Cart</h4>
       </button>
     </div>
  </div>  
  )
}

export default Productcardother;