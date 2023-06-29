import React, { useState } from 'react'
import '../Header/Header.css'
import {HiOutlineMenu} from 'react-icons/hi';
import {RiSearchLine} from 'react-icons/ri';
import {BiUserCircle, BiCart} from 'react-icons/bi';
import {LuUtensilsCrossed} from 'react-icons/lu';
import {productData} from '../../data/data'

import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { backened_url } from '../../server';
import Cart from '../Cart/Cart';


const Header = () => {

    const  [menu, setmenu] = useState(true);
    const {isAuthenticated, user, loading} = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [openCart, setOpenCart] = useState(false);

    // if(screen.width>='946'){
    //    setmenu(!menu)
    // }

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    
        const filteredProducts =
          productData &&
          productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
          );
        setSearchData(filteredProducts);
      };

  return (
    <>
        <nav>
            <div className="left-side">
              {/* <img src="" alt="" /> */}
              <h2>Juiccy</h2>
            </div>
            <div className="middle-side">
            <div className="list-items">
                <ul className= {menu ? 'nav-links' : 'nav-links-mobile'} onClick={() => setmenu(true)}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/faqs'>FAQs</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li className='other-item'><Link to='/cart'>Cart</Link></li>
                    <li className='other-item'><Link to='/profile'>Profile</Link></li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="search-bar">
                <input type="text" name='search' id='search' placeholder='Search Drinks...' autoComplete='off' 
                value={searchTerm} onChange={handleSearchChange}/>
                <RiSearchLine className='search-icon'/>
              </div>
              {searchData && searchData.length !== 0 ? (
              <div className="search-palette">
                {searchData &&
                  searchData.map((i, index) => {
                    const d=i.name;
                    const Product_name = d.replace(/\s+/g, '-')
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="product-detail">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="product-image"
                          />
                          <h2>{i.name}</h2>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
              <div className="nav-icons">
               <BiCart className='navicon' onClick={() => setOpenCart(true)}/>
               {isAuthenticated ? (
               <Link to='/profile'>
                <img src={`${backened_url}${user?.avatar}`} alt='' className='profile-img'/>
               </Link> )
               :
               (
               <Link to='/login' className='navicon'><BiUserCircle /></Link>
               )
               }
               {menu ? <HiOutlineMenu className='menu-bar' onClick={() => setmenu(!menu)}/> : <LuUtensilsCrossed className='menu-bar' onClick={() => setmenu(!menu)}/>}
              </div>
                 
                 {
                  openCart ? (
                    <Cart setOpenCart={setOpenCart} />
                  ) : null
                 }

            </div>
        </nav>
    </>    
  )
}

export default Header