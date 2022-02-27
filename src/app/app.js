import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const handleProducts = () => navigate('/products');
  const handleContact = () => navigate('/contact');
  return (
    <div>
      <div>Weclome to my store!</div>
      <div>Many wonderful cat and dog stickers for sale</div>
      <div>currently all stickers come in one size: fake.</div>
      <div>
        Browse the store: <button onClick={handleProducts}>products</button>
      </div>
      <div>
        get in touch: <button onClick={handleContact}>contact</button>
      </div>
    </div>
  );
};

export default App;

// const App = () => {
//   const { addToCart } = cartSlice.actions;
//   const dispatch = useDispatch();

//   // const cart = useSelector((state) => state.cartStore.cart);

//   const handleClick = () => {
//     dispatch(
//       addToCart({ name: 'thing1', num: Math.floor(Math.random() * 100000) }),
//     );
//   };

//   return (
//     <div>
//       <div>hi</div>
//       <button onClick={handleClick}>add something to cart</button>
//     </div>
//   );
// };

// export default App;

// sample image

/* <img
  src={process.env.PUBLIC_URL + '/assets/images/wonderdoge.png'}
  src={process.env.PUBLIC_URL + '/assets/images/' + 'wonderdoge.png'}
  alt="test"
></img> */
