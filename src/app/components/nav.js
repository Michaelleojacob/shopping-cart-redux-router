import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div id="nav-container">
      <div id="nav-title">
        <div>nav</div>
      </div>
      <div id="nav-links">
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/products">products</Link>
        </div>
        <div>
          <Link to="/cart">cart {cart.length}</Link>
        </div>
        <div>
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
