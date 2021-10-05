import React from 'react';
import Cartcomponent from '../Cartcomponent/Cartcomponent';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  const totalReducer = (previous, seller) => previous + seller.salary;
  const total = cart.reduce(totalReducer, 0);
  return (
    <div className='cart'>
      <h5>Developers Added: {cart.length}</h5>
      <p>Total Cost: {total}</p>
      <div className='developer'>
        {cart.map((cartAdded) => (
          <Cartcomponent
            cartAdded={cartAdded}
            key={cartAdded.id}
          ></Cartcomponent>
        ))}
      </div>
      <button className='btn text-white mt-4 ms-2'>Hire Now</button>
    </div>
  );
};

export default Cart;
