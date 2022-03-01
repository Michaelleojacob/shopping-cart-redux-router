import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store/store';
import Header from './app/components/header';
import Nav from './app/components/nav';
import App from './app/app';
import Products from './app/components/products';
import Cart from './app/components/cart';
import Contact from './app/components/contact';

render(
  // <BrowserRouter basename="/shopping-cart-redux-router">
  // <BrowserRouter>
  <HashRouter>
    <Provider store={store}>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Provider>
  </HashRouter>,
  // </BrowserRouter>,
  document.getElementById('root'),
);
