import { useSelector } from 'react-redux';
import EachCartItem from './eachCartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div>
      <div>
        {cart.map((cartItem) => {
          return <EachCartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
