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
  const sum = getTotal();
  return (
    <div>
      <div>checkout</div>
      <div>{sum}</div>
      <div>unique items: {cart.length}</div>
    </div>
  );
};

export default Checkout;
