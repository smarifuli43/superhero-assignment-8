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
    <div className='container'>
      <div className='row'>
        <div className='col-9'>
          <div className='seller-container'>
            {sellers.map((seller) => (
              <Seller seller={seller}></Seller>
            ))}
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
};

export default Market;