import React from 'react';
import TodosList from './TodosList';
import CreateTodo from './CreateTodo';



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
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({todos: this.state.todos})
  }
}

export default App;