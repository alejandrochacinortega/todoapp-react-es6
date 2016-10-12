import React from 'react';
import _ from 'lodash';

import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';





class TodosList extends React.Component {

  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props} />)
  }

  render() {
    console.log('this.props.todos ', this.props.todos);
    return (
      <table>
        <TodoListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

export default TodosList;