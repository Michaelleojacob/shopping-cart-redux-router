import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div id="nav-container">
      <div id="nav-links">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
            to="/"
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
            to="/products"
          >
            products
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
            to="/cart"
          >
            cart <span id="nav-cart-items">{cart.length}</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
            to="/contact"
          >
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Nav;
