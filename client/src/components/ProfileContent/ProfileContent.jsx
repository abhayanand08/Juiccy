import React, { useState } from 'react'
import '../ProfileContent/ProfileContent.css'
import { backened_url } from '../../server'
import { useSelector } from 'react-redux';

const ProfileContent = ({active}) => {
  const {user} = useSelector((state) => state.user);
  const [name,setName] = useState(user && user?.name);
  const [email,setEmail] = useState(user && user?.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zip, setZip] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  
  return (
    <div className='profilecontent-main'>
       {
        active ===1 && (
          <>
          <div className="profile-body">
             <div className="profile-info">
                <img src={`${backened_url}${user?.avatar}`} alt="" className='profilepg-img'/>
                <div className="change-img">
                  <button>Change image</button>
                </div>
             </div>
          </div>

          <div className="profile-detail">
            <form>

             <div className="one-line">
              <div className="each-field">
                 <label>Full Name</label>
                 <input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="each-field">
                 <label>Email Address</label>
                 <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
             </div>

             <div className="one-line">
              <div className="each-field">
                 <label>Phone</label>
                 <input type='number' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>

              <div className="each-field">
                 <label>Zip Code</label>
                 <input type='number' required value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>
             </div>

             <div className="one-line">
              <div className="each-field">
                 <label>Address 1</label>
                 <input type='text' required value={address1} onChange={(e) => setAddress1(e.target.value)} />
              </div>
              <div className="each-field">
                 <label>Address 2</label>
                 <input type='text' required value={address2} onChange={(e) => setAddress2(e.target.value)} />
              </div>
             </div>
              
             <div className="update-btn">
              <button>
                Update
              </button>
              </div> 
            </form>
          </div>
        </>  
        )
       }
    </div>
  )
}

export default ProfileContent