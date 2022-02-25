import { useSelector } from 'react-redux';
import EachCartItem from './eachCartItem';
import Checkout from './checkout';

const Cart = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div id="cart-container">
      <div>
        {cart.map((cartItem) => {
          return <EachCartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div>
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
