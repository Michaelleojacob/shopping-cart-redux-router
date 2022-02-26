const App = () => {
  return (
    <div>
      <div>Weclome to my store</div>
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
