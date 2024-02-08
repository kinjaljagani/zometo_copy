import React from "react";
import Filter from "../filter";
import DeliveryCollection from "./deliveryCollection";

const deliveryFilter = [
  {
    id:1,
    icon: <i class="fa-solid fa-filter"></i>,
    title: "filter"
  },
  {
    id:2,
    icon: "",
    title: "Rating: 4.0+"
  },
  {
    id:3,
    icon: "",
    title: "Pure Veg"
  },
  {
    id:4,
    icon: <i class="fa-solid fa-angle-down"></i>,
    title: "Cuisines"
  }
]

const Delivery = () => {
  return (
    <div>
      <div class="container my-4">
        <div class="row">
          <div class="col-lg-12">
            <Filter filterlist={deliveryFilter}/>
          </div>
        </div>
      </div>
            <DeliveryCollection/>
    </div>
  );
};

export default Delivery;
