import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newtodo: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newtodo);
    this.setState({ newtodo: ''})
  };

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newtodo"
          placeholder='add new todo'
          onChange={this.handleChange}
          value={this.state.newtodo}
        />
        <button type='submit'>Add a new todo</button>
      </form>
      <button onClick={this.props.filterTodos}>
              Remove
      </button>
    </>
    );
  }
}

export default TodoForm;
