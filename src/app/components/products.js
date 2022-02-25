import getProductList from '../data/productList';
import cartSlice from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

const EachProduct = (obj) => {
  const { product } = obj;
  const { addToCart } = cartSlice.actions;
  const dispatch = useDispatch();

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const getInputValue = e.target.querySelector('.product-quantity').value;
    const amount = parseInt(getInputValue, 10);
    const newItem = { ...item };
    newItem.quantity = isNaN(amount) ? 1 : amount;
    dispatch(addToCart(newItem));
  };

  return (
    <div className="product-item">
      <div className="product-name">{product.name}</div>
      <div>{product.price}</div>
      <img
        className="product-image"
        src={process.env.PUBLIC_URL + '/assets/images/' + product.image}
        alt={product.name}
      ></img>
      <form className="product-form" onSubmit={(e) => handleSubmit(e, product)}>
        <input type="number" className="product-quantity"></input>
        <button>add to cart</button>
      </form>
    </div>
  );
};

const Products = () => {
  const productList = getProductList();
  return (
    <div id="product-container">
      <div id="product-container-child">
        {productList.map((product) => {
          return <EachProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;

// src={process.env.PUBLIC_URL + '/assets/images/' + 'wonderdoge.png'}
