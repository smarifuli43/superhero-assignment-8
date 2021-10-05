import React from 'react';
import './Seller.css';

const Seller = (props) => {
  const { name, img, age, salary, role, specialist, country } = props.seller;
  return (
    <div className='col'>
      <div className='card h-100 shadow border-0 p-3 card-bg'>
        <img src={img} className='card-img-top card-img' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Name: {name}</h5>
          <p className='card-text'>Role: {role}</p>
          <p className='card-text'>Age: {age}</p>
          <p className='card-text'>Skills: {specialist}</p>
          <p className='card-text'>Salary: ${salary} </p>
          <p className='card-text'> Country: {country}</p>
          <button
            className='btn btn-danger'
            onClick={() => props.handleCart(props.seller)}
          >
            <i className='fas fa-cart-plus'></i> Add to Cart
          </button>
          <div className='social-media d-flex justify-content-around mt-4 fs-4 '>
            <a href='./'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='./'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='./'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='./'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
