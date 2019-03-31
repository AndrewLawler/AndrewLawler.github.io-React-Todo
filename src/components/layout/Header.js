import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
        <h1><b>TodoList</b></h1>
    </header>
  )
}

const headerStyle = {
  background: '#4040bf',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;

