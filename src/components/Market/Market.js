import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Seller from '../Seller/Seller';

const Market = () => {
  const [sellers, setSellers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);

  // function to handle cart
  const handleCart = (data) => {
    const newCart = [...cart, data];
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-9'>
          <div className='seller-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {sellers.map((seller) => (
              <Seller
                key={seller.id}
                seller={seller}
                handleCart={handleCart}
              ></Seller>
            ))}
          </div>
        </div>
        <div className='col-3'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Market;
