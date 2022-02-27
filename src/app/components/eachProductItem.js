import cartSlice from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Open = (props) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { addToCart } = cartSlice.actions;

  const handleSubmit = (e, item) => {
    e.preventDefault();
    if (isNaN(value) || value <= 1) return;
    const obj = { ...item };
    obj.quantity = parseInt(value, 10);
    dispatch(addToCart(obj));
    props.changeIsOpen();
  };
  const handleChange = (e) => setValue(e.target.value);
  const incrementValue = () => setValue(value + 1);
  const decrementValue = () => {
    if (value <= 1) return;
    setValue(value - 1);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, props.product)}>
        <button type="button" onClick={decrementValue}>
          -
        </button>
        <input
          className="product-quantity"
          type={'number'}
          min={'0'}
          value={value}
          onChange={handleChange}
        ></input>
        <button type="button" onClick={incrementValue}>
          +
        </button>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
      <button onClick={props.changeIsOpen}>close</button>
    </div>
  );
};
const Closed = (props) => {
  return (
    <div>
      <button onClick={props.changeIsOpen}>buy many</button>
    </div>
  );
};

const EachProduct = (obj) => {
  const { product } = obj;
  const dispatch = useDispatch();
  const { addToCart } = cartSlice.actions;
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => setIsOpen(!isOpen);

  const addOneToCart = (obj) => {
    const itemToAddToCart = obj;
    itemToAddToCart.quantity = 1;
    return dispatch(addToCart(itemToAddToCart));
  };

  const handleModal = (e) => {
    const element = e.target.parentElement.querySelector('.product-modal');
    element.style.display = 'block';
  };

  const closeModal = (e) => {
    const arr = Array.from(document.querySelectorAll('.product-modal'));
    arr.map((item) => (item.style.display = 'none'));
  };

  return (
    <div className="product-item">
      <div className="product-name">{product.name}</div>
      <div>${product.price.toLocaleString()}</div>
      <img
        onClick={handleModal}
        className="product-image"
        src={process.env.PUBLIC_URL + '/assets/images/' + product.image}
        alt={product.name}
      ></img>
      {/* modal */}
      <div onClick={closeModal} className="product-modal">
        <span className="product-modal-close">&times;</span>

        <div className="product-modal-close"></div>
        <img
          className="product-modal-content"
          src={process.env.PUBLIC_URL + '/assets/images/' + product.image}
          alt={product.name}
        ></img>
        <div className="product-modal-caption">{product.name}</div>
      </div>
      {/* modal */}
      <button onClick={() => addOneToCart(product)}>add to cart</button>
      {isOpen ? (
        <Open changeIsOpen={changeIsOpen} product={product} />
      ) : (
        <Closed changeIsOpen={changeIsOpen} />
      )}
    </div>
  );
};

export default EachProduct;
