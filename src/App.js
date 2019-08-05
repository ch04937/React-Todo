import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    item: 'Learn setState',
    id: 1,
    completed: false
  }, 
  {
    item: 'Style my Todo List',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      item: 'Todo List: MVP',
      todo: todoData
    };
  }
  toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  addItem = itemName => {
    const newItem = {
      item: itemName, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };
  clearPurchased = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p>{this.state.item}</p>
        <ul>
          <li>
          </li>
        </ul>
        <TodoForm addItem={this.addItem} />
        <TodoList
            todo={this.state.todo}
            toggleItem={this.toggleItem}
            />


      </div>
    );
  }
}

export default App;
