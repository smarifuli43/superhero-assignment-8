import React from 'react';
import './Seller.css'
const Seller = (props) => {
  console.log(props);
  const { name, img, age, salary, role, specialist, country } = props.seller;
  return (
    <div className="col">
    <div className="card h-100 shadow border-0 p-3">
      <img src={img} className="card-img-top card-img" alt="..."/>
      <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Role: { role}</p>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Skills: { specialist}</p>
          <p className="card-text">Salary: { salary} </p>
          <p className="card-text"> Country: {country}</p>
          <button className="btn btn-danger"> Hire me</button>
      </div>
    </div>
  </div>
  
  );
};

export default Seller;