import React from 'react';

const AddedCart = ({cart}) => {
  console.log(cart);
  const { img, name, bullet } = cart;
  return (
    <div className='addedCart'>
      <img src={img} alt={name} className="addedCart__img" />
      <div className="addedCart__info">
        <h4 className='addedCart__title'>{name}</h4>
        <span className='addedCart__bullet'>Bullet: {bullet}</span>
      </div>
    </div>
  );
};

export default AddedCart;