import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <h1>
          <b>
            <i style={{paddingRight: '10px'}} class="material-icons">computer</i>
            TodoList
            <i style={{paddingLeft: '10px'}} class="material-icons">computer</i>
          </b>
        </h1>

        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff'
}

const headerStyle = {
  background: '#E7BF18',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  textShadow: '1px 1px #967E18',
  border: '1px solid #967E18'
}

export default Header;

