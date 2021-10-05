import React, { useEffect, useState } from 'react';
import Seller from '../Seller/Seller';

const Market = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-9'>
    <div className='seller-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {sellers.map((seller) => (
              <Seller
                key={seller.id}
                seller={seller}
              ></Seller>
            ))}

          </div>
        </div>
        <div className='col-3'> hello</div>
      </div>
    </div>
  );
};

export default Market;
