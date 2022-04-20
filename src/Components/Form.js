import React from 'react';

const Form = ({ setStatus,setInputText, todos, setTodos, inputText }) =>{
    const inputTextHandler= (e) =>{
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id:Math.random()*1000},
        ]);
        setInputText('');
    };

    const statusHandler =(e) =>{
        setStatus(e.target.value);
    }

    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Все</option>
          <option value="completed">Сделанные</option>
          <option value="uncompleted">Несделанные</option>
        </select>
      </div>
    </form>
    );

};

export default Form;