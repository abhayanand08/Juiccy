import React from 'react'
import '../OtherProducts/Otherproduct.css';
import { productData } from '../../data/data';
import Productcardother from '../Productcardother/Productcardother';

const Otherproduct = () => {
  return (
    <div className='otherproduct-main'  id='drinks'>
        <div className="heading-other">
            <h2>Featured Items</h2>
        </div>
        <div className="section-otheritem">
           {
           productData && productData.map((i,index) => 
           <Productcardother data={i} key={index}/>)
           }
        </div>
    </div>
  )
}

export default Otherproduct;