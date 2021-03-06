import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cartSlice from '../slices/cartSlice';

const UpdateQuantityOpen = (props) => {
  const id = props.id;
  const { updateQuantity, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.querySelector('.updateQuantity').value;
    const newAmount = parseInt(value, 10);
    if (isNaN(newAmount)) return;
    if (newAmount === 0) return dispatch(removeFromCart(id));
    dispatch(updateQuantity({ id, newAmount }));
    e.target.querySelector('.updateQuantity').value = '';
    props.changeDisplay();
  };
  return (
    <div className="cart-item-form-container">
      <form className="cart-item-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          enter new amount:
          <div>
            <input className="updateQuantity" type="number" min="1"></input>
          </div>
        </label>
        <div className="cart-btn-container">
          <button className="cart-btn">save</button>
          <button
            className="cart-btn"
            type="button"
            onClick={props.changeDisplay}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const UpdateQuantiyClosed = (props) => {
  return (
    <div>
      <div>
        <button className="cart-btn" onClick={props.changeDisplay}>
          change quantity
        </button>
      </div>
    </div>
  );
};

const EachCartItem = (obj) => {
  const { cartItem } = obj;
  const { removeFromCart, quantityPlusOne, quantityMinusOne } =
    cartSlice.actions;
  const [displayUpdateQuantity, setDisplayUpdateQuantity] = useState(false);
  const changeDisplay = () => setDisplayUpdateQuantity(!displayUpdateQuantity);
  const dispatch = useDispatch();
  const total = parseInt(cartItem.price, 10) * parseInt(cartItem.quantity);
  const handleDelete = (identifier) => {
    dispatch(removeFromCart(identifier));
  };
  return (
    <div className="cart-item">
      <img
        className="cart-image"
        src={process.env.PUBLIC_URL + '/assets/images/' + cartItem.image}
        alt={cartItem.name}
      ></img>
      <div>{cartItem.name}</div>
      <div className="cart-quantity-container">
        <button
          className="cart-btn"
          onClick={() => dispatch(quantityMinusOne(cartItem.id))}
        >
          -
        </button>{' '}
        {cartItem.quantity}
        <button
          className="cart-btn"
          onClick={() => dispatch(quantityPlusOne(cartItem.id))}
        >
          +
        </button>
      </div>
      <div>each: ${cartItem.price.toLocaleString()}</div>
      <div>total: ${total.toLocaleString()}</div>
      <div>
        {displayUpdateQuantity ? (
          <UpdateQuantityOpen changeDisplay={changeDisplay} id={cartItem.id} />
        ) : (
          <UpdateQuantiyClosed changeDisplay={changeDisplay} />
        )}
      </div>
      <div>
        <button className="cart-btn" onClick={() => handleDelete(cartItem.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default EachCartItem;
