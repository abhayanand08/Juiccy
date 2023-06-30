import React, { useState } from 'react'
import '../ProfileContent/ProfileContent.css'
import { backened_url, server } from '../../server'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateUserInformation } from '../../redux/actions/UserAction';
import axios from 'axios';

const ProfileContent = ({active}) => {
  const {user} = useSelector((state) => state.user);
  const [name,setName] = useState(user && user?.name);
  const [email,setEmail] = useState(user && user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
   e.preventDefault();
   dispatch(updateUserInformation(name, email, phoneNumber, password));
  }

//   const ImagechangeHandler = async(e) => {
//    const img = e.target.files[0];
//    setAvatar(img);
//    const form = new FormData();

//    form.append("avatar", e.target.files[0]);

//     await axios
//       .put(`${server}/user/update-avatar`, form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       })
//       .then((response) => {
//          dispatch(loadUser());
//          alert("Profile image updated");
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }

  
  return (
    <div className='profilecontent-main'>
       {
        active ===1 && (
          <>
          <div className="profile-body">
             <div className="profile-info">
                <img src={`${backened_url}${user?.avatar}`} alt="" className='profilepg-img'/>
                <div className="change-img">
                 <button type='update'>Change image</button>
                  {/* <input type='file' id='avatar'/> */}
                </div>
             </div>
          </div>

          <div className="profile-detail">
            <form onSubmit={handleSumbit} aria-required={true}>

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
                 <label>Password</label>
                 <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
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