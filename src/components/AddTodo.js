import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', paddingBottom: '5px' }}>
        <input 
            type="text" 
            name="title" 
            style={{ flex: '10', padding: '5px', border: '1px solid #4040bf'}}
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
        />
        <input
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: '1', background: 'white', color: '#4040bf', border: '1px solid #4040bf'}}
        />
      </form>
    )
  }
}

export default AddTodo
