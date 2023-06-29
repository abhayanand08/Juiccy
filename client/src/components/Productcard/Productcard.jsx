import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Productcard/Productcard.css';
import {AiFillStar} from 'react-icons/ai';
import {BsHeartFill, BsHeart, BsCart2} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../redux/actions/cartAction';

const Productcard = ({data}) => {

  const {cart} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const d = data.name;
  const count = 1;
  const product_name = d.replace(/\s+/g, '-');

  const addToCart = (id) => {
    const isItemExists = cart && cart.find((i) => i.id === id);
    if(isItemExists){
      alert("Item already in cart")
    }else{
      dispatch(addTocart({...data,qty: count}))
      alert('Item added to cart')
    }
  }

  return (
    <div className='productcard-main'>
      <div className="productcard">

      </div>
      <Link to={`/product/${product_name}`}>
        <img src={data.image_Url[0].url} alt="" className='imgbox'/>
      </Link>
      <Link to='/'>
        <h5 className="shop-name">
          {data.shop.name}
        </h5>
      </Link>
      <Link to={`/product/${product_name}`}>
        <h4 className="productname">
          {data.name.length > 18 ? data.name.slice(0,18) + '...' : data.name}
        </h4>
      </Link>

      <div className="price-detail">
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
    
    <div className="heart">
          {click ? (
            <BsHeartFill
              size={22}
              className="heartimg"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#fff"}
              title="Remove from wishlist"
            />
          ) : (
            <BsHeart
              size={22}
              className="heartimg"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#fff"}
              title="Add to wishlist"
            />
          )}
    </div>

     <div className="addcart" onClick={() => addToCart(data.id)}>
        <button>
        <BsCart2 className='cart'/>
        <h4>Add To Cart</h4>
       </button>
     </div>
  </div>  
  )
}

export default Productcard;