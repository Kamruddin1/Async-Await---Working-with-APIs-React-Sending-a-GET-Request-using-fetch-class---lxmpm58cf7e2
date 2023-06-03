import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => data);
};

const App = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    getData().then(data=> setTodos(data) )
  },[])
  return (
    <div id="main">
      {todos.map(todo=> <div id={`todo-${todo.id}`}>{todo.title}</div>)}
    </div>
  )
}


export default App;
