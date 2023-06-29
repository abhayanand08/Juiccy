import React, { useState } from 'react'
import '../ItemDetail/ItemDetail.css';
import {useNavigate, Link} from 'react-router-dom';
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../redux/actions/cartAction';

const ItemDetail = ({data}) => {

  const {cart} = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const [click, setClick]= useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const addToCarthandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if(isItemExists){
        alert("Item already in cart")
        console.log(data.price)
    }else{
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        alert('Item added to cart')
    }
  }

  return (
    <div className='item-main'>
      {
        data ? (
          <div className='item-parent'>
             <div className="rightpart-item">
               <div className="main-image">
                 <img src={data.image_Url[select].url} alt="" />
               </div>
               <div className="other-image">
                <div className={`${select === 0 ? 'selected-img' : 'unselected-img'}`}>
                  <img src={data?.image_Url[0].url} alt="" 
                  onClick={() => setSelect(0)} className='smaller-img'/>
                </div>
                <div className={`${select === 1 ? 'selected-img' : 'unselected-img'}`}>
                  <img src={data?.image_Url[1].url} alt="" 
                  onClick={() => setSelect(1)} className='smaller-img'/>
                </div>
               </div>
             </div>

             <div className="leftpart-item">

               <h1>{data.name}</h1>

               <p>{data.description}</p>

               <div className="priceitem">
                 <h3>{data.price ? '$' + data.price: null}</h3>
                 <h4>${data.discount_price}</h4>
               </div>

               <div className="other-items">
                  <div className="increm-box" onClick={incrementCount}>
                     <BsPlus size={20} className='increm-icon'/>
                  </div>
                  <p>{count}</p>
                  <div className="increm-box" onClick={decrementCount}>
                     <BiMinus size={20} className='increm-icon'/>
                  </div>
               </div>

               <div className="addcartitem" onClick={() => addToCarthandler(data.id)}>
                   <button>
                   <BsCart2 className='cart'/>
                   <h4>Add To Cart</h4>
                   </button>
               </div>

               <div className="shop-detail">
                 <h3>Shop Details :</h3>
                 <div className="shop-info">
                  <img src= {data.shop.shop_avatar.url} alt="" />
                  <h4>{data.shop.name}</h4>
                 </div>
               </div>

               <div className="rating-item">
                 <h3>Rating :</h3>
                 <div className="review-box">
                   <h4>{data.rating}</h4>
                   <AiFillStar className='star'/>
                 </div>
               </div>

             </div>

          </div>
        ) : null
      }


    </div>
  )
}

export default ItemDetail