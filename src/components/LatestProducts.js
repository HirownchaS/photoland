import React from 'react';

//components
import ProductSlider from '../components/ProductSlider';

//useFetch Hook
import useFetch from '../hooks/useFetch.js';

const LatestProducts = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');
  // console.log(data);

  return (

  <div className='mb-16'> 
  <div className='container mx-auto'>
    <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
  </div>
    <ProductSlider data={data} />
  </div>
  );
};

export default LatestProducts;
