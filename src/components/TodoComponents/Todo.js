import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
        <ul>
          <li>
            <p>{props.item.item}</p>
          </li>
        </ul>

    </div>
  );
};

export default Todo;
