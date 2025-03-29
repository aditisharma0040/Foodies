import React from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
export const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="street" />
        
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs{getTotalCartAmount()===0?0:getTotalCartAmount() + 1}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Pay</button>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
