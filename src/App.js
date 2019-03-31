import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  // State for todos
  state = {
    todos: []
  }

  // Mark the todo as complete 

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  // full render
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="type">
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos style={{paddingTop: '5px'}} todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
