import React, { useState, useEffect }  from 'react';
import "./App.css";
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  }, []);
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  const filterHandler =() =>{
      switch(status){
        case 'completed':
          setFilterTodos(todos.filter(todo =>todo.completed === true));
          break;
          case 'uncompleted':
            setFilterTodos(todos.filter(todo => todo.completed === false));
            break;
            default:
              setFilterTodos(todos);
              break;
      }
  };

  const saveLocalTodos =() =>{
    
      localStorage.setItem('todos',JSON.stringify(todos))

  };
const getLocalTodos = () =>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]));
  }
  else{
    let todolocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todolocal);
  }
};
  return (
    <div className="App">
    <header>
      <h1>Задачи</h1>
    </header>
      <Form filterTodos={filterTodos} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList filterTodos={filterTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
