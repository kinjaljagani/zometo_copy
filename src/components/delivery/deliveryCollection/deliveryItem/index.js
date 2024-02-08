import React from 'react'
import './deliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
        <div className="delivery-item-box d-flex-column text-center">
          <div className="delivery-item mb-2">
            <img
              className="delivery-item-img "
              src={item.cover}
              alt={item.title}
            />
          </div>
          <p className='delivery-item-name'>{item.title}</p>
        </div>
      );
}

export default DeliveryItem
