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
  };
  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            enter new amount:
            <div>
              <input className="updateQuantity" type="number"></input>
              <button>save</button>
            </div>
          </label>
        </form>
        <button onClick={props.changeDisplay}>close</button>
      </div>
    </div>
  );
};

const UpdateQuantiyClosed = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.changeDisplay}>change quantity</button>
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
    <div>
      <img
        className="cart-image"
        src={process.env.PUBLIC_URL + '/assets/images/' + cartItem.image}
        alt={cartItem.name}
      ></img>
      <div>{cartItem.name}</div>
      <div>
        <div>
          quantity:
          <button onClick={() => dispatch(quantityMinusOne(cartItem.id))}>
            -
          </button>{' '}
          {cartItem.quantity}
          <button onClick={() => dispatch(quantityPlusOne(cartItem.id))}>
            +
          </button>
        </div>
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
        <button onClick={() => handleDelete(cartItem.id)}>delete</button>
      </div>
    </div>
  );
};

export default EachCartItem;
