import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  // State for todos
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the rubbish',
        completed: false
      },
      {
        id: 2,
        title: 'Do the washing',
        completed: false
      },
      {
        id: 3,
        title: 'Do current homework',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  getStyles = () => {
    return {
      color: 'blue',
      padding: '10px',
    }
  } 

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
  }

  // full render
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
