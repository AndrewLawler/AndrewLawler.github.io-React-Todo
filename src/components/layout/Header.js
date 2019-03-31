import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <h1><b>TodoList</b></h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff'
}

const headerStyle = {
  background: '#4040bf',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;

