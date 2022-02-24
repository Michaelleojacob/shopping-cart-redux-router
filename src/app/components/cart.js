import { useSelector } from 'react-redux';

const EachCartItem = (obj) => {
  const { cartItem } = obj;
  return (
    <div>
      <div>{cartItem.name}</div>
    </div>
  );
};

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
