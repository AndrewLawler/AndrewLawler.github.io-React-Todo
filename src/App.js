import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';

class App extends Component {
  // State for todos
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Welcome to Todo',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Add some more Todos',
        completed: false 
      }
    ]
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
      <Router> 
        <div className="App">
          <div className="container">
            <div className="type">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos style={{paddingTop: '5px'}} todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>  
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
