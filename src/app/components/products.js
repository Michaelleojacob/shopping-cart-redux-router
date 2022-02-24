import getProductList from '../data/productList';

const EachProduct = (obj) => {
  const { product } = obj;

  const handleClick = () => {
    console.log('this item should be added to cart');
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
      <button onClick={handleClick}>add to cart</button>
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
