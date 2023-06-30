import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import '../BestDeals/BestDeals.css'
import Productcard from '../Productcard/Productcard';
import { productData } from '../../data/data';

const BestDeals = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
    const d = productData && productData.sort((a,b) => a.total_sell - b.total_sell);
    const firstfive = d.slice(0,5);
    setData(firstfive);
    }, []);

  return (
    <div id='BestDeals'>
      <div className='bestdeal-main'>
        <div className='heading-bestdeal'>
          <h1>Best Deals</h1>
        </div>
        <div className="section-bestdeal">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <Productcard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default BestDeals;