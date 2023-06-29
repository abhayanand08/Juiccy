import React from 'react'
import '../ProfileSidebar/ProfileSidebar.css'
import { useNavigate } from 'react-router-dom'
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineMessage, AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineLocalOffer, MdPayment} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import {FaRegAddressBook} from 'react-icons/fa'
import axios from 'axios';
import { server } from '../../server'

const ProfileSidebar = ({setActive, active}) => {

    const navigate = useNavigate();

    const logoutHandler = () => {
      axios.get(`${server}/user/logout`, {withCredentials:true}).then((res) => {
         alert(res.data.message);
         navigate('/login');
         window.location.reload(true);
      }).catch((err) => {
         console.log(err.response.data.message);
      })
    }

  return (
    <div className='profilesidebar-main'>
         <div className="sidebar-menu" onClick={() => setActive(1)}>
            <AiOutlineUser size={28} color={active === 1 ? 'red' : ''}/>
            <p className={`${active === 1 ? 'redtext' : 'normaltext'}`}>Profile</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(2)}>
            <AiOutlineShoppingCart size={28} color={active === 2 ? 'red' : ''}/>
            <p className={`${active === 2 ? 'redtext' : 'normaltext'}`}>Orders</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(3)}>
            <MdOutlineLocalOffer size={28} color={active === 3 ? 'red' : ''}/>
            <p className={`${active === 3 ? 'redtext' : 'normaltext'}`}>Offers</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(4)}>
            <AiOutlineMessage size={28} color={active === 4 ? 'red' : ''}/>
            <p className={`${active === 4 ? 'redtext' : 'normaltext'}`}>Inbox</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(5)}>
            <BiMap size={28} color={active === 5 ? 'red' : ''}/>
            <p className={`${active === 5 ? 'redtext' : 'normaltext'}`}>Track Order</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(6)}>
            <FaRegAddressBook size={28} color={active === 6 ? 'red' : ''}/>
            <p className={`${active === 6 ? 'redtext' : 'normaltext'}`}>Address</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(7)}>
            <MdPayment size={28} color={active === 7 ? 'red' : ''}/>
            <p className={`${active === 7 ? 'redtext' : 'normaltext'}`}>Payment Methods</p>
         </div>

         <div className="sidebar-menu" onClick={() => setActive(8) || logoutHandler()}>
            <AiOutlineLogout size={28} color={active === 8 ? 'red' : ''}/>
            <p className={`${active === 8 ? 'redtext' : 'normaltext'}`}>Logout</p>
         </div>

    </div>
  )
}

export default ProfileSidebar