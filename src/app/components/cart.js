import { useSelector } from 'react-redux';

// const displayEachItemInCart = (arr) => {
//   arr.map((item) => {
//     return (
//       <div key={item.num}>
//         <div>{item.name}</div>
//       </div>
//     );
//   });
// };

const Cart = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.num}>
              <div>{item.num}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
