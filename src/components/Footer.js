import React from 'react';
import './styles.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="subscribe">
          <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
          <input type="email" placeholder="[Enter your email]" />
          <button className="btn-subscribe">Subscribe</button>
        </div>

        <div className="footer-links">
          <div className="explore">
            <h5>Explore</h5>
            <ul>
              <li>Home</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>

          <div className="support">
            <h5>Support</h5>
            <ul>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="stay-connected">
            <h5>Stay connected</h5>
            <ul className="social-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>DEVEDeakin 2022</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
