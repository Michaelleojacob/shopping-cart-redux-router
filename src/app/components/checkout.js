import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  const getTotal = () => {
    let sum = 0;
    cart.map((item) => {
      const itemTotal = item.quantity * item.price;
      return (sum += itemTotal);
    });
    return sum;
  };
  const getTotalQuantity = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity));
    return sum;
  };
  const totalQuantity = getTotalQuantity();
  const sum = getTotal();
  return (
    <div id="checkout-content">
      <div id="checkout-details">order details</div>
      <div id="checkout-unique">
        unique items
        <div>{cart.length}</div>
      </div>
      <div id="checkout-quantity">
        quantity
        <div>{totalQuantity}</div>
      </div>
      <div id="checkout-total">
        order total
        <div>{sum}</div>
      </div>
      <div id="checkout-btn-container">
        <button id="checkout-btn">checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
