import React, { useEffect, useState } from 'react'
import '../ProductDetailsPage/ProductDetailsPage.css'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { productData } from '../../data/data';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Footer from '../../components/Footer/Footer';


const ProductDetailsPage = () => {

  const {name} = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  })

  return (
    <div>
      <Header />
      <ItemDetail data={data}/>
      <Footer />
    </div>
  )
}

export default ProductDetailsPage