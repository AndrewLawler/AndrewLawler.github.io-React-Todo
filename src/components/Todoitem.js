import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      padding: '10px',
      background: '#EEEEED',
      border: '1px solid #967E18',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      textAlign: 'left',
      paddingLeft: 'px',
    }
  } 

  getButton = () => {
    return {
      background: '#fff',
      color: 'black',
      border: '1px solid #967E18',
      width: '89px',
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
          <input style={{float: 'left', display: 'block', paddingTop: '10px'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
          <p style={{paddingLeft: '20px'}}>
            { title }
          </p>
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
