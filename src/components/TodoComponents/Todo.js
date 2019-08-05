import React from 'react';

const Todo = props => {
    
  return (
      <>
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >


    </div>
    <ul>
        <li>
        <p>{props.item.item}</p>     
        <button onClick={(e)=> this.removeItem(this.props.id)} type='button' className='btn btn-default btn-sm' >
        Remove
        </button>

        </li>
    </ul>
    </>

  );
};

export default Todo;
