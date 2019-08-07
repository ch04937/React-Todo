import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';


const todoData = [
  {
    task: 'Learn setState',
    id: 1,
    completed: false
  }, 
  {
    task: 'Style my Todo List',
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
      todos: todoData,

    };
  }
  
  
  filterCompleted = (e) => {
    this.setState({
    todos: this.state.todos.filter(todo => !todo.completed)
  });
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {
            ...todo, completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    });
  };
  render() {  
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            />
        <TodoForm 
            addTodo={this.addTodo} 
            filterTodos={ this.filterCompleted }
            />
            
 

      </div>
    );
  }
}

export default App;
