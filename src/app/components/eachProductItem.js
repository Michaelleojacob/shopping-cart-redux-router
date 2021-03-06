import cartSlice from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Open = (props) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { addToCart } = cartSlice.actions;

  const handleSubmit = (e, item) => {
    e.preventDefault();
    if (isNaN(value) || value < 1) return;
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
    <div className="product-form-container">
      <form
        className="product-buy-many-form"
        onSubmit={(e) => handleSubmit(e, props.product)}
      >
        <div className="product-form-input">
          <button
            className="product-btn"
            type="button"
            onClick={decrementValue}
          >
            -
          </button>
          <input
            className="product-quantity"
            type={'number'}
            min={'0'}
            value={value}
            onChange={handleChange}
          ></input>
          <button
            className="product-btn"
            type="button"
            onClick={incrementValue}
          >
            +
          </button>
        </div>
        <div className="product-form-buttons">
          <button className="product-btn" type="submit">
            order
          </button>
          <button
            className="product-btn"
            type="button"
            onClick={props.changeIsOpen}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
const Closed = (props) => {
  return (
    <div>
      <button className="product-btn" onClick={props.changeIsOpen}>
        buy many
      </button>
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
      <div className="product-name">{product.name}</div>
      <div>${product.price.toLocaleString()}</div>
      <button className="product-btn" onClick={() => addOneToCart(product)}>
        add to cart
      </button>
      {isOpen ? (
        <Open changeIsOpen={changeIsOpen} product={product} />
      ) : (
        <Closed changeIsOpen={changeIsOpen} />
      )}
    </div>
  );
};

export default EachProduct;
