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
            to="/app"
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
            to="/"
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
            cart {cart.length}
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
