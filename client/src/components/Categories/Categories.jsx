import React from 'react'
import '../Categories/Categories.css'
import { categoriesData } from '../../data/data'
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate  = useNavigate();

  return (
    <div className='parentdiv'>
      <div className="categories-main" id='categories'>
        <div className="cat-heading">
            <h2>Categories</h2>
        </div>
         <div className="section-cat">
         {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="cat-first"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className='cat-second'>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="img-cat"
                    alt=""
                  />
                </div>
              );
            })}
         </div>
      </div>
    </div>
  )
}

export default Categories