import {TodoProvider} from './component/Context';
import { useEffect, useState } from "react";
import Form from './component/Form'
import {v4 as uuid4} from 'uuid'
function App() {
  const [todos,setTodo] = useState([]);

  const addTodo = (todo)=>{
    setTodo([...todos, { id: uuid4(), todo: todo, compleled: false}])
  }
  const updateTodo=(id, todo)=>{
   setTodo(todos.map((item)=>item.id === id ? {...item,todo:todo} : item))
  }
  const toggleComplete = (id) =>{
  setTodo(todos.map((item)=>{
    if(item.id===id){
      return {...item,compleled:!item.compleled};
    }else{
      return item
    }
  }))
  }
  const deleteTodo = (id)=>{
   setTodo(todos.filter((item)=>item.id !== id))
  }
  useEffect(()=>{
    let todos = JSON.parse(localStorage.getItem("todo"))
    if(todos && todos.length){
      setTodo(todos)
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])
 

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}} >
    <div className='bg-gray-600 w-full min-h-screen font-mono'>
      <h1 className='bg-gray-700 text-5xl text-white p-3 font-semibold text-center sticky top-0'>Todo List</h1>
      <Form/>
    </div>
    </TodoProvider >
  );
}

export default App;
