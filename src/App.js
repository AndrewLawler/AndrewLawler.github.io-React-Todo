import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

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
  // full render
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
