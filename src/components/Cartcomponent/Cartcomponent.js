import React from 'react';

const Cartcomponent = (props) => {
  const { img, name } = props.cartAdded;
  return (
    <div className='row border m-2'>
      <div className='col-5'>
        <img src={img} alt='' className='img-fluid' />
      </div>
      <div className='col-7'>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Cartcomponent;
