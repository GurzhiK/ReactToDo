import React from 'react';
import Todo from './ToDo';
const ToDoList = ({todos, setTodos,filterTodos}) =>{

    return(
    <div className="todo-container">
      <ul className="todo-list">
          {filterTodos.map(todo => (
              <Todo todos={todos} 
              todo={todo} 
              setTodos={setTodos} 
              key={todo.id} 
              filterTodos={filterTodos}
              text={todo.text}/>
          ))}
      </ul>
    </div>
    );
};

export default ToDoList;