import React from 'react';
import TodosList from './TodosList';


const todos = [
  {
    task       : 'make React Tutorial',
    isCompleted: false
  },
  {
    task       : 'eat dinner',
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>React todos app</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;