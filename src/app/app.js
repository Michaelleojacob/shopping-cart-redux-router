import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const handleLink = (link) => navigate(link);
  return (
    <div id="home-container">
      <div id="home-container-child">
        <div id="home-title">Weclome to my store!</div>

        <div id="home-for-sale-span">
          <span>Many fake and wonderful stickers for sale.</span>
          <div id="home-size-span">
            <span>Currently all stickers come in one size - nonexistent.</span>
          </div>
        </div>

        <div id="home-browsing-span">
          <span>
            While browsing the products, click any of the images to enlarge the
            image.
          </span>
        </div>

        <div id="home-cart-instructions">
          <div>
            The cart on the nav bar will keep track of unique items in the cart.
          </div>
        </div>

        <div>
          <span id="">
            If you would like to see more details about the order then click the
            order info button below or the cart button on the nav.
            <div>
              <button className="home-btn" onClick={() => handleLink('/cart')}>
                order info
              </button>
            </div>
          </span>
        </div>

        <div id="home-navigate-btns">
          <div id="home-browse-btn-div">
            Browse stickers!
            <div>
              <button
                className="home-btn"
                id="browse-btn"
                onClick={() => handleLink('/products')}
              >
                browse products
              </button>
            </div>
          </div>

          <div id="home-get-in-touch">
            Questions?
            <div>
              <button
                className="home-btn"
                onClick={() => handleLink('/contact')}
              >
                get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
