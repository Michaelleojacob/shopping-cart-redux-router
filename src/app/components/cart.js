import { useSelector } from 'react-redux';
import EachCartItem from './eachCartItem';
import Checkout from './checkout';

const Cart = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div id="cart-checkout-container">
      <div id="cart-container">
        {cart.map((cartItem) => {
          return <EachCartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div id="checkout-container">
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
