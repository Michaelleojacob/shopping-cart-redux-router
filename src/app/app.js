import cartSlice from './slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const { addToCart } = cartSlice.actions;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartStore.cart);

  const handleClick = () => {
    dispatch(addToCart({ name: 'thing1' }));
    console.log(cart);
  };

  return (
    <div>
      <div>hi</div>
      <button onClick={handleClick}>add something to cart</button>
    </div>
  );
};

export default App;
