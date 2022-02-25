import { useDispatch } from 'react-redux';
import cartSlice from '../slices/cartSlice';

const EachCartItem = (obj) => {
  const { cartItem } = obj;
  const { removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const total = parseInt(cartItem.price, 10) * parseInt(cartItem.quantity);
  const handleDelete = (identifier) => {
    dispatch(removeFromCart(identifier));
  };
  return (
    <div>
      <div>{cartItem.name}</div>
      <div>{cartItem.quantity}</div>
      <img
        className="cart-image"
        src={process.env.PUBLIC_URL + '/assets/images/' + cartItem.image}
        alt={cartItem.name}
      ></img>
      <div>each: ${cartItem.price.toLocaleString()}</div>
      <div>total: ${total.toLocaleString()}</div>
      <button onClick={() => handleDelete(cartItem.id)}>delete</button>
    </div>
  );
};

export default EachCartItem;

// return (
//   <div className="product-item">
//     <div className="product-name">{product.name}</div>
//     <div>{product.price}</div>
//     <img
//       className="product-image"
//       src={process.env.PUBLIC_URL + '/assets/images/' + product.image}
//       alt={product.name}
//     ></img>
//     <form className="product-form" onSubmit={handleSubmit}>
//       <input type="number" className="product-quantity"></input>
//       <button onClick={() => handleClick(product)}>add to cart</button>
//     </form>
//   </div>
// );
