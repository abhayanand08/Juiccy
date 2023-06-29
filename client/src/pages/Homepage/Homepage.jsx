import React from 'react';
import '../Homepage/Homepage.css'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Categories from '../../components/Categories/Categories';
import BestDeals from '../../components/BestDeals/BestDeals';
import Otherproduct from '../../components/OtherProducts/Otherproduct';
import Poster from '../../components/Poster/Poster';


function Homepage() {
  return (
    <div className='homepagemain'>
        <Header />
        <Banner />
        <About />
        <Categories />
        <BestDeals />
        <Poster />
        <Otherproduct />

    </div>
  )
}

export default Homepage