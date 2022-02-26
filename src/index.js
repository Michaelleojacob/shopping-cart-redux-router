import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store/store';
import Nav from './app/components/nav';
import App from './app/app';
import Products from './app/components/products';
import Cart from './app/components/cart';
import Contact from './app/components/contact';

render(
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
