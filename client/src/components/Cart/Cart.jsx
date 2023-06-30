import React, { useState } from 'react'
import '../Cart/Cart.css'
import {RxCross2} from 'react-icons/rx'
import {HiShoppingBag} from 'react-icons/hi'
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromcart } from '../../redux/actions/cartAction'

const Cart = ({setOpenCart}) => {
    const {cart} = useSelector((state) => state.cart)

    const dispatch = useDispatch();

    const quantityChanger = (data) => {
        dispatch(addTocart(data));
    }

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.qty * item.price,
        0
    );

    const RemovefromCarthandler = (data) => {
        dispatch(removeFromcart);
    }

  return (
    <div className='cart-main'>
        {
            cart && cart.length === 0 ? (
              <div className="empty-cart">
                <div className='header-cart'>
                <div className="cross-btn">
                    <RxCross2 size={35}
                    className='cross-cursor'
                    onClick={() => setOpenCart(false)}
                    />
                </div>
                <div className="bag-icon">
                    <HiShoppingBag size={30}
                    className='bag-btn' />
                    <h3>Cart</h3>
                </div>
                </div>
                 <h4 className='empty-head'>Cart is Empty</h4>
              </div>
            ):
            (
        <div className="cart-sidebar">
            <div className='header-cart'>
                <div className="cross-btn">
                    <RxCross2 size={35}
                    className='cross-cursor'
                    onClick={() => setOpenCart(false)}
                    />
                </div>
                <div className="bag-icon">
                    <HiShoppingBag size={30}
                    className='bag-btn' />
                    <h3>Cart</h3>
                </div>
            </div>
            <div className="cart-item">
                 {
                    cart && cart.map((i, index) => (
                        <CartSingle key={index} data={i} quantityChanger={quantityChanger} RemovefromCarthandler={RemovefromCarthandler}/>
                    ))
                 }
            </div>
            <div className="checkout-btn">
                <button>
                    Checkout Now &nbsp;&nbsp;${totalPrice}
                </button>
            </div>
        </div>
            )
        }
        
    </div>
  )
}

const CartSingle = ({data, quantityChanger, RemovefromCarthandler}) => {
    const [value,setValue] = useState(data.qty);
    const totalpriceitem = data.price*value;

    const increment = (data) =>{
      setValue(value+1);
      const updateCartData = {...data, qty: value+1}
      quantityChanger(updateCartData)
    }

    const decrement = (data) =>{
        setValue(value === 1 ? 1 : value-1);
        const updateCartData = {...data, qty: (value === 1 ? 1 : value-1)}
        quantityChanger(updateCartData)
      }
    return(
        <div className="cartsingle-main">
            <div className="cartsingle-content">
                <div className="cartitem-detail">
                    <img src={`${data.image_Url[0].url}`} alt="" />
                </div>
                <div className="price-item">
                    <div>
                    <h5>{data.name.length > 15 ? data.name.slice(0,15)+'...': data.name}</h5>
                    <p>{data.description.length > 18 ? data.description.slice(0,18)+'...': data.description}</p>
                    </div>
                    <div className="other-item">
                    <div className="add-box" onClick={() => increment(data)}>
                        <BsPlus size={20} className='add-img'/>
                    </div>
                    <p>{data.qty}</p>
                    <div className="add-box minus" onClick={() => decrement(data)}>
                       <BiMinus size={20} className='add-img'/>
                    </div>
                    <h3>${totalpriceitem}</h3>
                    </div>
                    {/* <div className="remove-btn">
                    <AiOutlineDelete size={25} onClick={() => RemovefromCarthandler(data)}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cart