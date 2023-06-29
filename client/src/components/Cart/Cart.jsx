import React, { useState } from 'react'
import '../Cart/Cart.css'
import {RxCross2} from 'react-icons/rx'
import {HiShoppingBag} from 'react-icons/hi'
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import { registerbg1 } from '../../images'

const Cart = ({setOpenCart}) => {

    const cartData = [
        {
            name: 'Capaccuinno',
            description: 'tesjhvuuigubklpohovbhghgytbjhigdtrehvkkv',
            price: '120',
        },
        {
            name: 'Masala Tea',
            description: 'tesjhvuuigubklpohovbhghgytbjhigdtrehvkkv',
            price: '80',
        },
        {
            name: 'Virgin Mojito',
            description: 'tesjhvuuigubklpohovbhghgytbjhigdtrehvkkv',
            price: '280',
        },
    ]

  return (
    <div className='cart-main'>
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
                    cartData && cartData.map((i, index) => (
                        <CartSingle key={index} data={i}/>
                    ))
                 }
            </div>
            <div className="checkout-btn">
                <button>
                    Checkout Now &nbsp;&nbsp;$1080
                </button>
            </div>
        </div>
    </div>
  )
}

const CartSingle = ({data}) => {
    const [value,setValue] = useState(1);
    const totalprice = data.price*value;
    return(
        <div className="cartsingle-main">
            <div className="cartsingle-content">
                <div className="cartitem-detail">
                    <img src={registerbg1} alt="" />
                </div>
                <div className="price-item">
                    <div>
                    <h5>{data.name}</h5>
                    <p>{data.description.length > 18 ? data.description.slice(0,18)+'...': data.description}</p>
                    </div>
                    <div className="other-item">
                    <div className="add-box" onClick={() => setValue(value+1)}>
                        <BsPlus size={20} className='add-img'/>
                    </div>
                    <p>{value}</p>
                    <div className="add-box minus" onClick={() => setValue(value === 1 ? 1 : value-1)}>
                       <BiMinus size={20} className='add-img'/>
                    </div>
                    <h3>${totalprice}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart