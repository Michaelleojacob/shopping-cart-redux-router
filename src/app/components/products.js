import getProductList from '../data/productList';
import EachProduct from './eachProductItem';

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
