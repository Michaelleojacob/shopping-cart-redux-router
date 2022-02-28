import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const handleProducts = () => navigate('/products');
  const handleContact = () => navigate('/contact');
  return (
    <div id="home-container">
      <div id="home-title">Weclome to my store!</div>

      <div id="home-for-sale-span">
        <span>Many fake and wonderful stickers for sale.</span>
        <div id="home-size-span">
          <span>currently all stickers come in one size - nonexistent.</span>
        </div>
      </div>

      <div id="home-browsing-span">
        <span>
          While browsing the products, click any of the images to enlarge the
          image
        </span>
      </div>

      <div id="home-cart-instructions">
        <span>
          The cart on the nav bar will keep track of unique items in the cart.
        </span>
        <div>
          <span id="">
            If you would like to see a more detailed invoice of the items
            <button>click here to see detailed order information</button>
          </span>
        </div>
      </div>

      <div id="home-navigate-btns">
        <div id="home-browse-btn-div">
          Check out our stickers!
          <div>
            <button onClick={handleProducts}>browse products</button>
          </div>
        </div>

        <div id="home-get-in-touch">
          if you have any questions,
          <div>
            <button onClick={handleContact}>get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
