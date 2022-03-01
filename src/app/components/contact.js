import {
  BsGithub,
  BsLinkedin,
  BsCodeSlash,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from 'react-icons/bs';

import { RiCopyrightLine } from 'react-icons/ri';

const github = 'https://github.com/Michaelleojacob';
const linkedin = 'https://www.linkedin.com/in/michael-leo-jacob/';
const repo = 'https://github.com/Michaelleojacob/shopping-cart-redux-router';
const fakeLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

const Contact = () => {
  const handleClick = (link) => window.open(link, '_blank').focus();
  return (
    <div id="contact-container">
      <div id="contact-title">check me out at</div>

      <div id="contact-actual-flair">
        <div
          className="contact-link-container"
          onClick={() => handleClick(github)}
        >
          <BsGithub className="contact-icon" />
        </div>
        <div
          className="contact-link-container"
          onClick={() => handleClick(linkedin)}
        >
          <BsLinkedin className="contact-icon" />
        </div>
        <div
          className="contact-link-container"
          onClick={() => handleClick(repo)}
        >
          <BsCodeSlash className="contact-icon" />
        </div>
      </div>

      <div id="contact-fake-flair">
        <div
          className="contact-fake-link-container"
          onClick={() => handleClick(fakeLink)}
        >
          <BsTwitter className="contact-icon" />
        </div>
        <div
          className="contact-fake-link-container"
          onClick={() => handleClick(fakeLink)}
        >
          <BsFacebook className="contact-icon" />
        </div>
        <div
          className="contact-fake-link-container"
          onClick={() => handleClick(fakeLink)}
        >
          <BsInstagram className="contact-icon" />
        </div>
      </div>

      <div id="contact-email">
        <RiCopyrightLine />
        michaelleojacob@gmail.com
      </div>
    </div>
  );
};

export default Contact;
