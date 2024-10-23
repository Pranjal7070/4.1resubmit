import React from 'react';
import './styles.css';
  // Make sure to create a separate CSS file for styling

function Header() {
  return (
    <header className="site-header">
      <h1>DEV@Deakin</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="btn post">Post</button>
        <button className="btn login">Login</button>
      </div>
    </header>
  );
}

export default Header;
