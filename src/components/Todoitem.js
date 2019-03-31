import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      padding: '5px',
      background: '#f4f4f4',
      border: '1px solid #4040bf',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  } 

  getButton = () => {
    return {
      background: '#fff',
      color: '#4040bf',
      border: '1px solid #4040bf',
      width: '96px',
      height: '22px',
      float: 'right',
      textAlign: 'center',
      paddingTop: '1px',
      fontSize: '13px',
    
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <btn style={this.getButton()} onClick={this.props.delTodo.bind(this, id)}>Delete</btn>
          <input style={{float: 'left'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
          { title }
        </p>
      </div>
    )
  }
}

// PropTypes
Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default Todoitem
