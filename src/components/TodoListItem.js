import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}

export default TodoListItem;